<script setup>
defineProps({
  link: Object,
});
</script>

<template>
  <a :href="link.url">{{ link.title }}</a>
</template>
