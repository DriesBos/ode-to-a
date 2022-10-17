<template>
  <main :class="pageColor">
    <the-header :class="pageColor" />
    <the-svgcarousel :class="pageColor" />
    <transition name="pages" mode="out-in">
      <nuxt :class="pageColor" />
    </transition>
    <the-footer @update="toggleFooterModal" />
    <footer-modal
      :active="footerModal"
      :title="footerModalTitle"
      :text="footerModalText"
      @close="closeFooterModal"
    />
    <div class="cursor" :class="pageColor">
      <div v-html="require('~/assets/images/muis.svg?include')" />
    </div>
  </main>
</template>

<script>
import TheHeader from "~/components/TheHeader"
import TheFooter from "~/components/TheFooter"
import FooterModal from "~/components/FooterModal"
import TheSVGCarousel from "~/components/TheSVGCarousel"
import gsap from "gsap"
import JQuery from "jquery"
let $ = JQuery

export default {
  components: {
    "the-header": TheHeader,
    "the-footer": TheFooter,
    "footer-modal": FooterModal,
    "the-svgcarousel": TheSVGCarousel
  },
  data() {
    return {
      pageColor: "yellow",
      footerModal: false,
      footerModalTitle: "",
      footerModalText: ""
    }
  },
  watch: {
    $route() {
      this.setpageColor()
      this.customCursor()
    }
  },
  created() {
    this.setpageColor()
  },
  mounted() {
    this.customCursor()
  },
  methods: {
    toggleFooterModal(options) {
      this.footerModal = !this.footerModal
      this.footerModalTitle = options.title
      this.footerModalText = options.text
      console.log("DEFAULT PAGE =", this.footerModal, options)
    },
    closeFooterModal() {
      this.footerModal = false
      console.log("DEFAULT PAGE = close modal")
    },
    setpageColor() {
      if (
        this.$nuxt.nuxt.err &&
        this.$route.path !== "/brands" &&
        this.$route.path !== "/"
      ) {
        this.pageColor = "black"
      } else if (
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
      let cursor = document.querySelector(".cursor")
      function moveCursor(e) {
        gsap.to(cursor, 0, {
          left: e.clientX,
          top: e.clientY
        })
      }
      $(window).on("mousemove", moveCursor)
    }
  }
}
</script>
