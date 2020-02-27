<template>
  <!-- prettier-ignore -->
  <section
    v-editable="blok"
    class="textBlok intersectionObserver"
    :class="{ fullscreen: blok.fullscreen }"
  >
    <markdown v-if="blok.text" class="textBlok-Main" :input="blok.text" />
    <markdown v-if="blok.fade_in_text" class="textBlok-FadeIn" :input="blok.fade_in_text" />
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
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          entry.target.classList.add("fade")
        } else {
          entry.target.classList.remove("fade")
        }
      },
      { threshold: 0.7 }
    )
    this.observer.observe(this.$el)
  },
  destroyed() {
    this.observer.disconnect()
  },
  method: {}
}
</script>
