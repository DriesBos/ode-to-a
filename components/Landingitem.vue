<template>
  <section v-editable="blok" class="landingitem">
    <img :src="blok.image" />
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
