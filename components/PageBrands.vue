<template>
  <section v-editable="blok" class="page">
    <component
      :key="blok._uid"
      v-for="blok in blok.body_upper"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
    <brandslist />
    <component
      :key="blok._uid"
      v-for="blok in blok.body_lower"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
  </section>
</template>

<script>
export default {
  props: ["blok"]
}
</script>
