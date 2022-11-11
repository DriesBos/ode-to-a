<template>
  <!-- prettier-ignore -->
  <section id="footerForm" class="footerform">
    <div class="footerform-Intro markdown">
      <h3>{{ general[0].content.footer_text }}</h3>
    </div>
    <form
      class="footerform-Form"
      name="contact"
      method="post"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact">
      <input required type="text" name="name" placeholder="NAME" title="type your name — required">
      <input
        required
        type="email"
        name="email"
        placeholder="EMAIL"
        title="type your email — required"
      >
      <input type="text" name="city" placeholder="CITY" title="type your city">
      <input
        required
        type="text"
        name="message"
        placeholder="FIRE AWAY"
        title="type your message — required"
      >
      <button type="submit" class="hovered" title="send">
        <svg viewBox="0 0 46.65 37.7">
          <g data-name="Laag 2">
            <path
              d="M27.8,37.7H17.55l15.2-15H0V15H32.75L17.55,0H27.8L46.65,18.85Z"
              data-name="Laag 1"
            />
          </g>
        </svg>
      </button>
    </form>
  </section>
</template>

<script>
import { mapState } from "vuex"
import JQuery from "jquery"
let $ = JQuery

export default {
  props: {
    blok: Object
  },
  computed: {
    ...mapState({
      general: state => state.general.list
    })
  },
  mounted() {
    // this.measureHeight()
    // window.addEventListener("resize", this.measureHeight)
    $(".footerform").on("mouseover", this.FooterFormCursor)
    $(".footerform").on("mouseleave", this.removeFooterFormCursor)
  },
  destroyed() {
    // window.removeEventListener("resize", this.measureHeight)
    $(".footerform").off("mouseover", this.FooterFormCursor)
    $(".footerform").off("mouseleave", this.removeFooterFormCursor)
  },
  methods: {
    // measureHeight() {
    //   const elementMeasured = document.getElementById("theFooter")
    //   const elementSet = document.getElementById("footerForm")
    //   const height = elementMeasured.offsetHeight
    //   // console.log("MEASUREHEIGHT", element, image, height)
    //   elementSet.style.marginBottom = `${height}px`
    // },
    FooterFormCursor() {
      let cursor = document.querySelector(".cursor")
      cursor.classList.add("footerformcursor")
    },
    removeFooterFormCursor() {
      let cursor = document.querySelector(".cursor")
      cursor.classList.remove("footerformcursor")
    }
  }
}
</script>

<style lang="sass">

.footerform
  position: relative
  z-index: 998
  display: flex
  flex-direction: column
  background: var(--current-color)
  color: var(--second-color)
  min-height: 100vh
  justify-content: space-around
  padding: var(--spacing-three)
  overflow: hidden
  // margin-bottom: 200px
  &-Form
    margin-top: var(--spacing-two)
    display: flex
    flex-direction: column
    align-items: flex-start
    color: currentColor
    input
      width: 100%
      border-bottom: 2px solid currentColor
      border-radius: 0
      text-transform: uppercase
      &::placeholder
        color: currentColor
        text-transform: uppercase
    button
      display: flex
      align-items: center
      align-self: flex-start
      margin-top: var(--spacing-two)
      margin-top: 4vh
      svg
        height: 2em
        fill: currentColor
  &-Buttons
    display: flex
    flex-grow: 1
    justify-content: space-between
    align-items: flex-end
    width: 100%
    margin-top: var(--spacing-three)
    @media screen and ( max-width: $breakpoint-mobile)
      flex-direction: column
    button
      display: flex
      align-items: center
      align-self: flex-start
      svg
        height: 2em
        fill: currentColor
    &_Links
      display: flex
      flex-wrap: wrap
      h4, h5, a
        color: rgba(0,0,0,0) !important
        -webkit-text-stroke: 1px var(--second-color)
        transition: color $transition-hover, stroke $transition-hover
        font-size: 1.33em
        line-height: 1
        flex-shrink: 0
        margin-top: var(--spacing-two)
        &:hover
          @media (hover: hover)
            color: var(--second-color) !important
      a, h5
        margin-right: var(--spacing-two)
  .markdown
    color: var(--second-color)
</style>
