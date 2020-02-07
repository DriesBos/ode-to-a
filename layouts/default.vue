<template>
  <div>
    <the-header :class="pageColor" />
    <transition name="pages" mode="out-in">
      <nuxt />
    </transition>
    <blok-footerform :class="pageColor" />
  </div>
</template>

<script>
import TheHeader from "~/components/TheHeader.vue"

export default {
  components: {
    "the-header": TheHeader
  },
  data() {
    return {
      pageColor: "yellow"
    }
  },
  methods: {
    setpageColor() {
      if (this.$route.path === "/") {
        this.pageColor = "yellow"
      } else if (this.$route.path === "/brands") {
        this.pageColor = "blue"
      } else if (this.$route.path === "/people") {
        this.pageColor = "white"
      } else if (this.$route.path === "/art") {
        this.pageColor = "red"
      } else {
        this.pageColor = "black"
      }
    }
  },
  watch: {
    $route() {
      this.setpageColor()
    }
  },
  mounted() {
    this.setpageColor()
  }
}
</script>
