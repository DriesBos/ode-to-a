<template>
  <!-- prettier-ignore -->
  <section
    v-editable="blok"
    class="listitem"
    :class="{ smallsize: blok.small_type, fullscreen: blok.fullscreen }"
  >
    <div v-if="blok.graphic" class="graphic" :class="blok.graphic_alignment">
      <img :src="blok.graphic" />
    </div>
    <div class="listitem-Container">
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
