<script setup>
import LinkIcon from "./LinkIcon.vue";

defineProps({
  link: Object,
});
</script>

<template>
  <a :href="link.url" target="_blank" rel="noreferrer">
    <span>{{ link.title }}</span>
    <LinkIcon />
  </a>
</template>
