<template>
  <!-- prettier-ignore -->
  <section class="footerform">
    <div class="content-wrapper">
      <!-- <markdown :input="blok.text" /> -->
      <div class="markdown">
        <p>
          Let’s talk! Be bold, don’t be shy.
          We would love to have a moment with you.
        </p>
      </div>
      <form action>
        <input type="text" placeholder="NAME" />
        <input type="email" placeholder="EMAIL" />
        <input type="text" placeholder="CITY" />
        <input type="text" placeholder="FIRE AWAY" />
        <button>SEND</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    // blok: Object
  }
}
</script>
