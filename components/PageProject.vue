<template>
  <section v-editable="blok" class="page-Single">
    <component
      :is="blok.component | dashify"
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    />
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
