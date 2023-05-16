import { defineStore } from "pinia";

export const useLinksStore = defineStore("links", {
  state: () => ({
    links: [
      {
        title: "VS Code",
        url: "https://github.com/MarineDark/marine-dark-vscode",
      },
      {
        title: "Alacritty",
        url: "https://github.com/ProDeSquare/alacritty-colorschemes/blob/master/themes/marine_dark.yaml",
      },
    ],
  }),
});
