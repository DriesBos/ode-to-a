<template>
  <!-- prettier-ignore -->
  <div class="footerModal" :class="{ active: active }">
    <div class="footerModal-Content">
      <h3>{{ title }}</h3>
      <br>
      <markdown :input="text" />
    </div>
    <div class="footerModal-Close" @click="onClick()" >
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
    active: Boolean,
    title: String,
    text: String
  },
  computed: {
    ...mapState({
      general: state => state.general.list
    })
  },
  mounted() {
    $(".footerModal").on("mouseover", this.FooterModalCursor)
    $(".footerModal").on("mouseleave", this.removeFooterModalCursor)
  },
  destroyed() {
    $(".footerModal").off("mouseover", this.FooterModalCursor)
    $(".footerModal").off("mouseleave", this.removeFooterModalCursor)
  },
  methods: {
    onClick() {
      this.$emit("close")
    },
    FooterModalCursor() {
      let cursor = document.querySelector(".cursor")
      cursor.classList.add("footermodal")
    },
    removeFooterModalCursor() {
      let cursor = document.querySelector(".cursor")
      cursor.classList.remove("footermodal")
    }
  }
}
</script>

<style lang="sass">

.footerModal
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
  &-Content
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: flex-start
    flex-grow: 1
  &-Close
    margin-top: var(--spacing-three)
    text-align: right
    h4, h5
      display: inline
</style>
