<template>
  <!-- prettier-ignore -->
  <section
    v-editable="blok"
    class="textBlok intersectionObserver"
    :class="{ fullscreen: blok.fullscreen, textCenter: blok.left_alignment, capslock: blok.capslock }"
  >
    <div class="graphic" :class="blok.graphic_alignment">
      <img v-if="blok.graphic" :src="blok.graphic">
    </div>
    <markdown v-if="blok.text" class="textBlok-Item textBlok-Main" :input="blok.text" />
    <markdown
      v-if="blok.fade_in_text"
      class="textBlok-Item textBlok-FadeIn"
      :input="blok.fade_in_text"
    />
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {}
}
</script>

<style lang="sass">
@import '~assets/styles/variables'

.textBlok
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  width: 100%
  padding-top: var(--spacing-three)
  padding-bottom: var(--spacing-three)
  padding-left: var(--side-spacing)
  padding-right: var(--side-spacing)
  overflow: hidden
  &-Item
    width: 100%
</style>
