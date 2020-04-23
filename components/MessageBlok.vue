<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="messageBlok">
    <markdown v-if="blok.header" class="messageBlok-Header" :input="blok.header" />
    <markdown v-if="blok.text" class="messageBlok-Text" :input="blok.text" />
    <div class="messageBlok-Graphic">
      <div v-html="require('~/assets/images/logo-wide.svg?include')" />
      <div v-html="require('~/assets/images/logo-wide.svg?include')" />
      <div v-html="require('~/assets/images/logo-wide.svg?include')" />
      <div v-html="require('~/assets/images/logo-wide.svg?include')" />
      <div v-html="require('~/assets/images/logo-wide.svg?include')" />
      <div v-html="require('~/assets/images/logo-wide.svg?include')" />
      <div v-html="require('~/assets/images/logo-wide.svg?include')" />
      <div v-html="require('~/assets/images/logo-wide.svg?include')" />
      <div v-html="require('~/assets/images/logo-wide.svg?include')" />
      <div v-html="require('~/assets/images/logo-wide.svg?include')" />
      <div v-html="require('~/assets/images/logo-wide.svg?include')" />
      <div v-html="require('~/assets/images/logo-wide.svg?include')" />
      <div v-html="require('~/assets/images/logo-wide.svg?include')" />
      <div v-html="require('~/assets/images/logo-wide.svg?include')" />
      <div v-html="require('~/assets/images/logo-wide.svg?include')" />
      <div v-html="require('~/assets/images/logo-wide.svg?include')" />
      <div v-html="require('~/assets/images/logo-wide.svg?include')" />
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
@import '~assets/styles/variables'

.messageBlok
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  width: 100%
  padding-top: var(--spacing-three)
  padding-bottom: var(--spacing-three)
  padding-left: var(--side-spacing)
  padding-right: var(--side-spacing)
  min-height: 100vh
  text-align: center
  overflow: hidden
  &-Header
    text-transform: uppercase
  .markdown
    h1, h2, h3, h4
      margin-bottom: 0
  &-Text
    margin-bottom: var(--spacing-three)
  &-Graphic
    display: flex
    animation: left
    animation-duration: 60s
    animation-timing-function: linear
    animation-direction: alternate
    animation-iteration-count: infinite
    > div
      margin-right: 25vmin
    svg
      fill: rgba(0,0,0,0)
      stroke: currentColor
      height: 30vmin

@keyframes left
  0%
    transform: translateX(0)
  100%
    transform: translateX(-1000vw)
</style>
