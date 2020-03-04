<template>
  <!-- prettier-ignore -->
  <section class="landinggraphicitem"
    v-editable="blok"
  >
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
