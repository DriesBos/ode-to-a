<template>
  <!-- prettier-ignore -->
  <div class="theMoreInfo" :class="{ active: active }">
    <div class="theMoreInfo-Intro">
      <h3>Free to stop by at our office, we would love to meet!</h3>
    </div>
    <div class="theMoreInfo-Content">
      <h1>Ode to A</h1>
      <a
        href="https://www.google.com/maps/place/Ode+to+A/@52.3726791,4.884561,17z/data=!3m1!4b1!4m5!3m4!1s0x47c609e5a21203f5:0xd51aedf496f92576!8m2!3d52.3726791!4d4.8867497"
      >
        Herengracht 216
        <br />1016BS Amsterdam
      </a>
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
