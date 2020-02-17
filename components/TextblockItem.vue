<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="textitem" :class="{ fullscreen: blok.fullscreen }">
    <markdown :input="blok.text" />
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
