<template>
  <section>
    <component
      :is="story.content.component | dashify"
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
    />
  </section>
</template>

<script>
import { mapState } from "vuex"
import onPageRender from "@/mixins/onPageRender"
import storyblokLivePreview from "@/mixins/storyblokLivePreview"

export default {
  mixins: [storyblokLivePreview, onPageRender],
  asyncData(context) {
    // Check if we are in the editor mode
    let version =
      context.query._storyblok || context.isDev ? "draft" : "published"
    // Load the JSON from the API
    return context.app.$storyapi
      .get(`cdn/stories/${context.params.slug}`, {
        version: version
      })
      .then(res => {
        return res.data
      })
      .catch(res => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        })
      })
  },
  data() {
    return { story: { content: {} } }
  },
  computed: {
    ...mapState({
      general: state => state.general.list
    })
  },
  head() {
    return {
      title: this.story.name.toUpperCase() + " — ODE TO A",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.general[0].content.site_description
        }
      ]
    }
  }
}
</script>
