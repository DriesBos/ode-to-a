<template>
  <!-- prettier-ignore -->
  <div class="textcarousel">
    <div class="textcarousel-Item">
      <div class="textcarousel-Item_Inner">
        <h1>ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO</h1>
      </div>
    </div>
    <div class="textcarousel-Item">
      <div class="textcarousel-Item_Inner">
        <h1>ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO</h1>
      </div>
    </div>
    <div class="textcarousel-Item">
      <div class="textcarousel-Item_Inner">
        <h1>ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO</h1>
      </div>
    </div>
    <div class="textcarousel-Item">
      <div class="textcarousel-Item_Inner">
        <h1>ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO ODE TO</h1>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.textcarousel
  position: fixed
  top: 0
  left: 0
  bottom: 0
  width: 100%
  z-index: 999
  > div
    position: absolute
    width: 100vw
    white-space: nowrap
    overflow: hidden
    h1
      animation: 20s linear infinite carousel
      font-size: 4vw
  > div:nth-child(3) // Top
    top: 0
    left: 0
  > div:nth-child(1) // Bottom
    left: 0
    bottom: 0
    transform: rotate(-180deg)
    transform-origin: center center
  > div:nth-child(2) // left
    top: 100vh
    left: 0
    width: 100vh
    transform: rotate(-90deg)
    transform-origin: top left
  > div:nth-child(4) // right
    top: 100vh
    right: 0
    width: 100vh
    transform: rotate(90deg)
    transform-origin: top right

@keyframes carousel
  0%
    transform: translateX(-10em)
  100%
    transform: translateX(0)
</style>
