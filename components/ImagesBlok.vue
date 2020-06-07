<template>
  <!-- prettier-ignore -->
  <section :id="blok._uid" v-editable="blok" class="imageGrid">
    <ul>
      <li v-for="image in blok.image" :key="image.filename" class="imageGrid-Item">
        <div class="imageGrid-Item_Placeholder">
          <img :src="image.filename">
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

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
    this.parallax()
    this.IntersectionObserverMixin(
      ".imageGrid-Item_Placeholder",
      "filter",
      this.observerOne,
      0.5
    )
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
      arr.forEach((el, index) => {
        if (index === 3 || index === 4) {
          gsap.to(el, {
            scrollTrigger: {
              trigger: el, // start the animation when ".box" enters the viewport (once)
              scrub: 0.66 // Seconds to catch up after scroll stop
              // markers: {startColor: "green", endColor: "red", fontSize: "12px"},
            },
            yPercent: this.randomNumber(-5, -7),
            ease: "expo.out:",
            onComplete: () => ScrollTrigger.refresh()
          })
        } else if (index === 0) {
          return
        } else {
          gsap.to(el, {
            scrollTrigger: {
              trigger: el, // start the animation when ".box" enters the viewport (once)
              scrub: 0.66 // Seconds to catch up after scroll stop
              // markers: {startColor: "green", endColor: "red", fontSize: "12px"},
            },
            yPercent: this.randomNumber(-12, -18),
            ease: "expo.out:",
            onComplete: () => ScrollTrigger.refresh()
          })
        }
      })
    },
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
          width: random(45) + 50%
          margin-top: random(200) + px
          margin-bottom: random(200) + px
          margin-left: random(100) - 100 + px
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
          margin-bottom: var(--spacing-three)
    li:only-child, li:last-child:nth-child(odd)
      flex-basis: 100%
      .imageGrid-Item_Placeholder
        width: random(20) + 40%
        @media screen and ( max-width: $breakpoint-mobile)
          width: 100%
          margin-top: 0
          margin-bottom: var(--spacing-one)
          margin-left: 0
</style>
