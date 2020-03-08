<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="imageGrid">
    <ul>
      <li v-for="image in blok.image" :key="image.name" class="imageGrid-Item">
        <div class="imageGrid-Item_Placeholder">
          <img :src="image.filename" />
        </div>
      </li>
    </ul>
  </section>
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
    const targets = document.querySelectorAll(".imageGrid-Item_Placeholder")
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

.imageGrid
  z-index: -1
  ul
    display: flex
    flex-wrap: wrap
    width: 100%
    z-index: -1
    padding-left: var(--side-spacing)
    padding-right: var(--side-spacing)
    li
      display: flex
      justify-content: center
      align-items: center
      flex-basis: 50%
      .imageGrid-Item_Placeholder
        background: rgba(0,0,0,0)
        transition: background $transition-scroll-filter
        will-change: background
        overflow: visible
        img
          width: auto
          height: auto
          overflow: visible
          opacity: 1
          filter: greyscale(0)
          -webkit-filter: grayscale(0)
          transition: filter $transition-scroll-filter, opacity $transition-scroll-filter
          will-change: filter, opacity
        &.filter
          background: var(--background-color)
          img
            opacity: .5
            filter: greyscale(1)
            -webkit-filter: grayscale(1)
    @for $i from 1 through 100
      li:nth-child(#{$i})
        .imageGrid-Item_Placeholder
          width: random(30) + 70%
          margin-top: random(200) + px
          margin-bottom: random(200) + px
          margin-left: random(300) - 300 + px
    li:first-child, li:nth-child(2)
      .imageGrid-Item_Placeholder
        margin-top: var(--spacing-three)
    li:last-child, li:nth-last-child(2)
      .imageGrid-Item_Placeholder
        margin-bottom: var(--spacing-three)
</style>
