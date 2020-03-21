<template>
  <div class="view view-Message">
    <!-- prettier-ignore -->
    <section class="textBlok fullscreen textCenter">
      <div class="markdown textBlok-Item textBlok-Main">
        <h1 class>404 ERROR</h1>
      </div>
      <div class="markdown textBlok-Item">
        <p>
          Oops, sorry we can't find that page!
          <br />Check our
          <nuxt-link to="/brands">projets</nuxt-link>or feel our vibe
          <nuxt-link to="/">homepage</nuxt-link>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "404 ERROR",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Oops, sorry we can't find that page!"
        }
      ]
    }
  }
}
</script>
