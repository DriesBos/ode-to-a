<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="textitem" v-bind:class="{ active: blok.fullscreen }">
    <markdown :input="blok.text" />
  </section>
</template>

<script>
export default {
  props: ["blok"],
  mounted() {
    console.log("TEXTITEM", this.blok)
  }
}
</script>
