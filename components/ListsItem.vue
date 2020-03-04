<template>
  <!-- prettier-ignore -->
  <section
    v-editable="blok"
    class="list-Item"
    :class="{ smallsize: blok.small_type, fullscreen: blok.fullscreen, textCenter: blok.left_alignment, capslock: blok.capslock }"
  >
    <div v-if="blok.graphic" class="graphic" :class="blok.graphic_alignment">
      <img v-if="blok.graphic" :src="blok.graphic" />
    </div>
    <div class="listitem-Text">
      <h1 v-if="blok.title">{{ blok.title }}</h1>
      <p v-if="blok.content">{{ blok.content }}</p>
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
