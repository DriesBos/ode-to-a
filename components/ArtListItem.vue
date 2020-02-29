<template>
  <li class="artList-Item">
    <p>{{ blok.title }}</p>
    <img :src="blok.image" />
  </li>
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
