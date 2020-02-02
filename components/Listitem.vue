<template>
  <!-- prettier-ignore -->
  <section
    v-editable="blok"
    class="listitem"
    :class="{ smallsize: blok.small_type, fullscreen: blok.fullscreen }"
  >
    <div class="listitem-Graphic">
      <svg v-if="blok.number === '1'" viewBox="0 0 220 356.96">
        <g data-name="Laag 2">
          <!-- prettier-ignore -->
          <path
            d="M217.25,356.21v-213c0-12-7-16.5-18-11L.75,230.71v-120L219.25,1.21v355Z"
            fill="none"
            stroke
            stroke-miterlimit="10"
            stroke-width="1.5"
            data-name="Laag 1"
          />
        </g>
      </svg>
      <svg v-if="blok.number === '2'" viewBox="0 0 325.5 356.5">
        <g data-name="Laag 2">
          <path
            d="M144.25,353.75h180.5v2H.75c0-109.5,93-135,207.5-165.5l30-8c44.5-12,68-21,68-45,0-16.5-11-24.5-36-24.5h-227c-17,0-35.5,3-35.5,38h-2c0-89.5,64.5-150,169-150,96,0,150,49,150,111,0,46.5-30,57.5-87.5,73l-28,7.5c-71.5,19-84,67.5-84,140.5C125.25,346.75,129.75,353.75,144.25,353.75Z"
            fill="none"
            stroke
            stroke-miterlimit="10"
            stroke-width="1.5"
            data-name="Laag 1"
          />
        </g>
      </svg>
      <svg v-if="blok.number === '3'" viewBox="0 0 340 361.5">
        <g data-name="Laag 2">
          <path
            d="M66.75,181.75v-2h205.5c34,0,48.5-17.5,48.5-35.5,0-19.5-13.5-31.5-41.5-31.5h-241c-17,0-35.5,8-35.5,38h-2c0-89.5,61.5-150,180-150,91,0,158.5,44,158.5,115.5,0,31.5-20,59.5-53.5,64.5,33.5,5,53.5,33,53.5,64.5,0,71.5-68,115.5-158.5,115.5-118.5,0-180-60.5-180-150h2c0,30,18.5,38,35.5,38h241c28,0,41.5-12.5,41.5-32,0-18-14.5-35-48.5-35Z"
            fill="none"
            stroke
            stroke-miterlimit="10"
            stroke-width="1.5"
            data-name="Laag 1"
          />
        </g>
      </svg>
      <svg v-if="blok.number === '4'" viewBox="0 0 349.5 356.97">
        <g data-name="Laag 2">
          <path
            d="M235.75,1.22v227c0,14.5,7,19,21,19h92v2h-92c-14,0-21,4.5-21,19v88h-2v-88c0-14.5-7-19-21-19H.75v-130Zm-20,131-210,104c-6.5,3.5-3.5,11,1.5,11h205.5c14,0,21-4.5,21-19v-85C233.75,131.22,226.75,126.72,215.75,132.22Z"
            fill="none"
            stroke
            stroke-miterlimit="10"
            stroke-width="1.5"
            data-name="Laag 1"
          />
        </g>
      </svg>

      <svg v-if="blok.number === '5'" viewBox="0 0 336 356.5">
        <g data-name="Laag 2">
          <path
            d="M115.75,23.75v121c0,14,4.5,21,19,21h137c45.5,0,63.5,37,63.5,69.5,0,71.5-60.5,120.5-161.5,120.5-108.5,0-173-60.5-173-150h2c0,35,18.5,38,42.5,38h230c28,0,41.5-17.5,41.5-37,0-18-11-39-45-39H.75V.75h333.5v2H134.75C120.25,2.75,115.75,9.75,115.75,23.75Z"
            fill="none"
            stroke
            stroke-miterlimit="10"
            stroke-width="1.5"
            data-name="Laag 1"
          />
        </g>
      </svg>
    </div>
    <div class="listitem-Container">
      <h1>{{ blok.title }}</h1>
      <p>{{ blok.content }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    console.log(this.blok)
  }
}
</script>
