<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="videoLandingItem">
    <iframe
      src="https://player.vimeo.com/video/48425421?app_id=122963"
      width="480"
      height="270"
      frameborder="0"
      allow="autoplay; fullscreen"
      background="true"
      byline="false"
      color="#ffffff"
      controls="false"
      fun="false"
      loop="true"
      muted="true"
      playsinline="true"
      portrait="false"
      title="false"
    ></iframe>"
    <div class="videoLandingItem-Text">
      <h1>{{ blok.vimeo_url }}</h1>"
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    console.log(this.blok)
  }
}
</script>

<style lang="sass">
.videoLandingItem
  position: relative
  border: 1px solid green
  iframe
    width: 100vw
    height: 100vh
    box-sizing: border-box
</style>
