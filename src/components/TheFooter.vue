<script setup>
import Link from "./Link.vue";
import { useLinksStore } from "../stores/links";

const links = useLinksStore().links;
</script>

<template>
  <footer>
    <ul>
      <li v-for="link in links">
        <Link :link="link" />
      </li>
    </ul>
  </footer>
</template>
