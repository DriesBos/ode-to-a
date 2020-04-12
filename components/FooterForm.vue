<template>
  <!-- prettier-ignore -->
  <section class="footerform">
    <div class="footerform-Intro markdown">
      <h3>Let’s talk! Be bold, don’t be shy. We would love to have a moment with you.</h3>
    </div>
    <form
      class="footerform-Form"
      name="contact"
      method="post"
      action="/succes"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input required type="text" name="name" placeholder="NAME" />
      <input required type="email" name="email" placeholder="EMAIL" />
      <input type="text" name="city" placeholder="CITY" />
      <input required type="text" name="message" placeholder="FIRE AWAY" />
    </form>
    <div class="footerform-Buttons">
      <button type="submit">
        <svg viewBox="0 0 46.65 37.7">
          <g data-name="Laag 2">
            <path
              d="M27.8,37.7H17.55l15.2-15H0V15H32.75L17.55,0H27.8L46.65,18.85Z"
              data-name="Laag 1"
            />
          </g>
        </svg>
      </button>
      <div class="footerform-Buttons_Links">
        <h5 @click="toggleInfo">INFO</h5>
        <h5 @click="toggleSocial">SOCIAL</h5>
        <h5 @click="toggleTerms">TERMS</h5>
      </div>
    </div>
    <the-more-info :active="isOpenInfo" @clicked="toggleInfo" />
    <the-more-social :active="isOpenSocial" @clicked="toggleSocial" />
    <the-more-terms :active="isOpenTerms" @clicked="toggleTerms" />
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  data() {
    return {
      isOpenInfo: false,
      isOpenSocial: false,
      isOpenTerms: false
    }
  },
  methods: {
    toggleInfo() {
      this.isOpenInfo = !this.isOpenInfo
    },
    toggleSocial() {
      this.isOpenSocial = !this.isOpenSocial
    },
    toggleTerms() {
      this.isOpenTerms = !this.isOpenTerms
    }
  }
}
</script>

<style lang="sass">
@import '~assets/styles/variables'

.footerform
  position: relative
  z-index: 999
  display: flex
  flex-direction: column
  background: var(--current-color)
  color: var(--second-color)
  min-height: 100vh
  justify-content: space-around
  padding: var(--spacing-three)
  overflow: hidden
  &-Form
    margin-top: var(--spacing-two)
    display: flex
    flex-direction: column
    align-items: flex-start
    color: currentColor
    flex-grow: 1
    input
      width: 100%
      border-bottom: 2px solid currentColor
      text-transform: uppercase
      &::placeholder
        color: currentColor
        text-transform: uppercase
  &-Buttons
    display: flex
    justify-content: space-between
    align-items: center
    width: 100%
    margin-top: var(--spacing-three)
    h4, h5, button
      cursor: pointer
    button
      display: flex
      align-items: center
      svg
        height: 2em
        fill: currentColor
    &_Links
      display: flex
      h4, h5
        margin-left: var(--spacing-one)
        color: rgba(0,0,0,0) !important
        -webkit-text-stroke: 1px var(--second-color)
        transition: color $transition-hover, stroke $transition-hover
        &:hover
          @media (hover: hover)
            color: var(--second-color) !important
  .markdown
    color: var(--second-color)
</style>
