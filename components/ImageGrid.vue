<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="imageGrid">
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
}
</script>
