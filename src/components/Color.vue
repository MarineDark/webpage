<script setup>
defineProps({
  color: String,
});

const copyColorCode = (code) => {
  navigator.clipboard.writeText(code);
};
</script>

<template>
  <button @click="copyColorCode(color)">
    <span :style="`background: ${color}`"></span>
    <span>{{ color }}</span>
  </button>
</template>
