<template>
  <div class="svg-container">
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
      <text fill="currentColor" font-size="1em">
        <textPath
          xlink:href="#thePath"
          method="stretch"
          spacing="auto"
          startOffset="-100"
          lengthAdjust="spacingAndGlyphs"
        >
        <animate attributeName="startOffset" from="-100%" to ="100%" begin="0s" dur="100s" repeatCount="indefinite"/>
        ODE TO ODE TO ODE TO ODE ODE TO ODE TO ODE TO ODE ODE TO ODE TO ODE TO ODE ODE TO ODE TO ODE TO ODE ODE TO ODE TO ODE TO ODE ODE TO ODE TO ODE TO ODE ODE TO ODE TO ODE TO ODE ODE TO ODE TO ODE TO ODE ODE TO ODE TO ODE TO ODE ODE TO ODE TO ODE TO ODE ODE TO ODE TO ODE TO ODE ODE TO ODE TO ODE TO ODE ODE TO ODE TO ODE TO ODE ODE TO ODE TO ODE TO ODE ODE TO ODE TO ODE TO ODE ODE TO ODE TO ODE TO ODE ODE TO ODE TO ODE TO ODE ODE TO ODE TO ODE TO ODE ODE TO ODE TO ODE TO ODE ODE TO ODE TO ODE TO ODE ODE TO ODE TO ODE TO ODE</textPath>
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  methods: {
    setRatio() {
      let width = window.innerWidth
      let height = window.innerHeight
      let shape = document.getElementById("theSvg")
      let path = document.getElementById("thePath")
      let d = `M 0 0 L ${width} 0 L ${width} ${height} L 0 ${height} z`
      shape.setAttribute("viewBox", `0 0 ${width} ${height}`)
      path.setAttribute("d", d)
    },
    onScroll() {
      let height = window.innerHeight
      let shape = document.getElementById("theSvg")
      let path = document.getElementById("thePath")
      // let pathLenght = path.getTotalLength()
      let position =
        document.body.scrollTop || document.documentElement.scrollTop
      path.setAttribute("startOffset", position)
      // console.log(position)
      if (position > height) {
        console.log("FIRED")
        shape.classList.add("scrolled")
      }
    }
  },
  mounted() {
    this.setRatio()
    window.addEventListener("resize", this.setRatio)
    window.addEventListener("scroll", this.onScroll)
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll())
  }
}
</script>
