<template>
  <!-- prettier-ignore -->
  <div class="theMoreInfo" :class="{ active: active }">
    <div class="theMoreInfo-Intro">
      <h3>Free to stop by at our office, we would love to meet!</h3>
    </div>
    <div class="theMoreInfo-Content">
      <a href="https://goo.gl/maps/QnLbb1psM5Gdyw3e6">MEET US</a>
      <a href="tel:0031630108213">CALL US</a>
      <a href="https://www.instagram.com/odetoa__/">FOLLOW US</a>
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
