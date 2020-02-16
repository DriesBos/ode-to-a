<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="imagelistitem">
    <ul>
      <li v-for="image in blok.image" :key="image.name">
        <img :src="image.filename" />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  }
  // mounted() {
  //   console.log(this.blok.image.filename)
  // }
}
</script>
