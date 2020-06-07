<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="landinggraphicitem">
    <div class="landinggraphicitem-Container" :class="blok.graphic_alignment">
      <img v-if="blok.graphic" :src="blok.graphic">
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>

<style lang="sass">
@import '~assets/styles/variables'

.landinggraphicitem
  position: absolute
  display: flex
  justify-content: flex-end
  top: 0
  left: 0
  width: 100%
  height: 100vh
  padding-left: var(--side-spacing)
  padding-right: var(--side-spacing)
  padding-top: var(--topside-spacing)
  padding-bottom: var(--topside-spacing)
  z-index: +1
  &-Container
    display: flex
    align-items: center
    height: 100%
    width: 100%
    img
      height: 82vmin
      width: 82vmin
      max-width: 100%
      max-height: 100%
    &.left
      justify-content: flex-start
    &.center
      img
        width: 100%
    &.right
      justify-content: flex-end
</style>
