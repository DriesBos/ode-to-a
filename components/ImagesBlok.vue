<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="imageGrid">
    <ul>
      <li v-for="image in blok.image" :key="image.filename" class="imageGrid-Item">
        <div id="parralax" class="imageGrid-Item_Placeholder">
          <img :src="image.filename" />
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
// import JQuery from "jquery"
// let $ = JQuery

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
    window.addEventListener("scroll", this.parallaxScroller)
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
    window.removeEventListener("scroll", this.parallaxScroller)
  },
  methods: {
    parallaxScroller() {
      const distance = window.scrollY
      const array = document.querySelectorAll("#parralax")
      array[0].style.transform = `translateY(${distance * -0.1}px)`
    }
    // parallaxScroller() {
    //   // const distance = window.scrollY
    //   const array = document.querySelector("#parralax")
    //   const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //       if (entry.isIntersecting) {
    //         // entry.target.style.transform = `translateY(${distance * -0.1}px)`
    //         console.log(entry)
    //       }
    //     })
    //   })
    //   // array.forEach(el => {
    //   //   observer.observe(el)
    //   // })
    //   observer.observe(array)
    // },
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
    padding-left: var(--spacing-two)
    padding-right: var(--spacing-two)
    li
      display: flex
      justify-content: center
      align-items: center
      flex-basis: 50%
      @media screen and ( max-width: $breakpoint-mobile)
        flex-basis: 100%
      .imageGrid-Item_Placeholder
        position: relative
        // background: rgba(0,0,0,0)
        // transition: background $transition-scroll-filter
        // will-change: background
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
          // background: var(--background-color)
          img
            // opacity: .5
            // mix-blend-mode: screen
            filter: greyscale(1)
            -webkit-filter: grayscale(1)
    @for $i from 1 through 100
      li:nth-child(#{$i})
        .imageGrid-Item_Placeholder
          width: random(45) + 50%
          margin-top: random(200) + px
          margin-bottom: random(200) + px
          margin-left: random(100) - 100 + px
          @media screen and ( max-width: $breakpoint-mobile)
            width: 100%
            margin-top: 0
            margin-bottom: var(--spacing-one)
            margin-left: 0
    li:first-child, li:nth-child(2)
      .imageGrid-Item_Placeholder
        @media screen and ( min-width: $breakpoint-mobile)
          margin-top: var(--spacing-three)
    li:last-child, li:nth-last-child(2)
      .imageGrid-Item_Placeholder
        @media screen and ( min-width: $breakpoint-mobile)
          margin-bottom: var(--spacing-three)
</style>
