<template>
  <div class="view view-Home">
    <div class="landinggraphicitem center">
      <div class="landinggraphicitem-Container">
        <svg viewBox="0 0 1567.99 710">
          <g data-name="Laag 2">
            <g data-name="Laag 1">
              <path
                d="M630,472H403c-23,0-35,11-44,27L240,710H0L399,0,798,710h-4L674,498C665,482,653,472,630,472ZM530,243c-7-13-22-13-29,0L389,444c-7,13-2,24,13,24H631c15,0,20-11,13-24Z"
              />
              <path d="M801,469h767v4H801Z" />
            </g>
          </g>
        </svg>
      </div>
    </div>
    <component
      :is="story.content.component | dashify"
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
    ></component>
    <!-- <blok-footerform /> -->
  </div>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"

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
  mounted() {}
}
</script>
