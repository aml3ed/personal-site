<template>
  <div class="relative">
    <div class="absolute bottom-2 left-0">
      <svg
        id="clapper"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 203.46 253.23"
        height="100%"
        width="2rem"
        fill="currentColor"
      >
        <g id="bottom-clapper">
          <path
            d="M203.32,250.24q.06-65.13.14-130.26v-3.64l-171.71-.18v-.11l-16.91-.15c.06.5.11,1,.13,1.51l-.15,132.35c0,1.09-.15,2.17-.23,3.26l188.63.21C203.25,252.24,203.31,251.23,203.32,250.24Zm-160.69-127L30.09,135.66c-3.93,3.9-3.93,3.9-9.91,3.34l0-17.73,24,0C43.55,122.07,43.14,122.68,42.63,123.19ZM88.68,138.4a3,3,0,0,1-1.82.84q-12.48,0-25,0l-.52-.74C65,135,69.09,131.85,72.25,128c4.44-5.44,9.58-7.71,16.66-6.88,5.33.62,10.79.13,16.19.14l.45.88Q97.15,130.29,88.68,138.4Zm58.65,0a3.38,3.38,0,0,1-2.09.89c-7.32,0-14.64,0-22.81,0,3.32-3.3,6.09-6.08,8.9-8.84,3.07-3,5.68-7.16,9.38-8.7s8.51-.46,12.83-.49h10.18l.42.82C158.55,127.56,153,133,147.33,138.41Zm35.12.79,16-15.66,0,15.67Z"
          />
        </g>
        <g id="top-clapper">
          <path
            d="M31,115.31l172.27.59c0-9.34,0-18.46,0-27.87L14.89,87.37c0,7.27,0,14.22,0,21.18a15.32,15.32,0,0,1-.09,2.14L31,115.43ZM198.28,93.53c0,6.19.05,11.63.07,17.38H180.81Zm-58.72,0a2.53,2.53,0,0,1,1.56-.71c7.48,0,15,0,23.21,0-6.15,6.12-11.82,11.71-17.5,17.26a2.48,2.48,0,0,1-1.6.62c-7.4,0-14.8,0-23,0C128.39,104.62,134,99.06,139.56,93.54Zm-61.5,0a3.38,3.38,0,0,1,2.07-1c8.31,0,16.61.06,25.61.11C99.62,98.73,94,104.36,88.32,109.92a3,3,0,0,1-1.9.71c-8.23,0-16.46,0-25.5-.09C67,104.49,72.51,99,78.06,93.53ZM26.87,109.62c-1.37,1.23-4.31.75-7,1.13L19.8,92.4l24.66.13C38.28,98.62,32.78,104.36,26.87,109.62Z"
          />
        </g>
      </svg>
    </div>
    <h2 class="leading-0.75 ml-13">
      <a
        :href="link"
        :class="[noLink ? '' : 'wave-border', 'bottom inline-block']"
      >
        video producer</a
      >
    </h2>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { gsap } from "gsap";

export default Vue.extend({
  props: {
    noLink: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    link() {
      return this.noLink ? null : "#video";
    }
  },
  mounted() {
    const timeline = gsap.timeline({ repeat: -1 });
    timeline
      .set("#clapper", { y: 2, rotate: -20 })
      .set("#top-clapper", { transformOrigin: "bottom left" })
      .to("#top-clapper", { rotate: -20, duration: 1 })
      .to("#clapper", { y: 0, duration: 1 }, "<")
      .to("#top-clapper", { rotate: 0, duration: 0.6, ease: "power3.in" });
  }
});
</script>

<style scoped></style>
