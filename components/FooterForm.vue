<template>
  <!-- prettier-ignore -->
  <section class="footerform">
    <div class="content-wrapper">
      <!-- <markdown :input="blok.text" /> -->
      <div class="markdown">
        <p>Let’s talk! Be bold, don’t be shy. We would love to have a moment with you.</p>
      </div>
      <form action>
        <input type="text" placeholder="NAME" />
        <input type="email" placeholder="EMAIL" />
        <input type="text" placeholder="CITY" />
        <input type="text" placeholder="FIRE AWAY" />
        <button>SEND
          <svg viewBox="0 0 46.65 37.7">
            <g data-name="Laag 2">
              <path d="M27.8,37.7H17.55l15.2-15H0V15H32.75L17.55,0H27.8L46.65,18.85Z" data-name="Laag 1"/>
            </g>
          </svg>
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {}
}
</script>
