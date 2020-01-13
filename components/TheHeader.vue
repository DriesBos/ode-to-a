<template>
  <header>
    <nav>
      <ul>
        <nuxt-link to="/" tag="li">A —</nuxt-link>
        <nuxt-link to="/brands" tag="li">For Brands</nuxt-link>
        <nuxt-link to="/people" tag="li">For People</nuxt-link>
        <nuxt-link to="/art" tag="li">For Art</nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>
