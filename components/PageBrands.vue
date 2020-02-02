<template>
  <section v-editable="blok" class="page">
    <component
      :is="blok.component | dashify"
      v-for="blok in blok.body_upper"
      :key="blok._uid"
      :blok="blok"
    ></component>
    <component
      :is="blok.component | dashify"
      v-for="blok in blok.body_lower"
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
