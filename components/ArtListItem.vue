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
