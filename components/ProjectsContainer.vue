<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="projectList">
    <h1 v-if="blok.title">{{ blok.title }}</h1>
    <ul class="projectList-Container">
      <component
        :is="blok.component | dashify"
        v-for="blok in blok.list"
        :key="blok._uid"
        :blok="blok"
      ></component>
    </ul>
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

// PROJECT LIST
.projectList
  &-Single
    cursor: pointer
    display: inline

.projectList
  position: relative
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  min-height: 100vh
  padding-top: var(--spacing-three)
  padding-bottom: var(--spacing-three)
  padding-left: var(--side-spacing)
  padding-right: var(--side-spacing)
  ul
    width: 100%
    display: flex
    align-items: center
    justify-content: center
    flex-wrap: wrap
  h1
    font-family: "DINRg", Helvetica, Arial, sans-serif
    text-transform: uppercase
    display: block
    font-size: 2.33em
    line-height: 1
  p
    font-size: 2.33em
    display: inline
    text-transform: uppercase
    color: rgba($color-blue, 0)
    -webkit-text-stroke: 1px var(--current-color)
    transition: color $transition-color, text-stroke $transition-color
    will-change: color, text-stroke
    cursor: pointer
    overflow-wrap: break-word
    hyphens: none
    &:hover
      color: var(--current-color)
      -webkit-text-stroke: 1px rgba($color-blue, 0)
  &-Container
    width: 100%
  &-Single
    display: inline
    word-break: break-word
    overflow-wrap: break-word
    hyphens: none
    height: calc(2.33 * 1.5em)
    // &:last-child
    //   .dash
    //     display: none
    &_Image
      position: fixed
      display: none
      top: 0
      left: 0
      right: 0
      bottom: 0
      pointer-events: none
      z-index: -1
      img
        width: 100%
        height: 100%
        object-fit: cover
    span
      display: inline
      word-break: break-word
      overflow-wrap: break-word
      hyphens: none
    &:hover .projectList-Single_Image
      display: block
</style>
