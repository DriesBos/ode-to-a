<template>
  <section class="view view-BrandSingle">
    <div class="brandSingle-Landing">
      <img :src="story.content.cover_image" />
      <div class="textitem brandSingle-Landing_Title">
        <h1>{{ story.content.title }}</h1>
      </div>
    </div>
    <div class="textitem brandSingle-InfoBlok">
      <div class="brandSingle-InfoBlok-Container">
        <p class="font-regular">Project</p>
        <h4>{{ story.content.subtitle_project }}</h4>
        <div class="inline">
          <p class="font-regular">Via</p>
          <p>{{ story.content.subtitle_via }}</p>
        </div>
        <div class="inline">
          <p class="font-regular">Created by</p>
          <p>{{ story.content.subtitle_team }}</p>
        </div>
      </div>
    </div>
    <component
      :is="blok.component | dashify"
      v-for="blok in story.content.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
  </section>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"

export default {
  mixins: [storyblokLivePreview],
  asyncData(context) {
    let endpoint = `cdn/stories/brands/${context.params.slug}`

    return context.app.$storyapi
      .get(endpoint, {
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
    console.log(this.story.content.body)
  }
}
</script>
