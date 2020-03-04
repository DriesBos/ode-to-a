<template>
  <div class="view view-Brands">
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

export default {
  mixins: [storyblokLivePreview],
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/brands", {
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
      story: {
        content: {}
      }
      // brands: {}
      // brandpage: {}
    }
  },
  mounted() {
    // this.arrayLoop(this.stories)
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
  // methods: {
  //   arrayLoop(array) {
  //     this.brands = array.filter(function(el) {
  //       if (el.content.component === "brand") {
  //         return true
  //       }
  //     })
  //     // this.brandpage = array.filter(function(el) {
  //     //   if (el.content.component === "pagebrands") {
  //     //     return true
  //     //   }
  //     // })
  //   }
  // }
}
</script>
