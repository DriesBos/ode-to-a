<template>
  <div v-editable="error[0].content" class="page page-Error">
    <!-- <component
      :is="error[0].content.component | dashify"
      v-if="error[0].content.component"
      :key="error[0].content._uid"
      :blok="error[0].content"
    /> -->
    <p>{{ error }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex"
import storyblokLivePreview from "@/mixins/storyblokLivePreview"

export default {
  mixins: [storyblokLivePreview],
  layout: "default", // you can set a custom layout for the error page
  computed: {
    ...mapState({
      error: state => state.error.list,
      general: state => state.general.list
    })
  },
  mounted() {
    console.log(this.error, this.general)
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
