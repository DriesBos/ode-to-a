<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="griditem">
    <component
      :key="blok._uid"
      v-for="blok in blok.columns"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
  </section>
</template>

<script>
export default {
  props: ["blok"]
  // mounted() {
  //   console.log("GRIDITEM BLOK", this.blok)
  // }
}
</script>
