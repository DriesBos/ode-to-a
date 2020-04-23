<template>
  <div class="view view-Home">
    <component
      :is="story.content.component | dashify"
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
    ></component>
    <blok-footer-form />
  </div>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"
import JQuery from "jquery"
let $ = JQuery

export default {
  mixins: [storyblokLivePreview],
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/home", {
        version: "draft"
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
  mounted() {
    $(".hovered").on("mouseover", this.changeCursor)
    $(".hovered").on("mouseleave", this.removeChangeCursor)
  },
  destroyed() {
    $(".hovered").off("mouseover", this.changeCursor)
    $(".hovered").off("mouseleave", this.removeChangeCursor)
  },
  methods: {
    changeCursor() {
      let $cursor = $(".cursor")
      $cursor.addClass("hovers-container")
    },
    removeChangeCursor() {
      let $cursor = $(".cursor")
      $cursor.removeClass("hovers-container")
    }
  },
  head() {
    return {
      title: this.story.content.SEO.title || this.story.name,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.story.content.SEO.description || this.story.name
        }
      ]
    }
  }
}
</script>
