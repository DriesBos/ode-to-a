<template>
  <!-- prettier-ignore -->
  <div class="theMoreInfo" :class="{ active: active }" @click="onClick()">
    <div class="theMoreInfo-Terms">
      <h3>Terms and Conditions</h3>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <div class="theMoreInfo-Close">
      <h5>CLOSE</h5>
    </div>
  </div>
</template>

<script>
import JQuery from "jquery"
let $ = JQuery

export default {
  props: {
    active: Boolean
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
      let $cursor = $(".cursor")
      $cursor.addClass("terms")
    },
    removeTermsCursor() {
      let $cursor = $(".cursor")
      $cursor.removeClass("terms")
    }
  }
}
</script>

<style lang="sass">
@import '~assets/styles/variables'

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
  &.active
    transform: translate3d(0, 0%, 0)
  p, h1, h2, h3, h4, h5, a
    color: currentColor
  a
    font-size: 4em
    line-height: 1.28em
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
