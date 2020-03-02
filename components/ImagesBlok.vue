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
