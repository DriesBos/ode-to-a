<template>
  <section v-editable="blok" class="landinggraphicitem">
    <div class="landinggraphicitem-Container">
      <img :src="blok.graphic" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {}
}
</script>
