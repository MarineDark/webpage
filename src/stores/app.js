import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    title: "Marine Dark",
    year_created: "2023",
    about: "Colorscheme inspired by deep marine hues, designed by ProDeSquare",
    repo: "https://github.com/MarineDark",
  }),
});
