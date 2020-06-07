<template>
  <!-- prettier-ignore -->
  <span
    :id="blok.title"
    v-editable="blok"
    class="projectList-Single hovered"
    :class="{ active: isActive }"
  >
    <nuxt-link :to="blok.hyperlink.cached_url" tag="h3" class="content">{{ blok.title }}</nuxt-link>
    <h3 class="dash">—&nbsp;</h3>
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
      >
    </div>
  </span>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  data() {
    return {
      isActive: false
    }
  },
  mounted() {
    window.addEventListener("scroll", this.ifViewportCenter)
  },
  destroyed() {
    window.removeEventListener("scroll", this.ifViewportCenter)
  },
  methods: {
    transformImage(image, option) {
      if (!image) return ""
      if (!option) return ""
      let imageService = "//img2.storyblok.com/"
      let path = image.replace("//a.storyblok.com", "")
      return imageService + option + path
    },
    ifViewportCenter() {
      var windowHeight =
        window.innerHeight || document.documentElement.clientHeight
      var windowHalf = windowHeight / 2
      var el = document.getElementById(this.blok.title)
      var bounding = el.getBoundingClientRect()
      if (
        bounding.top - windowHalf <= 0 &&
        bounding.top - windowHalf >= 0 - bounding.height
      ) {
        this.isActive = true
      } else {
        this.isActive = false
      }
    }
  }
}
</script>
