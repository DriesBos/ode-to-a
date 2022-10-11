<template>
  <!-- prettier-ignore -->
  <section id="theFooter" class="footer" :class="{ visible: isVisible}">
    <ul>
      <li>Site</li>
      <NuxtLink class="hovered links" tag="li" to="/">Home</NuxtLink>
      <NuxtLink class="hovered links" tag="li" to="/brands">For Brands</NuxtLink>
      <NuxtLink class="hovered links" tag="li" to="/art">For Art</NuxtLink>
      <NuxtLink class="hovered links" tag="li" to="/people">For People</NuxtLink>
    </ul>
    <ul>
      <li>Offices</li>
      <li class="hovered links" @click="toggleAmsterdam">{{general[0].content.amsterdam}}</li>
      <li class="hovered links" @click="toggleMexico">{{general[0].content.mexico}}</li>
      <li class="hovered links" @click="toggleGhana">{{general[0].content.ghana}}</li>
    </ul>
    <ul v-if="general[0].content.instagram || general[0].content.facebook || general[0].content.linkedin">
      <li>Follow Us</li>
      <li v-if="general[0].content.instagram" class="hovered links">        
        <a
          :href="general[0].content.instagram"
          target="_blank"
          title="instagram"
          rel="noreferrer"
        >Instagram</a>
      </li>
      <li v-if="general[0].content.facebook" class="hovered links">        
        <a
          :href="general[0].content.facebook"
          target="_blank"
          title="instagram"
          rel="noreferrer"
        >Facebook</a>
      </li>
      <li v-if="general[0].content.linkedin" class="hovered links">        
        <a
          :href="general[0].content.linkedin"
          target="_blank"
          title="instagram"
          rel="noreferrer"
        >LinkedIn</a>
      </li>
      
    </ul>
    <ul>
      <li>&nbsp;</li>
      <li class="hovered links" @click="toggleTerms">Terms</li>
      <li class="hovered links" @click="toggleMadeBy">Made By</li>
    </ul>

    <the-more-terms :active="isOpenTerms" @clicked="toggleTerms" />
    <the-more-madeby :active="isOpenMadeBy" @clicked="toggleMadeBy" />
    <the-more-amsterdam :active="isOpenAmsterdam" @clicked="toggleAmsterdam" />
    <the-more-mexico :active="isOpenMexico" @clicked="toggleMexico" />
    <the-more-ghana :active="isOpenGhana" @clicked="toggleGhana" />
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
      isOpenMexico: false,
      isVisible: false
    }
  },
  computed: {
    ...mapState({
      general: state => state.general.list
    })
  },
  mounted() {
    console.log(this.general)
    $(".footer").on("mouseover", this.TheFooterCursor)
    $(".footer").on("mouseleave", this.removeTheFooterCursor)
    this.setVisible()
    window.addEventListener("scroll", this.setVisible)
  },
  destroyed() {
    $(".footer").off("mouseover", this.TheFooterCursor)
    $(".footer").off("mouseleave", this.removeTheFooterCursor)
    window.removeEventListener("scroll", this.setVisible)
  },
  methods: {
    setVisible() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (
        currentScrollPosition >
        document.body.clientHeight - window.innerHeight
      ) {
        this.isVisible = true
      } else {
        this.isVisible = false
      }
    },
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
  position: fixed
  left: 0
  right: 0
  bottom: 0
  z-index: 997
  display: flex
  flex-direction: row
  background: black
  color: white
  justify-content: space-around
  padding: var(--spacing-three)
  overflow: hidden
  opacity: 0
  &.visible
    opacity: 1
  ul
    flex-grow: 1
    display: flex
    flex-direction: column
    align-items: flex-start
    li
      font-size: 1.33em
      line-height: 1.27
      text-transform: uppercase
      &.links
        color: rgba(0,0,0,0) !important
        -webkit-text-stroke: 1px white
        transition: color $transition-hover, stroke $transition-hover
        flex-shrink: 0
        a
          -webkit-text-stroke: 1px white
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
