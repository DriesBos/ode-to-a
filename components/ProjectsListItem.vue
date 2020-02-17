<template>
  <!-- prettier-ignore -->
  <div class="listSingle-Single">
    <nuxt-link :to="blok.hyperlink.cached_url" tag="p">
      {{ blok.title }} <span class="dash">—</span>
    </nuxt-link>
    <div class="listSingle-Single_Image">
      <img :src="blok.image" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
