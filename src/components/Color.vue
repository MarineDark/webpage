<script setup>
defineProps({
  color: String,
});
</script>

<template>
  <button>
    <span :style="`background: ${color}`"></span>
    <span>{{ color }}</span>
  </button>
</template>
