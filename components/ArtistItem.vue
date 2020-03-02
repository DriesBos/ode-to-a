<template>
  <nuxt-link :to="blok.hyperlink.cached_url" class="artList-Item" tag="li">
    <p>{{ blok.title }}</p>
    <div class="artList-Item_Placeholder">
      <img :src="blok.image" />
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
    console.log(this.blok)
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
          transition: filter $transition-scroll-filter
        &.filter
          img
            mix-blend-mode: screen
            filter: greyscale(1) contrast(2)
            -webkit-filter: grayscale(1) contrast(2)
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
