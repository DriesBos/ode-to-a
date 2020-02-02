<template>
  <!-- prettier-ignore -->
  <section
    v-editable="blok"
    class="listitem"
    :class="{ smallsize: blok.small_type, fullscreen: blok.fullscreen }"
  >
    <svg viewBox="0 0 220 356.96">
      <g data-name="Laag 2">
        <!-- prettier-ignore -->
        <path
          d="M217.25,356.21v-213c0-12-7-16.5-18-11L.75,230.71v-120L219.25,1.21v355Z"
          fill="none"
          stroke
          stroke-miterlimit="10"
          stroke-width="1.5"
          data-name="Laag 1"
        />
      </g>
    </svg>
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
  },
  mounted() {}
}
</script>
