<template>
  <!-- prettier-ignore -->
  <span
    :id="blok.title"
    v-editable="blok"
    class="projectList-Single hovered"
    :class="{ active: isActive }"
  >
    <nuxt-link v-if="blok.hyperlink.linktype === 'story'" :to="blok.hyperlink.cached_url" class="content">{{ blok.title }}</nuxt-link>
    <a v-if="blok.hyperlink.linktype === 'url'" :href="blok.hyperlink.cached_url" class="content">{{ blok.title }}</a>

    <h3 class="dash">—&nbsp;</h3>

    <!-- prettier-ignore -->
    <div v-lazy-container="{ selector: 'img' }" class="vueLazy projectList-Single_Image">
      <img
        v-if="blok.image"
        :srcset="
          `${transformImage(
            blok.image,
            '2880x0/filters:format(jpg):quality(65)'
          )} 2880w, ${transformImage(
            blok.image,
            '2560x0/filters:format(jpg):quality(65)'
          )} 2560w, ${transformImage(
            blok.image,
            '1920x0/filters:format(jpg):quality(65)'
          )} 1920w, ${transformImage(
            blok.image,
            '1680x0/filters:format(jpg):quality(65)'
          )} 1680w, ${transformImage(
            blok.image,
            '1370x0/filters:format(jpg):quality(65)'
          )} 1370w, ${transformImage(
            blok.image,
            '900x0/filters:format(jpg):quality(65)'
          )} 900w`
        " sizes="100vw"
        :data-src="`${transformImage(blok.image, '1600x0/filters:format(jpg):quality(65)')}`"
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
    // console.log(this.blok)
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
      let pathOne = image.replace("https://a.storyblok.com", "")
      let pathTwo = pathOne.replace("//a.storyblok.com", "")
      return imageService + option + pathTwo
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
