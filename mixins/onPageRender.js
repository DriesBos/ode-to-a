export default {
  watch: {
    $route() {
      this.changeFavicon()
    }
  },
  mounted() {
    this.changeFavicon()
  },

  methods: {
    changeFavicon() {
      var favicon = document.getElementById("favicon")
      if (this.$route.name === "brands" || this.$route.name === "brands-slug") {
        favicon.href = "icon-blue.svg"
      } else if (
        this.$route.name === "art" ||
        this.$route.name === "art-slug"
      ) {
        favicon.href = "icon-red.svg"
      } else if (this.$route.name === "people") {
        favicon.href = "icon-white.svg"
      } else if (this.$route.name === "index") {
        favicon.href = "icon-yellow.svg"
      } else {
        favicon.href = "icon.svg"
      }
    }
  }
}
