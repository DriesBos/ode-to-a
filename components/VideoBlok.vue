<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="videoItem">
    <div class="videoItem-Container">
      <div class="videoItem-AspectRatioBox">
        <iframe
          :src="vimeoUrl"
          width="400"
          height="300"
          frameborder="0"
          allow="autoplay; fullscreen"
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
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
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
        { threshold: 0.7 }
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
