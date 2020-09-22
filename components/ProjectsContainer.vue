<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="projectList">
    <h3 v-if="blok.title" class="DINRg">
      {{ blok.title }}
    </h3>
    <ul class="projectList-Container">
      <component
        :is="blok.component | dashify"
        v-for="blok in blok.list"
        :key="blok._uid"
        :blok="blok"
      />
    </ul>
  </section>
</template>

<script>
import JQuery from "jquery"
let $ = JQuery

export default {
  props: {
    blok: Object
  },
  mounted() {
    $(".projectList-Single").on("mouseenter", this.changeActiveState)
  },
  methods: {
    changeActiveState() {
      document.querySelector(".projectList-Single").classList.remove("active")
    }
  }
}
</script>

<style lang="sass">
@import '~assets/styles/variables'

// PROJECT LIST
.projectList
  &-Single
    display: inline

.projectList
  position: relative
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  width: 100%
  min-height: 100vh
  padding-top: var(--spacing-three)
  padding-bottom: var(--spacing-three)
  padding-left: var(--side-spacing)
  padding-right: var(--side-spacing)
  .projectList-Container
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
    hyphens: auto
    text-align: center
    width: 100%
    &:last-child
      .dash
        display: none
  .DINRg
    font-family: "DINRg", Helvetica, Arial, sans-serif
    text-transform: uppercase
    display: block
    font-size: 4vw
    @media screen and ( max-width: $breakpoint-mobile)
      font-size: 1.33rem
  h3.content, h3.dash, a.content, a.dash
    display: inline
    text-transform: uppercase
    color: rgba($color-blue, 0)
    -webkit-text-stroke: 1px var(--current-color)
    transition: color $transition-scroll-fade, text-stroke $transition-scroll-fade
    will-change: color, text-stroke
    overflow-wrap: break-word
    hyphens: none
    font-size: 8vw
  h3.content, a.content
    &:hover
      @media (hover: hover)
        color: var(--current-color)
        -webkit-text-stroke: 1px rgba($color-blue, 0)
  &-Container
    width: 100%
  &-Single
    &_Image
      position: fixed
      display: none
      top: 0
      left: 0
      right: 0
      bottom: 0
      pointer-events: none
      z-index: -2
      img
        width: 100%
        height: 100%
        object-fit: cover
    &.active
      h3.content, a.content
        color: var(--current-color)
        -webkit-text-stroke: 1px rgba($color-blue, 0)
      .projectList-Single_Image
        display: block
    &:hover
      @media (hover: hover)
        .projectList-Single_Image
          display: block
          z-index: -1
</style>
