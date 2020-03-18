<template>
  <div class="theMoreInfo" :class="{ active: active }">
    <div class="theMoreInfo-Intro">
      <h3>Follow us, we would love to stay in touch!</h3>
    </div>
    <div class="theMoreInfo-Content">
      <a href="www.instagram.com">INSTAGRAM</a>
      <a href="www.twitter.com">TWITTER</a>
    </div>
    <div class="theMoreInfo-Close">
      <h4 @click="onClick()">CLOSE</h4>
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
