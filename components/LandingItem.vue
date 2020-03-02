<template>
  <section v-editable="blok" class="landingItem" :class="{ filter: filtered }">
    <img v-if="blok.image" :src="blok.image" />
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
    window.addEventListener("scroll", this.applyFilter)
  },
  destroyed() {
    window.removeEventListener("scroll", this.applyFilter)
  },
  methods: {
    applyFilter() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      const el = document.querySelector(".landingItem")
      if (
        currentScrollPosition > window.innerHeight * 0.1 &&
        currentScrollPosition < window.innerHeight * 0.6
      ) {
        el.classList.remove("filter")
      } else {
        el.classList.add("filter")
      }
    }
  }
}
</script>
