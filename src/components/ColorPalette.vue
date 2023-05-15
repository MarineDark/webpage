<script setup>
import { useColorsStore } from "../stores/colors";

const colors = useColorsStore().palette;
</script>

<template>
  <section class="color-palette">
    <h2>Color Palette</h2>

    {{ colors }}
  </section>
</template>
