<script setup>
import { useAppStore } from "../stores/app";

const app = useAppStore();
</script>

<template>
  <header>
    <h1>{{ app.title }}</h1>

    <p>{{ app.about }}</p>
  </header>
</template>
