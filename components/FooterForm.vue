<template>
  <!-- prettier-ignore -->
  <section class="footerform">
    <div class="content-wrapper">
      <!-- <markdown :input="blok.text" /> -->
      <div class="markdown">
        <p>Let’s talk! Be bold, don’t be shy. We would love to have a moment with you.</p>
      </div>
      <form name="contact" method="post" action="/succes" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" placeholder="NAME" />
        <input type="email" name="email" placeholder="EMAIL" />
        <input type="text" name="city" placeholder="CITY" />
        <input type="text" name="message" placeholder="FIRE AWAY" />
        <div class="footerform-Buttons">
          <button type="submit">SEND
            <svg viewBox="0 0 46.65 37.7">
              <g data-name="Laag 2">
                <path d="M27.8,37.7H17.55l15.2-15H0V15H32.75L17.55,0H27.8L46.65,18.85Z" data-name="Laag 1"/>
              </g>
            </svg>
          </button>
          <h4 @click="toggleItem">INFO</h4>
        </div>
      </form>
    </div>
    <the-more-info @clicked="toggleItem" :active="isOpen"/>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleItem() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
