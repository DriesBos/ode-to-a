<template>
  <section v-editable="blok" class="landingItem" :class="{ filter: filtered }">
    <!-- prettier-ignore -->
    <div v-lazy-container="{ selector: 'img' }" class="vueLazy">
      <img
        v-if="blok.image"
        :alt="blok.title"
        :srcset="
          `${transformImage(
            blok.image,
            '2880x0/filters:format(jpg):quality(50)'
          )} 2880w, ${transformImage(
            blok.image,
            '2560x0/filters:format(jpg):quality(50)'
          )} 2560w, ${transformImage(
            blok.image,
            '1920x0/filters:format(jpg):quality(50)'
          )} 1920w, ${transformImage(
            blok.image,
            '1680x0/filters:format(jpg):quality(50)'
          )} 1680w, ${transformImage(
            blok.image,
            '1370x0/filters:format(jpg):quality(50)'
          )} 1370w, ${transformImage(
            blok.image,
            '900x0/filters:format(jpg):quality(50)'
          )} 900w`
        "
        sizes="100vw"
        :data-src="
          `${transformImage(
            blok.image,
            '1600x0/filters:format(jpg):quality(50)'
          )}`
        "
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
      filtered: true
    }
  },
  mounted() {
    this.applyFilter()
    window.addEventListener("scroll", this.applyFilter)
  },
  destroyed() {
    window.removeEventListener("scroll", this.applyFilter)
  },
  methods: {
    applyFilter() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (
        currentScrollPosition > window.innerHeight * 0.8 ||
        currentScrollPosition === 0
      ) {
        this.filtered = true
      } else {
        this.filtered = false
      }
    },
    transformImage(image, option) {
      if (!image) return ""
      if (!option) return ""
      let imageService = "//img2.storyblok.com/"
      let pathOne = image.replace("https://a.storyblok.com", "")
      let pathTwo = pathOne.replace("//a.storyblok.com", "")
      return imageService + option + pathTwo
    }
  }
}
</script>

<style lang="sass">
.landingItem
  width: 100vw
  height: 100vh
  z-index: -5
  background: rgba(0,0,0,0)
  transition: background $transition-scroll-filter
  will-change: background
  pointer-events: none
  .vueLazy
    width: 100%
    height: 100%
  img
    width: 100%
    height: 100%
    object-fit: cover
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
    text-align: center
.view-Home .landingItem,
.view-Brands .landingItem,
.view-People .landingItem,
.view-Art .landingItem
  position: sticky
  top: 0
.view-Single .landingItem
  position: relative
  background-color: rgba(0,0,0,0)
  transition: background-color $transition-filter
  will-change: background-color
  img
    mix-blend-mode: multiply
  &.filter
    background-color: var(--filter-color)
  // .view-PeopleSingle
  //   .landingItem
  //     border: 5px solid red
  //     img
  //       filter: greyscale(1)
</style>
