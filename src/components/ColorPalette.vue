<script setup>
import Color from "./Color.vue";
import { useColorsStore } from "../stores/colors";

const colors = useColorsStore().palette;
</script>

<template>
  <section class="color-palette">
    <h2>Color Palette</h2>

    <div>
      <template v-for="color in colors" :key="color">
        <Color :color="color" />
      </template>
    </div>
  </section>
</template>
