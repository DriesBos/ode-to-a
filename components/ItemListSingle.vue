<template>
  <!-- prettier-ignore -->
  <div class="brandslistitemsingle">
    <nuxt-link :to="blok.hyperlink.cached_url" tag="p">
      {{ blok.title }} <span class="dash">—</span>
    </nuxt-link>
    <div class="brandslistitemsingle-Image">
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
