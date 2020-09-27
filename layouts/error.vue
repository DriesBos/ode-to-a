<template>
  <section class="messageBlok">
    <div class="markdown messageBlok-Header">
      <h2>Too Bad!</h2>
    </div>
    <div class="markdown messageBlok-Text">
      <h3>
        We can't find the page you're looking for. You can check our
        <nuxt-link to="/brands">projects</nuxt-link> or feel our
        <nuxt-link to="/">vibe</nuxt-link>.
      </h3>
    </div>
    <div class="messageBlok-Graphic">
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
      <div
        class="messageBlok-Graphic_Item"
        v-html="require('~/assets/images/logo-wide.svg?include')"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex"
import { gsap } from "gsap"

export default {
  layout: "default", // you can set a custom layout for the error page
  computed: {
    ...mapState({
      errordata: state => state.error.list,
      general: state => state.general.list
    })
  },
  mounted() {
    this.horizontalCarousel()
  },
  methods: {
    horizontalCarousel() {
      var itemWidth = document.querySelector(".messageBlok-Graphic_Item")
        .offsetWidth
      var totalItems = document.querySelectorAll(".messageBlok-Graphic_Item")
      var target = document.querySelector(".messageBlok-Graphic")
      gsap.to(target, {
        x: -itemWidth * totalItems.length,
        duration: 300,
        ease: "none"
      })
    }
  },
  head() {
    return {
      title: "404 ERROR",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Oops, sorry we can't find that page!"
        }
      ]
    }
  }
}
</script>
