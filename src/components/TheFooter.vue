<script setup>
import Link from "./Link.vue";
import { useAppStore } from "../stores/app";
import { useLinksStore } from "../stores/links";

const app = useAppStore();
const links = useLinksStore().links;
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer>
    <ul>
      <li v-for="link in links">
        <Link :link="link" />
      </li>
    </ul>

    <p>
      &copy;
      <span v-if="currentYear != app.year_created"
        >{{ app.year_created }} -</span
      >
      {{ currentYear }} <a :href="app.repo">{{ app.title }}</a>
    </p>
  </footer>
</template>
