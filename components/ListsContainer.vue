<template>
  <!-- prettier-ignore -->
  <section
    v-editable="blok"
    class="list-Container"
    :class="{ fullscreen: blok.fullscreen, textCenter: blok.left_alignment, capslock: blok.capslock }"
  >
    <component
      :is="blok.component | dashify"
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
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
.list-Item
  display: flex
  justify-content: center
  align-items: center
  padding-top: var(--spacing-three)
  padding-bottom: var(--spacing-three)
  padding-left: var(--side-spacing)
  padding-right: var(--side-spacing)
  p
    font-size: 2.33rem
    display: inline
  h1
    font-size: 2.33rem
    font-family: "DINRg", Helvetica, Arial, sans-serif
    display: block
  svg
    height: 90%

.list-Text
  display: flex
  flex-direction: column
  align-items: flex-start
  width: 100%

.list-Container
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  padding-top: var(--spacing-three)
  padding-bottom: var(--spacing-three)
  padding-left: var(--side-spacing)
  padding-right: var(--side-spacing)
  .list-Item
    padding: 0
    // margin-bottom: 1em
</style>
