<template>
  <div class="theMoreInfo" :class="{ active: active }" @click="onClick()">
    <p>Feel free to stop by at our office, we would love to meet!</p>
    <h1>
      ode to a
      <br />
      Herengracht 216
      <br />
      1016BS Amsterdam
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    active: Boolean
  },
  methods: {
    onClick() {
      this.$emit("clicked")
    }
  }
}
</script>
