<template>
  <!-- prettier-ignore -->
  <div class="theMoreInfo" :class="{ active: active }" @click="onClick()">
    <div class="theMoreInfo-Terms">
      <h3>{{ general[0].content.terms_title }}</h3>
      <br>
      <markdown :input="general[0].content.terms_text" />
    </div>
    <div class="theMoreInfo-Close">
      <h5>CLOSE</h5>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import JQuery from "jquery"
let $ = JQuery

export default {
  props: {
    active: Boolean
  },
  computed: {
    ...mapState({
      general: state => state.general.list
    })
  },
  mounted() {
    $(".theMoreInfo").on("mouseover", this.TermsCursor)
    $(".theMoreInfo").on("mouseleave", this.removeTermsCursor)
  },
  destroyed() {
    $(".theMoreInfo").off("mouseover", this.TermsCursor)
    $(".theMoreInfo").off("mouseleave", this.removeTermsCursor)
  },
  methods: {
    onClick() {
      this.$emit("clicked")
    },
    TermsCursor() {
      let cursor = document.querySelector(".cursor")
      cursor.classList.add("terms")
    },
    removeTermsCursor() {
      let cursor = document.querySelector(".cursor")
      cursor.classList.remove("terms")
    }
  }
}
</script>

<style lang="sass">

.theMoreInfo
  position: fixed
  top: 0
  left: 0
  bottom: 0
  right: 0
  display: flex
  flex-direction: column
  background: white
  color: black
  padding: var(--spacing-three)
  transition: transform $transition-slide
  will-change: transform
  transform: translate3d(0, 100%, 0)
  overflow-y: auto
  z-index: 999
  .markdown
    p
      margin-bottom: 1.5rem
      &:last-child
        margi-bottom: 0
  &.active
    transform: translate3d(0, 0%, 0)
  p, h1, h2, h3, h4, h5, a
    color: black
  a
    color: black
    display: inline
    &:hover
      @media (hover: hover)
        text-decoration: underline
  h1
    text-transform: uppercase
  &-Intro
    margin-bottom: var(--spacing-two)
  &-Content
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: flex-start
    flex-grow: 1
  &-Terms
    flex-grow: 1
  &-Close
    margin-top: var(--spacing-three)
    text-align: right
    h4, h5
      // cursor: pointer
      display: inline
</style>
