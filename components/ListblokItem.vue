<template>
  <!-- prettier-ignore -->
  <section
    v-editable="blok"
    class="listitem"
    :class="{ smallsize: blok.small_type, fullscreen: blok.fullscreen }"
  >
    <div class="graphic" :class="blok.graphic_alignment">
      <img :src="blok.graphic" />
    </div>
    <div class="listitem-Container">
      <h1>{{ blok.title }}</h1>
      <p>{{ blok.content }}</p>
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
