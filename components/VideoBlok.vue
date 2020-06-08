<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="videoItem">
    <div class="videoItem-Container">
      <div class="videoItem-AspectRatioBox">
        <iframe
          class="skewVideo"
          :src="vimeoUrl + '?autoplay=1&loop=1&autopause=0&muted=1'"
          width="400"
          height="300"
          frameborder="0"
          allow="autoplay; fullscreen"
          autoplay="1"
          background="true"
          byline="false"
          color="#ffffff"
          controls="false"
          fun="false"
          loop="true"
          muted="true"
          playsinline="true"
          portrait="false"
          title="false"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default {
  props: {
    blok: Object
  },
  data() {
    return {
      vimeoUrl: ""
    }
  },
  mounted() {
    this.vimeoParser()
    this.skewVideo(3)
    const targets = document.querySelectorAll(".videoItem-AspectRatioBox")
    const lazyFilter = target => {
      this.observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.remove("filter")
            } else {
              entry.target.classList.add("filter")
            }
          })
        },
        { threshold: 0.5 }
      )
      this.observer.observe(target)
    }
    targets.forEach(lazyFilter)
  },
  methods: {
    vimeoParser() {
      this.vimeoUrl =
        "https://player.vimeo.com/video/" +
        this.blok.vimeo_plugin.vimeo_oembed.response.video_id
    },
    skewVideo(range) {
      let proxy = { skew: 0 },
        skewSetter = gsap.quickSetter(".skewVideo", "skewY", "deg"), // fast
        clamp = gsap.utils.clamp(`-${range}`, range) // don't let the skew go beyond 20 degrees.
      ScrollTrigger.create({
        onUpdate: self => {
          let skew = clamp(self.getVelocity() / -300)
          // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
          if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew
            gsap.to(proxy, {
              skew: 0,
              duration: 0.8,
              ease: "power3",
              overwrite: true,
              onUpdate: () => skewSetter(proxy.skew)
            })
          }
        }
      })
      // make the right edge "stick" to the scroll bar. force3D: true improves performance
      gsap.set(".skewElem", { transformOrigin: "right center", force3D: true })
    }
  }
}
</script>

<style lang="sass">
@import '~assets/styles/variables'

.videoItem
  position: relative
  display: flex
  justify-content: center
  padding-left: var(--spacing-two)
  padding-right: var(--spacing-two)
  margin-bottom: var(--spacing-one)
  &-Container
    position: relative
    width: random(20) + 50%
    @media screen and ( max-width: $breakpoint-mobile)
      width: 100%
  &-AspectRatioBox
    height: 0
    padding-top: 56.25%
    background-color: rgba(0,0,0,0)
    transition: background-color $transition-filter
  iframe
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    box-sizing: border-box
    opacity: 1
    transition: opacity $transition-filter
  & .filter
    background-color: var(--filter-color)
    iframe
      opacity: .25
</style>
