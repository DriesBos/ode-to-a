<template>
  <!-- prettier-ignore -->
  <div class="theMoreInfo" :class="{ active: active }">
    <div class="theMoreInfo-Intro">
      <h3>Free to stop by at our office, we would love to meet!</h3>
    </div>
    <div class="theMoreInfo-Content">
      <h1>
        ode to a
        <br />Herengracht 216
        <br />1016BS Amsterdam
      </h1>
    </div>
    <div class="theMoreInfo-Close">
      <h5 @click="onClick()">CLOSE</h5>
    </div>
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
