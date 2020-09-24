<template>
  <div class="view view-Message">
    <section class="messageBlok">
      <markdown
        class="messageBlok-Header"
        :input="general[0].content.error_page_title"
      />
      <markdown
        class="messageBlok-Text"
        :input="general[0].content.error_page_text"
      />
      <div class="messageBlok-Graphic">
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
        <div v-html="require('~/assets/images/logo-wide.svg?include')" />
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState({
      general: state => state.general.list
    })
  },
  mounted() {
    window.onNuxtReady(() => {
      window.$nuxt.error({ statusCode: 404 })
    })
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
