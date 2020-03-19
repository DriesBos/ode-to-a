<template>
  <!-- prettier-ignore -->
  <section
    v-editable="blok"
    class="listItem-Single"
    :class="{ smallsize: blok.small_type, fullscreen: blok.fullscreen, textCenter: blok.left_alignment, capslock: blok.capslock }"
  >
    <div v-if="blok.graphic" class="graphic" :class="blok.graphic_alignment">
      <img v-if="blok.graphic" :src="blok.graphic" />
    </div>
    <div class="listitem-Text">
      <h4 v-if="blok.title" class="DINRg">{{ blok.title }}</h4>
      <h4 v-if="blok.content">{{ blok.content }}</h4>
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
