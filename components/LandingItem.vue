<template>
  <section v-editable="blok" class="landingItem">
    <img v-if="blok.image" :src="blok.image" />
    <div class="landingItem-Text">
      <h1 v-if="blok.title">{{ blok.title }}</h1>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
