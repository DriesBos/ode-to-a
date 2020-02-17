<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="textBlok" :class="{ fullscreen: blok.fullscreen }">
    <markdown v-if="blok.text" class="textBlok-Main" :input="blok.text" />
    <markdown v-if="blok.fade_in_text" class="textBlok-FadeIn" :input="blok.fade_in_text" />
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    console.log(this.blok)
  }
}
</script>
