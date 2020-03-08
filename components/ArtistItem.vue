<template>
  <nuxt-link :to="blok.hyperlink.cached_url" class="artList-Item" tag="li">
    <p v-if="blok.title">{{ blok.title }}</p>
    <!-- prettier-ignore -->
    <div v-lazy-container="{ selector: 'img' }" class="vueLazy artList-Item_Placeholder">
      <img
        v-if="blok.image"
        :srcset="
          `${transformImage(blok.image, '2880x0')} 2880w, ${transformImage(
            blok.image,
            '2560x0'
          )} 2560w, ${transformImage(
            blok.image,
            '1920x0'
          )} 1920w, ${transformImage(
            blok.image,
            '1680x0'
          )} 1680w, ${transformImage(
            blok.image,
            '1370x0'
          )} 1370w, ${transformImage(blok.image, '900x0')} 900w`
        "
        sizes="50vw"
        :data-src="`${transformImage(blok.image, '1440')}`"
      />
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  data() {
    return {
      observer: null
    }
  },
  mounted() {
    const targets = document.querySelectorAll(".artList-Item_Placeholder")
    const lazyFilter = target => {
      this.observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.remove("filter")
            } else {
              entry.target.classList.add("filter")
            }
          })
        },
        { threshold: 0.8 }
      )
      this.observer.observe(target)
    }
    targets.forEach(lazyFilter)
  },
  destroyed() {
    this.observer.disconnect()
  },
  methods: {
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

<style lang="sass">
@import '~assets/styles/variables'

.artList
  ul
    display: flex
    flex-wrap: wrap
    width: 100%
    padding-left: var(--side-spacing)
    padding-right: var(--side-spacing)
    li
      display: flex
      justify-content: center
      align-items: center
      flex-basis: 50%
      cursor: pointer
      p
        position: absolute
        text-transform: uppercase
        color: rgba($color-red, 0)
        -webkit-text-stroke: 1px var(--current-color)
        cursor: pointer
      .artList-Item_Placeholder
        background-color: var(--background-color)
        overflow: visible
        img
          width: auto
          height: auto
          overflow: visible
          opacity: 1
          // mix-blend-mode: screen
          // filter: greyscale(0)
          // -webkit-filter: grayscale(0)
          // transition: all $transition-scroll-filter
          // will-change: filter
        // &.filter
        //   img
        //     mix-blend-mode: screen
        //     filter: greyscale(1)
        //     -webkit-filter: grayscale(1)
    @for $i from 1 through 100
      li:nth-child(#{$i})
        .artList-Item_Placeholder
          width: random(30) + 70%
          margin-top: random(200) + px
          margin-bottom: random(200) + px
          margin-left: random(300) - 300 + px
    li:first-child, li:nth-child(2)
      .artList-Item_Placeholder
        margin-top: var(--spacing-three)
    li:last-child, li:nth-last-child(2)
      .artList-Item_Placeholder
        margin-bottomq: var(--spacing-three)
</style>
