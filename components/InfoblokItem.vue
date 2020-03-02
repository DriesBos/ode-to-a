<template>
  <div v-editable="blok" class="infoBlok-Item">
    <h1 v-if="blok.title" class="font-regular">{{ blok.title }}</h1>
    <markdown v-if="blok.text" :input="blok.text"></markdown>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
