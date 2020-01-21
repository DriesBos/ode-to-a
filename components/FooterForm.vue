<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="footerform">
    <div class="content-wrapper">
      <markdown :input="blok.text" />
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
    blok: Object
  }
}
</script>
