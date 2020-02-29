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
          lengthAdjust="spacingAndGlyphs"
        >ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO</textPath>
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
    }
  },
  mounted() {
    this.setRatio()
    window.addEventListener("resize", this.setRatio())
  }
}
</script>

<style lang="sass" scoped>
.svg-container
  display: inline-block
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  padding: 5vmin
  overflow: hidden
  font-family: 'DINBk', Helvetica, Arial, sans-serif
  font-size: 50px !important
  line-height: 1.5
  color: yellow
  font-style: normal
  border: 2px solid green
  svg
    height: 100%
    width: 100%
    overflow: visible
    fill: currentColor
</style>
