<template>
  <div class="view view-Single view-ArtSingle">
    <blok-page-project :blok="story.content" />
    <blok-footer-form />
  </div>
</template>

<script>
import { mapState } from "vuex"
import onPageRender from "@/mixins/onPageRender"
import storyblokLivePreview from "@/mixins/storyblokLivePreview"

export default {
  mixins: [storyblokLivePreview, onPageRender],
  asyncData(context) {
    let version =
      context.query._storyblok || context.isDev ? "draft" : "published"
    let endpoint = `cdn/stories/art/${context.params.slug}`
    return context.app.$storyapi
      .get(endpoint, {
        version: version
      })
      .then(res => {
        return res.data
      })
      .catch(res => {
        if (!res.response) {
          console.error(res)
          context.error({
            statusCode: 404,
            message: "Failed to receive content form api"
          })
        } else {
          console.error(res.response.data)
          context.error({
            statusCode: res.response.status,
            message: res.response.data
          })
        }
      })
  },
  data() {
    return {
      story: { content: {} }
    }
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
