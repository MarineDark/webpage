<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import Screenshot from "./components/Screenshot.vue";
import ColorPalette from "./components/ColorPalette.vue";
</script>

<template>
  <main class="container">
    <TheHeader />
    <Screenshot />
    <ColorPalette />
  </main>

  <TheFooter />
</template>
