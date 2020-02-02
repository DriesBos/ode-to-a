<template>
  <div class="view view-Brands">
    <div class="landinggraphicitem">
      <div class="landinggraphicitem-Container">
        <svg viewBox="0 0 758.5 723">
          <g data-name="Laag 2">
            <g data-name="Laag 1">
              <path
                d="M190,360C70.5,360,0,270,0,180S70.5,0,190,0,380,90,380,180,309.5,360,190,360ZM304.5,112H75.5C30,112,2,134,2,180s28,68,73.5,68h229c45.5,0,73.5-22,73.5-68S350,112,304.5,112Z"
              />
              <path
                d="M408,355V5H570C684.5,5,755,90,755,180S684.5,355,570,355ZM684.5,248c45.5,0,68.5-22,68.5-68s-23-68-68.5-68H431c-14,0-21,4.5-21,19v98c0,14.5,7,19,21,19Z"
              />
              <path
                d="M408.5,384h350V723h-107V407c0-14-4.5-21-19-21h-27c-14,0-21,4.5-21,19V723h-2V405c0-14.5-7-19-21-19h-27c-14.5,0-19,7-19,21V723h-107Z"
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
    <blok-footerform />

    <!-- <div class="brandlistitem">
      <div class="brandlistitem-Container">
        <div class="brandlistitem-Title">
          <p>Brands</p>
        </div>
        <div class="brandlistitem-List">
          <div v-for="post in brands" :id="post.content.id" :key="post.content.id">
            <nuxt-link :to="post.full_slug">
              {{ post.content.title }}
              <span>&nbsp;—&nbsp;</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>-->
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
