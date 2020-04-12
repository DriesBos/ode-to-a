<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="projectList">
    <h3 v-if="blok.title" class="DINRg">{{ blok.title }}</h3>
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
  .projectList-Single
    display: inline
    word-wrap: break-word
    word-wrap: break-all
    word-break: break-word
    word-break: break-all
    overflow-wrap: break-word
    overflow-wrap: anywhere
    -ms-line-break: anywhere
    -webkit-line-break: anywhere
    hyphens: auto
    text-align: center
    &:last-child
      .dash
        display: none
  .DINRg
    font-family: "DINRg", Helvetica, Arial, sans-serif
    text-transform: uppercase
    display: block
    @media screen and ( min-width: $breakpoint-mobile)
      font-size: 3em
  h3.content
    display: inline
    text-transform: uppercase
    color: rgba($color-blue, 0)
    -webkit-text-stroke: 1px var(--current-color)
    transition: color $transition-scroll-fade, text-stroke $transition-scroll-fade
    will-change: color, text-stroke
    cursor: pointer
    overflow-wrap: break-word
    hyphens: none
    @media screen and ( min-width: $breakpoint-mobile)
      font-size: 3em
    &:hover
      color: var(--current-color)
      -webkit-text-stroke: 1px rgba($color-blue, 0)
  &-Container
    width: 100%
  &-Single
    // height: calc(3 * 1.28em) // Set line-height on "li" tags
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
    &.active
      h3
        color: var(--current-color)
        -webkit-text-stroke: 1px rgba($color-blue, 0)
      .projectList-Single_Image
        display: block
    &:hover .projectList-Single_Image
      display: block
</style>
