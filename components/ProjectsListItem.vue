<template>
  <!-- prettier-ignore -->
  <div class="projectList-Single">
    <nuxt-link :to="blok.hyperlink.cached_url" tag="p">
      {{ blok.title }} <span class="dash">—</span>
    <div class="projectList-Single_Image">
      <img :src="blok.image" />
    </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
