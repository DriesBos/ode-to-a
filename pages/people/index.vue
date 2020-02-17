<template>
  <div class="view view-People">
    <div class="landinggraphicitem left">
      <div class="landinggraphicitem-Container">
        <svg viewBox="0 0 729 746.51">
          <g data-name="Laag 2">
            <g data-name="Laag 1">
              <path
                d="M365,523v2H271.5c-9.5,0-14.5,1.5-21,7L15,746.51v-3l154-140c5-5,4.5-9-.5-13.5L15,446.51v-145L250.5,516c6.5,5.5,11.5,7,21,7Z"
              />
              <path
                d="M190,360C70.5,360,0,270,0,180S70.5,0,190,0,380,90,380,180,309.5,360,190,360ZM304.5,112H75.5C30,112,2,134,2,180s28,68,73.5,68h229c45.5,0,73.5-22,73.5-68S350,112,304.5,112Z"
              />
              <path
                d="M614,14.51H729V212c0,103-76,157.5-170.5,157.5C464.5,369.51,400,315,400,212V14.51h2V210c0,93.5,47.5,133,106,133,63.5,0,106-39.5,106-133Z"
              />
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
  </div>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"

export default {
  mixins: [storyblokLivePreview],
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/people", {
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
