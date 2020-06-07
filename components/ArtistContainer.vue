<template>
  <!-- prettier-ignore -->
  <section class="artList">
    <ul>
      <component
        :is="blok.component | dashify"
        v-for="blok in blok.body"
        :key="blok._uid"
        :blok="blok"
      />
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
