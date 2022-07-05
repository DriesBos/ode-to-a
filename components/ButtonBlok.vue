<template>
  <!-- prettier-ignore -->
  <section
    v-editable="blok"
    class="buttonBlok hovered"
    :class="{ fullscreen: blok.fullscreen, capslock: blok.capslock }"
  >
    <div class="buttonBlok-Item" :title="blok.text">
      <a :href="blok.hyperlink.cached_url" target="_blank" rel="noreferrer">
        <h5>{{ blok.text }}</h5>
      </a>
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

<style lang="sass">
.buttonBlok
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  width: 100%
  padding-top: var(--spacing-one)
  padding-bottom: var(--spacing-one)
  padding-left: var(--side-spacing)
  padding-right: var(--side-spacing)
  &-Item
    padding: 1rem 1.5rem
    background: var(--current-color)
    border-radius: 1000px
    color: var(--second-color)
    transition: color $transition-hover, background $transition-hover
    &:hover
      background: var(--second-color)
      color: var(--current-color)
    h5
      text-align: center
      transform: translateY(-0.1rem)
</style>
