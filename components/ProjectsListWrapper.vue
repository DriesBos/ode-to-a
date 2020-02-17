<template>
  <!-- prettier-ignore -->
  <section
    v-editable="blok"
    class="listSingle-Wrapper"
  >
  <div class="listSingle-Wrapper-Container imagelistitem">
    <h1 v-if="blok.title">{{ blok.title }}</h1>
    <component
      :is="blok.component | dashify"
      v-for="blok in blok.list"
      :key="blok._uid"
      :blok="blok"
    ></component>
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
