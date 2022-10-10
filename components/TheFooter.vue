<template>
  <!-- prettier-ignore -->
  <section class="footer">
    <ul>
      <li>Offices</li>
      <li class="hovered links" @click="toggleMadeBy">Amsterdam</li>
      <li class="hovered links" @click="toggleMadeBy">Ghana</li>
      <li class="hovered links" @click="toggleMadeBy">Mexico City</li>
    </ul>
        <ul>
      <li>Navigation</li>
      <li class="hovered links">Home</li>
      <li class="hovered links">For Brands</li>
      <li class="hovered links">For Art</li>
      <li class="hovered links">For People</li>
    </ul>
    <ul>
      <li>Follow Us</li>
      <li class="hovered links">        
          <a
          :href="general[0].content.social"
          target="_blank"
          title="instagram"
          rel="noreferrer"
        >Instagram</a>
      </li>
    </ul>
    <ul>
      <li>&nbsp;</li>
      <li class="hovered links" @click="toggleTerms">Terms</li>
      <li class="hovered links" @click="toggleMadeBy">Made By</li>
    </ul>

    <the-more-terms :active="isOpenTerms" @clicked="toggleTerms" />
    <the-more-madeby :active="isOpenMadeBy" @clicked="toggleMadeBy" />
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
  data() {
    return {
      isOpenTerms: false,
      isOpenMadeBy: false,
      isOpenAmsterdam: false,
      isOpenGhana: false,
      isOpenMexico: false
    }
  },
  computed: {
    ...mapState({
      general: state => state.general.list
    })
  },
  mounted() {
    $(".footer").on("mouseover", this.TheFooterCursor)
    $(".footer").on("mouseleave", this.removeTheFooterCursor)
  },
  destroyed() {
    $(".footer").off("mouseover", this.TheFooterCursor)
    $(".footer").off("mouseleave", this.removeTheFooterCursor)
  },
  methods: {
    toggleTerms() {
      this.isOpenTerms = !this.isOpenTerms
    },
    toggleMadeBy() {
      this.isOpenMadeBy = !this.isOpenMadeBy
    },
    toggleAmsterdam() {
      this.isOpenAmsterdam = !this.isOpenAmsterdam
    },
    toggleGhana() {
      this.isOpenGhana = !this.isOpenGhana
    },
    toggleMexico() {
      this.isOpenMexico = !this.isOpenMexico
    },
    TheFooterCursor() {
      let cursor = document.querySelector(".cursor")
      cursor.classList.add("thefootercursor")
    },
    removeTheFooterCursor() {
      let cursor = document.querySelector(".cursor")
      cursor.classList.remove("thefootercursor")
    }
  }
}
</script>

<style lang="sass">

.footer
  position: relative
  z-index: 999
  display: flex
  flex-direction: row
  background: black
  color: white
  justify-content: space-around
  padding: var(--spacing-three)
  overflow: hidden
  ul
    flex-grow: 1
    display: flex
    flex-direction: column
    li
      font-size: 1.33em
      line-height: 1.27
      text-transform: uppercase
      &.links
        color: rgba(0,0,0,0) !important
        -webkit-text-stroke: 1px white
        transition: color $transition-hover, stroke $transition-hover
        flex-shrink: 0
        &:hover
          @media (hover: hover)
            color: white !important


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
