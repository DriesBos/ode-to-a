<template>
  <!-- prettier-ignore -->
  <section
    v-editable="blok"
    class="textBlok intersectionObserver"
    :class="{ fullscreen: blok.fullscreen }"
  >
    <div class="graphic" :class="blok.graphic_alignment">
      <img :src="blok.graphic" />
    </div>
    <markdown v-if="blok.text" class="textBlok-Main" :input="blok.text" />
    <markdown v-if="blok.fade_in_text" class="textBlok-FadeIn" :input="blok.fade_in_text" />
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
