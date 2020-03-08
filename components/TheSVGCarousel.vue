<template>
  <!-- prettier-ignore -->
  <div v-if="showCarousel" id="carousel" class="svg-container">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      preserveAspectRatio="none"
      viewBox="0 0 160 160"
      class="svg-content"
      id="theSvg"
    >
      <defs>
        <!-- prettier-ignore -->
        <path
          vector-effect="non-scaling-stroke"
          d="M 0 0 L 160 0 L 160 100 L 0 100 Z"
          id="thePath"
        />
      </defs>
      <!-- prettier-ignore -->
      <text
        v-if="this.$route.name === 'index'"
        id="text-wrap"
        fill="none"
        stroke="currentColor"
        stroke-width
        font-size="1em"
      >
        <textPath
          xlink:href="#thePath"
          method="stretch"
          spacing="auto"
          startOffset="0"
          lengthAdjust="spacingAndGlyphs"
          id="text-path"
        >YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE YOUR ESSENCE IS YOUR PRESENCE</textPath>
      </text>
      <text
        v-else-if="this.$route.name === 'people'"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        font-size="1em"
      >
        <!-- prettier-ignore -->
        <textPath
          xlink:href="#thePath"
          method="stretch"
          spacing="auto"
          startOffset="0"
          lengthAdjust="spacingAndGlyphs"
          id="text-path"
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
        </textPath>
      </text>
      <text
        v-else-if="
          this.$route.name === 'art' || this.$route.name === 'art-slug'
        "
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        font-size="1em"
      >
        <textPath
          xlink:href="#thePath"
          method="stretch"
          spacing="auto"
          startOffset="0"
          lengthAdjust="spacingAndGlyphs"
          id="text-path"
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
          ODE TO ART
        </textPath>
      </text>
      <text v-else fill="none" stroke="currentColor" stroke-width="2" font-size="1em">
        <textPath
          xlink:href="#thePath"
          method="stretch"
          spacing="auto"
          startOffset="0"
          lengthAdjust="spacingAndGlyphs"
          id="text-path"
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
          ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A
        </textPath>
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showHeader: true
    }
  },
  methods: {
    setRatioAndPath() {
      let width = window.innerWidth
      let height = window.innerHeight
      let shape = document.getElementById("theSvg")
      shape.setAttribute("viewBox", `0 0 ${width} ${height}`)
      let path = document.getElementById("thePath")
      let d = `M 0 0 L ${width} 0 L ${width} ${height} L 0 ${height} z`
      path.setAttribute("d", d)
      let carousel = document.getElementById("carousel")
      carousel.classList.add("visible")
    },
    onScroll() {
      // let height = window.innerHeight
      // let shape = document.querySelector(".svg-container")
      let path = document.getElementById("text-path")
      let position =
        document.body.scrollTop || document.documentElement.scrollTop
      path.setAttribute("startOffset", -4000 + position / 2)
      // if (
      //   position > height / 2 ||
      //   this.$route.name === "brands-slug" ||
      //   this.$route.name === "art-slug"
      // ) {
      //   shape.classList.add("scrolled")
      // } else {
      //   shape.classList.remove("scrolled")
      // }
    }
  },
  watch: {
    $route() {
      let carousel = document.getElementById("carousel")
      carousel.classList.add("visible")
      // let shape = document.querySelector(".svg-container")
      // if (
      //   this.$route.name === "brands-slug" ||
      //   this.$route.name === "art-slug"
      // ) {
      //   shape.classList.add("scrolled")
      // } else {
      //   shape.classList.remove("scrolled")
      // }
      if (
        this.$route.name === "brands-slug" ||
        this.$route.name === "art-slug"
      ) {
        this.showHeader = false
      } else {
        this.showHeader = true
      }
    }
  },
  mounted() {
    this.setRatioAndPath()
    window.addEventListener("resize", this.setRatioAndPath)
    window.addEventListener("scroll", this.onScroll)
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll())
  }
}
</script>

<style lang="sass">
@import '~assets/styles/variables'

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
  z-index: 999
  pointer-events: none
  transition: opacity 0s ease .05s
  opacity: 0
  svg
    height: 100%
    width: 100%
    overflow: visible
    text
    // transition: fill .66s ease
    // will-change: fill
    fill: rgba(0,0,0,0)
// @media (orientation: landscape)
//   .svg-container.scrolled
//     svg
//       text
//       fill: rgba(0,0,0,0)
</style>
