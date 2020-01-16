<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="imagelistitem">
    <ul>
      <li v-for="image in blok.image" :key="image">
        <img :src="require('~/assets/images/landscape-1.jpg')" />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ["blok"]
  // mounted() {
  //   console.log("IMAGELIST BLOK", this.blok)
  // }
}
</script>
