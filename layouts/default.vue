<template>
  <main :class="pageColor">
    <the-header :class="pageColor" />
    <the-svgcarousel :class="pageColor" />
    <transition name="pages" mode="out-in">
      <nuxt :class="pageColor" />
    </transition>
    <div class="cursor" :class="pageColor">
      <div v-html="require('~/assets/images/muis.svg?include')" />
    </div>
  </main>
</template>

<script>
import TheHeader from "~/components/TheHeader"
import TheSVGCarousel from "~/components/TheSVGCarousel"
import gsap from "gsap"
import JQuery from "jquery"
let $ = JQuery

export default {
  components: {
    "the-header": TheHeader,
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
      this.customCursor()
    }
  },
  mounted() {
    this.setpageColor()
    this.customCursor()
  },
  methods: {
    setpageColor() {
      if (
        this.$route.path === "/" ||
        this.$route.path === "/home" ||
        this.$route.path === "/home/"
      ) {
        this.pageColor = "yellow"
      } else if (
        this.$route.path === "/brands" ||
        this.$route.path === "/brands/" ||
        this.$route.name === "brands-slug"
      ) {
        this.pageColor = "blue"
      } else if (
        this.$route.path === "/people" ||
        this.$route.path === "/people/"
      ) {
        this.pageColor = "white"
      } else if (
        this.$route.path === "/art" ||
        this.$route.path === "/art/" ||
        this.$route.name === "art-slug"
      ) {
        this.pageColor = "red"
      } else {
        this.pageColor = "black"
      }
    },
    customCursor() {
      let $cursor = $(".cursor")
      function moveCursor(e) {
        gsap.to($cursor, 0, {
          left: e.clientX,
          top: e.clientY
        })
      }
      $(window).on("mousemove", moveCursor)
    }
  }
}
</script>
