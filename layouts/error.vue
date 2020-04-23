<template>
  <div class="view view-Message">
    <!-- prettier-ignore -->
    <section class="textBlok fullscreen textCenter">
      <div class="markdown textBlok-Item textBlok-Main">
        <h1 class>TOO BAD</h1>
      </div>
      <div class="markdown textBlok-Item">
        <p>
          We can't find the page you're looking for.
          You can check out our
          <nuxt-link to="/brands">projects</nuxt-link>&nbsp;or feel out
          <nuxt-link to="/">vibe</nuxt-link>
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
