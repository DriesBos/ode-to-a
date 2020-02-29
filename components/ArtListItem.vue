<template>
  <nuxt-link :to="blok.hyperlink.cached_url" class="artList-Item" tag="li">
    <p>{{ blok.title }}</p>
    <img :src="blok.image" />
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
    const targets = document.querySelectorAll(".artList-Item")
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
        { threshold: 0.7 }
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
