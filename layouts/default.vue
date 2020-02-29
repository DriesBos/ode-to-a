<template>
  <main>
    <the-header :class="pageColor" />
    <the-svgcarousel :class="pageColor" />
    <transition name="pages" mode="out-in">
      <nuxt :class="pageColor" />
    </transition>
  </main>
</template>

<script>
import TheHeader from "~/components/TheHeader"
// import TheTextCarousel from "~/components/TheTextCarousel"
import TheSVGCarousel from "~/components/TheSVGCarousel"

export default {
  components: {
    "the-header": TheHeader,
    // "the-textcarousel": TheTextCarousel,
    "the-svgcarousel": TheSVGCarousel
  },
  data() {
    return {
      pageColor: "yellow"
    }
  },
  watch: {
    $route() {
      this.setpageColor()
    }
  },
  mounted() {
    this.setpageColor()
  },
  methods: {
    setpageColor() {
      if (this.$route.path === "/") {
        this.pageColor = "yellow"
      } else if (
        this.$route.path === "/brands" ||
        this.$route.name === "brands-slug"
      ) {
        this.pageColor = "blue"
      } else if (this.$route.path === "/people") {
        this.pageColor = "white"
      } else if (
        this.$route.path === "/art" ||
        this.$route.name === "art-slug"
      ) {
        this.pageColor = "red"
      } else {
        this.pageColor = "black"
      }
    }
  }
}
</script>
