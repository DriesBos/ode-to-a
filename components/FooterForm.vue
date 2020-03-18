<template>
  <!-- prettier-ignore -->
  <section class="footerform">
    <div class="content-wrapper">
      <!-- <markdown :input="blok.text" /> -->
      <div class="markdown">
        <h3>Let’s talk! Be bold, don’t be shy. We would love to have a moment with you.</h3>
      </div>
      <form
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
        <div class="footerform-Buttons">
          <button type="submit">
            SEND
            <svg viewBox="0 0 46.65 37.7">
              <g data-name="Laag 2">
                <path
                  d="M27.8,37.7H17.55l15.2-15H0V15H32.75L17.55,0H27.8L46.65,18.85Z"
                  data-name="Laag 1"
                />
              </g>
            </svg>
          </button>
          <div class="footerform-Links">
            <h4 @click="toggleItem">INFO</h4>
            <h4 @click="toggleItem">SOCIAL</h4>
            <h4 @click="toggleItem">TERMS</h4>
          </div>
        </div>
      </form>
    </div>
    <the-more-info :active="isOpen" @clicked="toggleItem" />
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleItem() {
      this.isOpen = !this.isOpen
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
  &-Buttons
    display: flex
    justify-content: space-between
    width: 100%
    margin-top: var(--spacing-three)
    h4
      color: white
      cursor: pointer
  &-Links
    display: flex
    h4
      margin-left: var(--spacing-one)
      color: rgba(0,0,0,0) !important
      -webkit-text-stroke: 1px var(--second-color)
      transition: color $transition-hover, stroke $transition-hover
      &:hover
        color: var(--second-color) !important
  .markdown
    color: var(--second-color)
  form
    margin-top: var(--spacing-two)
    display: flex
    flex-direction: column
    align-items: flex-start
    color: currentColor
    input
      width: 100%
      border-bottom: 2px solid currentColor
      text-transform: uppercase
      &::placeholder
        color: currentColor
        text-transform: uppercase
    button
      cursor: pointer
      svg
        height: .7em
        fill: currentColor
        transition: transform $transition-icon
        will-change: transform
      &:hover
        svg
          transform: rotate(180deg)
</style>
