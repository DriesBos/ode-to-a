<template>
  <!-- prettier-ignore -->
  <div class="theMoreInfo" :class="{ active: active }" @click="onClick()">
    <div class="theMoreInfo-Terms">
      <h3>{{ general[0].content.madeby_title }}</h3>
      <br>
      <markdown :input="general[0].content.madeby_text" />
    </div>
    <div class="theMoreInfo-Close">
      <h5>CLOSE</h5>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import JQuery from "jquery"
let $ = JQuery

export default {
  props: {
    active: Boolean
  },
  computed: {
    ...mapState({
      general: state => state.general.list
    })
  },
  mounted() {
    $(".theMoreInfo").on("mouseover", this.TermsCursor)
    $(".theMoreInfo").on("mouseleave", this.removeTermsCursor)
  },
  destroyed() {
    $(".theMoreInfo").off("mouseover", this.TermsCursor)
    $(".theMoreInfo").off("mouseleave", this.removeTermsCursor)
  },
  methods: {
    onClick() {
      this.$emit("clicked")
    },
    TermsCursor() {
      let cursor = document.querySelector(".cursor")
      cursor.classList.add("terms")
    },
    removeTermsCursor() {
      let cursor = document.querySelector(".cursor")
      cursor.classList.remove("terms")
    }
  }
}
</script>
