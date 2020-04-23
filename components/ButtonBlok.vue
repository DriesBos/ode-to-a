<template>
  <!-- prettier-ignore -->
  <section
    v-editable="blok"
    class="buttonBlok"
    :class="{ fullscreen: blok.fullscreen, capslock: blok.capslock }"
  >
    <div class="buttonBlok-Item">
      <a :href="blok.hyperlink.cached_url">
        <h3>{{ blok.text }}</h3>
      </a>
    </div>
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

<style lang="sass">
@import '~assets/styles/variables'

.buttonBlok
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  width: 100%
  padding-top: var(--spacing-three)
  padding-bottom: var(--spacing-three)
  padding-left: var(--side-spacing)
  padding-right: var(--side-spacing)
  &-Item
    padding: 1.2rem 1.2rem
    border: 2px solid var(--current-color)
    border-radius: 1000px
    color: var(--current-color)
    &:hover
      text-decoration: underline
    h3
      border: 2px solid var(--current-color)
      border-radius: 1000px
      padding: 2rem 3rem
      text-align: center
</style>
