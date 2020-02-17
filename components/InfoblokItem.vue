<template>
  <section v-editable="blok" class="singleDetails">
    <h1 v-if="blok.title" class="font-regular">{{ blok.title }}</h1>
    <p v-if="blok.text">{{ blok.text }}</p>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
