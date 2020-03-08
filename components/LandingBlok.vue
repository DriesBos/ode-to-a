<template>
  <section v-editable="blok" class="landingItem" :class="{ filter: filtered }">
    <!-- prettier-ignore -->
    <div class="vueLazy" v-lazy-container="{ selector: 'img' }">
      <img
        v-if="blok.image"
        :srcset="`${transformImage(blok.image, '2880x0')} 2880w, ${transformImage(blok.image, '2560x0')} 2560w, ${transformImage(blok.image, '1920x0')} 1920w, ${transformImage(blok.image, '1680x0')} 1680w, ${transformImage(blok.image, '1370x0')} 1370w, ${transformImage(blok.image, '900x0')} 900w`"
        sizes="100vw"
        :data-src="`${transformImage(blok.image, '1440')}`"
      />
    </div>
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
    this.applyFilter()
    window.addEventListener("scroll", this.applyFilter)
  },
  destroyed() {
    window.removeEventListener("scroll", this.applyFilter)
  },
  // watch: {
  //   $route() {
  //     if (
  //       this.$route.name === "brands-slug" ||
  //       this.$route.name === "art-slug"
  //     ) {
  //       this.filtered = true
  //     }
  //   }
  // },
  methods: {
    // initFilter() {
    //   if (
    //     this.$route.name === "brands-slug" ||
    //     this.$route.name === "art-slug"
    //   ) {
    //     this.filtered = true
    //   }
    // },
    applyFilter() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < window.innerHeight * 0.8) {
        this.filtered = false
      } else {
        this.filtered = true
      }
      if (
        this.$route.name === "brands-slug" ||
        this.$route.name === "art-slug"
      ) {
        if (currentScrollPosition === 0) {
          this.filtered = true
        }
      }
    },
    transformImage(image, option) {
      if (!image) return ""
      if (!option) return ""
      let imageService = "//img2.storyblok.com/"
      let path = image.replace("//a.storyblok.com", "")
      return imageService + option + path
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
  will-change: background
  pointer-events: none
  .vueLazy
    width: 100%
    height: 100%
  h1, h2, h3, h4, p
    will-change: color, stroke
    transition: color $transition-scroll-filter, stroke $transition-scroll-filter
  img
    width: 100%
    height: 100%
    object-fit: cover
    transition: filter $transition-scroll-filter
    will-change: filter
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
      // color: var(--second-color)
      // -webkit-text-stroke: 1px var(--current-color)
    img
      mix-blend-mode: screen
      filter: greyscale(1)
      -webkit-filter: grayscale(1)
</style>
