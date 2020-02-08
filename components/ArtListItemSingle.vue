<template>
  <!-- prettier-ignore -->
  <div class="artlistitemsingle imagelistitemsingle">
    <nuxt-link :to="blok.hyperlink.cached_url" tag="div">
      <p>{{ blok.title }}</p>
      <div class="artlistitemsingle-Image">
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
