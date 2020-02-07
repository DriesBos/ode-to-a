<template>
  <!-- prettier-ignore -->
  <div class="brandslistitemsingle">
    <p>{{ blok.title }}<span class="dash"> — </span></p>
    <div class="brandslistitemsingle-Image">
      <img :src="blok.image" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    // console.log(this.blok.hyperlink)
  }
}
</script>
