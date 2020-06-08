<template>
  <!-- prettier-ignore -->
  <section :id="blok._uid" v-editable="blok" class="imageGrid">
    <ul>
      <li v-for="image in blok.image" :key="image.filename" class="imageGrid-Item skewElem">
        <div class="imageGrid-Item_Placeholder">
          <div v-lazy-container="{ selector: 'img' }" class="vueLazy">
            <img
              v-if="image.filename"
              :srcset="
                `${transformImage(
                  image.filename,
                  '2880x0/filters:format(jpg):quality(75)'
                )} 2880w, ${transformImage(
                  image.filename,
                  '2560x0/filters:format(jpg):quality(75)'
                )} 2560w, ${transformImage(
                  image.filename,
                  '1920x0/filters:format(jpg):quality(75)'
                )} 1920w, ${transformImage(
                  image.filename,
                  '1680x0/filters:format(jpg):quality(75)'
                )} 1680w, ${transformImage(
                  image.filename,
                  '1370x0/filters:format(jpg):quality(75)'
                )} 1370w, ${transformImage(
                  image.filename,
                  '900x0/filters:format(jpg):quality(75)'
                )} 900w`
              " sizes="(max-width: 800px) 100vw, 50vw"
              :data-src="`${transformImage(image.filename, '800x0/filters:format(jpg):quality(75)')}`"
            >
          </div>
        </div>
      </li>
    </ul>
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
      observerOne: null
      // observerTwo: null
    }
  },
  mounted() {
    this.IntersectionObserverMixin(
      ".imageGrid-Item_Placeholder",
      "filter",
      this.observerOne,
      0.5
    )
    this.parallax()
    // this.skewImage(3)
  },
  methods: {
    randomNumber(min, max) {
      if (max == null) {
        max = min
        min = 0
      }
      if (min > max) {
        var tmp = min
        min = max
        max = tmp
      }
      return min + (max - min) * Math.random()
    },
    parallax() {
      var container = document.getElementById(this.blok._uid)
      var arr = container.querySelectorAll("li")
      arr.forEach(el => {
        gsap.to(el, {
          scrollTrigger: {
            trigger: el, // start the animation when ".box" enters the viewport (once)
            scrub: 0.66 // Seconds to catch up after scroll stop
            // markers: {startColor: "green", endColor: "red", fontSize: "12px"},
          },
          yPercent: this.randomNumber(-10, -50),
          ease: "expo.out:",
          onComplete: () => ScrollTrigger.refresh()
        })
      })
    },
    // parallax() {
    //   var container = document.getElementById(this.blok._uid)
    //   var arr = container.querySelectorAll("li")
    //   arr.forEach((el, index) => {
    //     if (index === 3 || index === 4) {
    //       gsap.to(el, {
    //         scrollTrigger: {
    //           trigger: el, // start the animation when ".box" enters the viewport (once)
    //           scrub: 0.66 // Seconds to catch up after scroll stop
    //           // markers: {startColor: "green", endColor: "red", fontSize: "12px"},
    //         },
    //         yPercent: this.randomNumber(-10, -20),
    //         ease: "expo.out:",
    //         onComplete: () => ScrollTrigger.refresh()
    //       })
    //     } else if (index === 0) {
    //       return
    //     } else {
    //       gsap.to(el, {
    //         scrollTrigger: {
    //           trigger: el, // start the animation when ".box" enters the viewport (once)
    //           scrub: 0.66 // Seconds to catch up after scroll stop
    //           // markers: {startColor: "green", endColor: "red", fontSize: "12px"},
    //         },
    //         yPercent: this.randomNumber(-30, -50),
    //         ease: "expo.out:",
    //         onComplete: () => ScrollTrigger.refresh()
    //       })
    //     }
    //   })
    // },
    IntersectionObserverMixin(node, addClass, observerName, treshhold) {
      const elements = document.querySelectorAll(node)
      const observerLoop = element => {
        this.observerName = new IntersectionObserver(
          // Callback
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add(addClass)
              } else {
                entry.target.classList.remove(addClass)
              }
            })
          },
          // Options
          { threshold: treshhold }
        )
        this.observerName.observe(element)
      }
      elements.forEach(observerLoop)
    },
    skewImage(range) {
      let proxy = { skew: 0 },
        skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
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
    },
    transformImage(image, option) {
      if (!image) return ""
      if (!option) return ""
      let imageService = "//img2.storyblok.com/"
      let path = image.replace("//a.storyblok.com", "")
      return imageService + option + path
    }
  }
}
</script>

<style lang="sass">
@import '~assets/styles/variables'

.imageGrid
  z-index: -1
  ul
    display: flex
    flex-wrap: wrap
    width: 100%
    padding-left: var(--spacing-two)
    padding-right: var(--spacing-two)
    li
      display: flex
      justify-content: center
      align-items: center
      flex-basis: 50%
      @media screen and ( max-width: $breakpoint-mobile)
        flex-basis: 100%
        transform: translate(0, 0) !important
      .imageGrid-Item_Placeholder
        position: relative
        overflow: visible
        background-color: var(--filter-color)
        transition: background-color $transition-filter
        will-change: background-color, transform
        img
          width: 100%
          height: auto
          overflow: visible
          mix-blend-mode: multiply
        &.filter
          background-color: rgba(0,0,0,0)
    @for $i from 1 through 100
      li:nth-child(#{$i})
        .imageGrid-Item_Placeholder
          --y: 0
          width: random(40) + 50%
          margin-top: random(200) - 100 + px
          margin-bottom: random(100) + px
          margin-left: random(200) - 100 + px
          transform: translateY(calc( #{var(--y) } * 0.3 ))
          @media screen and ( max-width: $breakpoint-mobile)
            width: 100%
            margin-top: 0
            margin-bottom: var(--spacing-one)
            margin-left: 0
    li:first-child, li:nth-child(2)
      .imageGrid-Item_Placeholder
        @media screen and ( min-width: $breakpoint-mobile)
          margin-top: var(--spacing-three)
    li:last-child, li:nth-last-child(2)
      .imageGrid-Item_Placeholder
        @media screen and ( min-width: $breakpoint-mobile)
          margin-bottom: 0
    li:only-child, li:last-child:nth-child(odd)
      flex-basis: 100%
      .imageGrid-Item_Placeholder
        width: random(20) + 60%
        @media screen and ( max-width: $breakpoint-mobile)
          width: 100%
          margin-top: 0
          margin-bottom: var(--spacing-one)
          margin-left: 0
</style>
