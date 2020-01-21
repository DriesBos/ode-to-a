<template>
  <section>
    <div class="brandlistitem">
      <div class="brandlistitem-Container">
        <div class="brandlistitem-Title">
          <p>Brands</p>
        </div>
        <!-- prettier-ignore -->
        <div class="brandlistitem-List">
        <div
          v-for="post in brands"
          :id="post.content.id"
          :key="post.content.id"
        >
          <nuxt-link :to="post.full_slug">
            {{ post.content.title }}<span>&nbsp;—&nbsp;</span>
          </nuxt-link>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"

export default {
  mixins: [storyblokLivePreview],
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/", {
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
      stories: {
        content: {}
      },
      brands: {}
      // brandpage: {}
    }
  },
  mounted() {
    this.arrayLoop(this.stories)
  },
  methods: {
    arrayLoop(array) {
      this.brands = array.filter(function(el) {
        if (el.content.component === "brand") {
          return true
        }
      })
      // this.brandpage = array.filter(function(el) {
      //   if (el.content.component === "pagebrands") {
      //     return true
      //   }
      // })
    }
  }
}
</script>
