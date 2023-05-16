<script setup>
import { useLinksStore } from "../stores/links";

const links = useLinksStore().links;
</script>

<template>
  <footer>
    <ul>
      <li v-for="link in links">
        <a :href="link.url">{{ link.title }}</a>
      </li>
    </ul>
  </footer>
</template>
