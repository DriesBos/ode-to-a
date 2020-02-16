<template>
  <section v-editable="blok" class="landingitem">
    <img v-if="blok.image" :src="blok.image" />
    <h1 v-if="blok.title">{{ blok.title }}</h1>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
