<template>
  <div class="markdown" v-html="compiledMarkdown" />
</template>

<script>
// https://marked.js.org/
const marked = require("marked")
// const renderer = new marked.Renderer()
marked.setOptions({
  renderer: new marked.Renderer(),
  breaks: true,
  gfm: true
})

export default {
  name: "MarkdownItem",
  props: {
    input: {
      type: String,
      required: true
    }
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input)
    }
  }
}
</script>

<style lang="sass">
.markdown
  a
    text-decoration: underline
</style>
