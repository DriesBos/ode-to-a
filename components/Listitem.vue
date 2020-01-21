<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="listitem" :class="{ smallsize: blok.small_size, fullscreen: blok.fullscreen }">
    <div class="listitem-Container">
    <p>{{ blok.title }}</p>
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
