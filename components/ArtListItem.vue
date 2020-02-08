<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="artlistitem imagelistitem">
    <div class="artlistitem-Container imagelistitem-Container">
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
