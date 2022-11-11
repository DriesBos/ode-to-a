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
      <li class="hovered links" @click="toggleFooterModalAmsterdam">{{general[0].content.amsterdam}}</li>
      <li class="hovered links" @click="toggleFooterModalMexico">{{general[0].content.mexico}}</li>
      <li class="hovered links" @click="toggleFooterModalGhana">{{general[0].content.ghana}}</li>
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
      <li class="hovered links" @click="toggleFooterModalTerms">Terms</li>
      <li class="hovered links" @click="toggleFooterModalMadeby">Made By</li>
    </ul>
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
      isVisible: false
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
    this.setVisible()
    window.addEventListener("scroll", this.setVisible)
  },
  destroyed() {
    $(".footer").off("mouseover", this.TheFooterCursor)
    $(".footer").off("mouseleave", this.removeTheFooterCursor)
    window.removeEventListener("scroll", this.setVisible)
  },
  methods: {
    toggleFooterModalAmsterdam() {
      this.$emit("update", {
        title: this.general[0].content.amsterdam,
        text: this.general[0].content.amsterdam_text
      })
    },
    toggleFooterModalMexico() {
      this.$emit("update", {
        title: this.general[0].content.mexico,
        text: this.general[0].content.mexico_text
      })
    },
    toggleFooterModalGhana() {
      this.$emit("update", {
        title: this.general[0].content.ghana,
        text: this.general[0].content.ghana_text
      })
    },
    toggleFooterModalTerms() {
      this.$emit("update", {
        title: this.general[0].content.terms_title,
        text: this.general[0].content.terms_text
      })
    },
    toggleFooterModalMadeby() {
      this.$emit("update", {
        title: this.general[0].content.madeby_title,
        text: this.general[0].content.madeby_text
      })
    },
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
  // position: fixed
  // left: 0
  // right: 0
  // bottom: 0
  z-index: 997
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: flex-start
  align-items: flex-start
  // background: black
  // color: white
  background: var(--current-color)
  color: var(--second-color)
  padding: var(--spacing-three)
  overflow: hidden
  // opacity: 0
  // pointer-events: none
  // &.visible
  //   opacity: 1
  //   pointer-events: auto
  ul
    display: flex
    flex-direction: column
    align-items: flex-start
    @media screen and ( min-width: $breakpoint-mobile)
      flex-grow: 1
    @media screen and ( max-width: $breakpoint-mobile)
      flex-basis: 50%
      padding-bottom: var(--spacing-three)
    li
      font-size: 1.33em
      line-height: 1.27
      // text-transform: uppercase
      &.links
        color: rgba(0,0,0,0) !important
        -webkit-text-stroke: 1px var(--second-color)
        transition: color $transition-hover, stroke $transition-hover
        flex-shrink: 0
        a
          -webkit-text-stroke: 1px var(--second-color)
        &:hover
          @media (hover: hover)
            color: var(--second-color) !important


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
