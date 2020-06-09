<template>
  <!-- prettier-ignore -->
  <section
    v-editable="blok"
    class="textBlok intersectionObserver"
    :class="{ fullscreen: blok.fullscreen, textCenter: blok.left_alignment, capslock: blok.capslock }"
  >
    <div class="graphic" :class="blok.graphic_alignment">
      <img v-if="blok.graphic" :src="blok.graphic" class="skewGraphic" />
    </div>
    <markdown v-if="blok.text" class="textBlok-Item textBlok-Main" :input="blok.text" />
    <markdown
      v-if="blok.fade_in_text"
      class="textBlok-Item textBlok-FadeIn"
      :input="blok.fade_in_text"
    />
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
  mounted() {
    // this.skewGraphic(3)
  },
  methods: {
    skewGraphic(range) {
      let proxy = { skew: 0 },
        skewSetter = gsap.quickSetter(".skewGraphic", "skewY", "deg"), // fast
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
.textBlok
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  width: 100%
  padding-top: var(--spacing-three)
  padding-bottom: var(--spacing-three)
  padding-left: var(--side-spacing)
  padding-right: var(--side-spacing)
  overflow: hidden
  &-Item
    width: 100%

// @media screen and ( min-width: $breakpoint-mobile)
//   .view-Single
//     .textBlok
//       padding-top: 0
//       padding-bottom: 0

@media screen and ( max-width: $breakpoint-mobile)
  .view-Single
    .textBlok
      padding-bottom: 3em
</style>
