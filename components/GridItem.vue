<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="griditem">
    <component
      :is="blok.component | dashify"
      v-for="blok in blok.columns"
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
