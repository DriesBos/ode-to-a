<template>
  <!-- prettier-ignore -->
  <li class="projectList-Single">
    <nuxt-link :to="blok.hyperlink.cached_url" tag="h3" class="content">
      {{ blok.title }}
      <span class="dash">,&nbsp;</span>
    </nuxt-link>
    <div v-lazy-container="{ selector: 'img' }" class="vueLazy projectList-Single_Image">
      <img
        v-if="blok.image"
        :srcset="
          `${transformImage(blok.image, '2880x0')} 2880w, ${transformImage(
            blok.image,
            '2560x0'
          )} 2560w, ${transformImage(
            blok.image,
            '1920x0'
          )} 1920w, ${transformImage(
            blok.image,
            '1680x0'
          )} 1680w, ${transformImage(
            blok.image,
            '1370x0'
          )} 1370w, ${transformImage(blok.image, '900x0')} 900w`
        "
        sizes="100vw"
        :data-src="`${transformImage(blok.image, '1440')}`"
      />
    </div>
  </li>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  methods: {
    transformImage(image, option) {
      if (!image) return ""
      if (!option) return ""
      let imageService = "//img2.storyblok.com/"
      let path = image.replace("//a.storyblok.com", "")
      return imageService + option + path
    }
  }
}
</script>
