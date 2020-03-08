<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="landinggraphicitem">
    <div class="landinggraphicitem-Container" :class="blok.graphic_alignment">
      <img v-if="blok.graphic" :src="blok.graphic" />
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
