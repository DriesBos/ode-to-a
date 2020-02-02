<template>
  <div>
    <the-header :class="headerColor" />
    <transition name="pages" mode="out-in">
      <nuxt />
    </transition>
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
      headerColor: "yellow"
    }
  },
  methods: {
    setHeaderColor() {
      if (this.$route.path === "/") {
        this.headerColor = "yellow"
      } else if (this.$route.path === "/brands") {
        this.headerColor = "blue"
      } else if (this.$route.path === "/people") {
        this.headerColor = "white"
      } else if (this.$route.path === "/art") {
        this.headerColor = "red"
      } else {
        this.headerColor = "black"
      }
    }
  },
  watch: {
    $route() {
      this.setHeaderColor()
    }
  },
  mounted() {
    this.setHeaderColor()
  }
}
</script>
