<template>
  <!-- prettier-ignore -->
  <div id="carousel" class="svg-container">
    <svg
      id="theSvg"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      preserveAspectRatio="none"
      viewBox="0 0 160 160"
      class="svg-content"
    >
      <defs>
        <!-- prettier-ignore -->
        <path
          id="thePath"
          vector-effect="non-scaling-stroke"
          d="M 0 0 L 160 0 L 160 100 L 0 100 Z"
        />
      </defs>
      <!-- prettier-ignore -->
      <text v-if="this.$route.name === 'index'" id="text-wrap" font-size="1em" stroke-width="1">
        <textPath
          id="text-path"
          xlink:href="#thePath"
          method="stretch"
          spacing="auto"
          startOffset="0"
          lengthAdjust="spacingAndGlyphs"
        >YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE</textPath>
      </text>
      <text v-else-if="this.$route.name === 'people'" font-size="1em" stroke-width="1">
        <!-- prettier-ignore -->
        <textPath
          id="text-path"
          xlink:href="#thePath"
          method="stretch"
          spacing="auto"
          startOffset="0"
          lengthAdjust="spacingAndGlyphs"
        >
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
          ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU ODE TO YOU
        </textPath>
      </text>
      <text
        v-else-if="
          this.$route.name === 'art' || this.$route.name === 'art-slug'
        "
        font-size="1em"
        stroke-width="1"
      >
        <textPath
          id="text-path"
          xlink:href="#thePath"
          method="stretch"
          spacing="auto"
          startOffset="0"
          lengthAdjust="spacingAndGlyphs"
        >
          ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE
          TO ART DE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO
          ART ODE TO ART DE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART
          ODE TO ART ODE TO ART DE TO ART ODE TO ART ODE TO ART ODE TO ART ODE
          TO ART ODE TO ART ODE TO ART DE TO ART ODE TO ART ODE TO ART ODE TO
          ART ODE TO ART ODE TO ART ODE TO ART DE TO ART ODE TO ART ODE TO ART
          ODE TO ART ODE TO ART ODE TO ART ODE TO ART DE TO ART ODE TO ART ODE
          TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART DE TO ART ODE TO
          ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART DE TO ART
          ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART DE
          TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO
          ART DE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART
          ODE TO ART ODE TO ART ODE TO ART ODE TO ART DE TO ART ODE TO ART ODE
          TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART DE TO ART ODE TO
          ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART DE TO ART
          ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART DE
          TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO
          ART DE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART
          ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE
          TO ART DE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO
          ART ODE TO ART DE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART
          ODE TO ART ODE TO ART DE TO ART ODE TO ART ODE TO ART ODE TO ART ODE
          TO ART ODE TO ART ODE TO ART DE TO ART ODE TO ART ODE TO ART ODE TO
          ART ODE TO ART ODE TO ART ODE TO ART DE TO ART ODE TO ART ODE TO ART
          ODE TO ART ODE TO ART ODE TO ART ODE TO ART DE TO ART ODE TO ART ODE
          TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART DE TO ART ODE TO
          ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART DE TO ART
          ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART DE
          TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO
          ART DE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART
          ODE TO ART ODE TO ART ODE TO ART ODE TO ART DE TO ART ODE TO ART ODE
          TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART DE TO ART ODE TO
          ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART DE TO ART
          ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART DE
          TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO
          ART DE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART ODE TO ART
          ODE TO ART
        </textPath>
      </text>
      <text v-else fill stroke font-size="1em" stroke-width="1">
        <textPath
          id="text-path"
          xlink:href="#thePath"
          method="stretch"
          spacing="auto"
          startOffset="0"
          lengthAdjust="spacingAndGlyphs"
        >
          ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO
          A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE
          TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A
          ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO
          A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE
          TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A
          ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO
          A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE
          TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A
          ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO
          A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE
          TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A
          ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO
          A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE
          TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A
          ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO
          A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE
          TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A
          ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO
          A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE
          TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A
          ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO
          A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE
          TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A
          ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO
          A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE
          TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A
          ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO
          A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE
          TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A
          ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A
        </textPath>
      </text>
    </svg>
  </div>
</template>

<script>
import { gsap } from "gsap"

export default {
  watch: {
    $route() {
      let carousel = document.getElementById("carousel")
      if (
        this.$route.name === "index" ||
        this.$route.name === "brands" ||
        this.$route.name === "art" ||
        this.$route.name === "people"
      ) {
        setTimeout(function() {
          carousel.style.opacity = "1"
        }, 50)
      } else {
        carousel.style.opacity = "0"
      }
    }
  },
  mounted() {
    this.setRatioAndPath()
    this.setScrollTrigger()
    // this.onScrollOpacity()
    window.addEventListener("resize", this.setRatioAndPath)
    window.addEventListener("scroll", this.onScrollOpacity)
  },
  destroyed() {
    window.removeEventListener("resize", this.setRatioAndPath)
    window.removeEventListener("scroll", this.onScrollOpacity)
  },
  methods: {
    setRatioAndPath() {
      let width = window.innerWidth
      let height = window.innerHeight
      let lastHeight = window.innerWidth * 0.016
      let shape = document.getElementById("theSvg")
      // Setting the width/height on the SVG viewbox
      shape.setAttribute("viewBox", `0 0 ${width} ${height}`)
      let path = document.getElementById("thePath")
      let d = `M 0 0 L ${width} 0 L ${width} ${height} L 0 ${height} L 0 ${lastHeight}`
      path.setAttribute("d", d)
      if (
        this.$route.name === "index" ||
        this.$route.name === "brands" ||
        this.$route.name === "art" ||
        this.$route.name === "people"
      ) {
        let carousel = document.getElementById("carousel")
        setTimeout(function() {
          carousel.style.opacity = "1"
        }, 50)
      }
    },
    setScrollTrigger() {
      let path = document.getElementById("text-path")
      // Calc document height
      var body = document.body
      var html = document.documentElement
      var docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      )
      gsap.to(path, {
        attr: { startOffset: -docHeight / 2 },
        ease: "none",
        scrollTrigger: {
          scrub: 0
        }
      })
    },
    onScrollOpacity() {
      let text = document.getElementById("theSvg")
      let position =
        document.body.scrollTop || document.documentElement.scrollTop
      if (position > window.innerHeight) {
        text.classList.add("inactive")
        text.classList.remove("active")
      } else {
        text.classList.add("active")
        text.classList.remove("inactive")
      }
    }
  }
}
</script>

<style lang="sass">

.svg-container
  display: inline-block
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  padding: 3.4vw
  overflow: hidden
  font-family: 'DINBk', Helvetica, Arial, sans-serif
  font-size: 5vw
  color: var(--current-color)
  z-index: 899
  pointer-events: none
  opacity: 0 // Changed via JavaScript
  svg
    height: 100%
    width: 100%
    overflow: visible
    fill: currentColor
    stroke: rgba(0,0,0,0)
    transition: fill $transition-carousel, stroke $transition-carousel
    &.active
      fill: currentColor
      stroke: rgba(0,0,0,0)
    &.inactive
      fill: rgba(0,0,0,0)
      stroke: currentColor
</style>
