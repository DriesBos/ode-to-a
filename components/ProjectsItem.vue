<template>
  <!-- prettier-ignore -->
  <span
    :id="blok._uid"
    v-editable="blok"
    class="projectList-Single hovered"
    @mouseover="mouseEntered"
  >
    <nuxt-link v-if="blok.hyperlink.linktype === 'story'" :to="'/' + blok.hyperlink.cached_url" class="content">{{ blok.title }}</nuxt-link>
    <a v-else :href="blok.hyperlink.cached_url" class="content" rel="noreferrer">{{ blok.title }}</a>

    <!-- <h3 class="dash">—&nbsp;</h3> -->

    <!-- prettier-ignore -->
    <div class="projectList-Single_Image">
      <img
        v-if="blok.image"
        :alt="blok.title"
        :srcset="
          `${transformImage(
            blok.image,
            '2880x0/filters:format(jpg):quality(50)'
          )} 2880w, ${transformImage(
            blok.image,
            '2560x0/filters:format(jpg):quality(50)'
          )} 2560w, ${transformImage(
            blok.image,
            '1920x0/filters:format(jpg):quality(50)'
          )} 1920w, ${transformImage(
            blok.image,
            '1680x0/filters:format(jpg):quality(50)'
          )} 1680w, ${transformImage(
            blok.image,
            '1370x0/filters:format(jpg):quality(50)'
          )} 1370w, ${transformImage(
            blok.image,
            '900x0/filters:format(jpg):quality(50)'
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
      var el = document.getElementById(this.blok._uid)
      var bounding = el.getBoundingClientRect()
      if (
        bounding.top - windowHalf <= 0 &&
        bounding.top - windowHalf >= 0 - bounding.height
      ) {
        el.classList.add("active")
      } else {
        el.classList.remove("active")
      }
    },
    mouseEntered() {
      var allSingles = document.querySelectorAll(".projectList-Single")
      allSingles.forEach(el => {
        el.classList.remove("active")
      })
      document.getElementById(this.blok._uid).classList.add("active")
    }
  }
}
</script>
