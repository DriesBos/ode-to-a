<template>
  <header class="header">
    <nav>
      <ul v-if="showHeader" class="header-Desktop">
        <nuxt-link to="/" tag="li">A —</nuxt-link>
        <nuxt-link to="/brands" tag="li">For Brands</nuxt-link>
        <nuxt-link to="/people" tag="li">For People</nuxt-link>
        <nuxt-link to="/art" tag="li">For Art</nuxt-link>
      </ul>
      <ul v-if="this.$route.name === 'brands-slug'" class="header-Single">
        <nuxt-link to="/brands" tag="li">
          <!-- <svg viewBox="0 0 46.65 37.7">
            <g data-name="Laag 2">
              <path
                d="M27.8,37.7H17.55l15.2-15H0V15H32.75L17.55,0H27.8L46.65,18.85Z"
                data-name="Laag 1"
              />
            </g>
          </svg> -->
          <svg viewBox="0 0 49 41">
            <path
              d="M28.51,38.7 L16.83,38.7 L32,23.7 L0,23.7 L0,15 L32,15 L16.83,0 L28.51,0 L47.86,19.35 L28.51,38.7 Z M19.27,37.7 L28.09,37.7 L46.45,19.35 L28.09,1 L19.27,1 L34.47,16 L1,16 L1,22.7 L34.47,22.7 L19.27,37.7 Z"
              transform="translate(1.000000, 1.000000)"
              fill-rule="nonzero"
            />
          </svg>
          BACK
        </nuxt-link>
      </ul>
      <ul v-if="this.$route.name === 'art-slug'" class="header-Single">
        <nuxt-link to="/art" tag="li">
          <svg viewBox="0 0 46.65 37.7">
            <g data-name="Laag 2">
              <path
                d="M27.8,37.7H17.55l15.2-15H0V15H32.75L17.55,0H27.8L46.65,18.85Z"
                data-name="Laag 1"
              />
            </g>
          </svg>
          BACK
        </nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      showHeader: true
    }
  },
  watch: {
    $route() {
      if (
        this.$route.name === "brands-slug" ||
        this.$route.name === "art-slug"
      ) {
        this.showHeader = false
      } else {
        this.showHeader = true
      }
    }
  },
  mounted() {
    this.routeCheck()
  },
  methods: {
    routeCheck() {
      if (
        this.$route.name === "brands-slug" ||
        this.$route.name === "art-slug"
      ) {
        this.showHeader = false
      } else {
        this.showHeader = true
      }
    }
  }
}
</script>
