<template>
  <section v-editable="blok" class="landingItem" :class="{ filter: filtered }">
    <img v-if="blok.image" :src="blok.image" />
    <div class="landingItem-Text">
      <h1 v-if="blok.title">{{ blok.title }}</h1>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  data() {
    return {
      filtered: false
    }
  },
  mounted() {
    window.addEventListener("scroll", this.applyFilter)
  },
  destroyed() {
    window.removeEventListener("scroll", this.applyFilter)
  },
  methods: {
    applyFilter() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      const el = document.querySelector(".landingItem")
      if (
        currentScrollPosition > window.innerHeight * 0.1 &&
        currentScrollPosition < window.innerHeight * 0.6
      ) {
        el.classList.remove("filter")
      } else {
        el.classList.add("filter")
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/styles/variables'

.landingItem
  width: 100vw
  height: 100vh
  z-index: -1
  background: white
  transition: background $transition-scroll-filter
  h1, h2, h3, h4, p
    transition: color $transition-scroll-filter, stroke $transition-scroll-filter
  img
    width: 100%
    height: 100%
    object-fit: cover
    transition: filter $transition-scroll-filter
  &-Text
    position: absolute
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    left: 0
    top: 0
    right: 0
    bottom: 0
    padding: var(--spacing-three)
    text-transform: uppercase
.view-Home .landingItem,
.view-Brands .landingItem,
.view-People .landingItem
  position: sticky
  top: 0
.view-Single .landingItem
  position: relative
  background: var(--background-color)
  &.filter
    h1, h2, h3, h4, p
      color: var(--second-color)
      -webkit-text-stroke: 1px var(--current-color)
    img
      mix-blend-mode: screen
      filter: greyscale(1) contrast(2)
      -webkit-filter: grayscale(1) contrast(2)
</style>
