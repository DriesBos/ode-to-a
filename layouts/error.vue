<template>
  <!-- <div v-editable="error[0].content" class="page page-Error"> -->
  <div class="page page-Error">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/">Home page</nuxt-link>
    <!-- <component
      :is="error[0].content.component | dashify"
      v-if="error[0].content.component"
      :key="error[0].content._uid"
      :blok="error[0].content"
    /> -->
  </div>
</template>

<script>
import { mapState } from "vuex"
import storyblokLivePreview from "@/mixins/storyblokLivePreview"

export default {
  mixins: [storyblokLivePreview],
  props: ["error"],
  layout: "default", // you can set a custom layout for the error page
  computed: {
    ...mapState({
      errordata: state => state.error.list,
      general: state => state.general.list
    })
  },
  mounted() {
    console.log(this.error, this.general, this.errordata)
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
