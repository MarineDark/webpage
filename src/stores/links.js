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
        url: "https://github.com/MarineDark/marine-dark-terminals/blob/master/alacritty/marine-dark.yaml",
      },
      {
        title: "ST Patch",
        url: "https://github.com/MarineDark/marine-dark-terminals/blob/master/st/st-marine-dark-0.9.diff",
      },
      {
        title: "Xresources",
        url: "https://github.com/MarineDark/marine-dark-terminals/blob/master/xresources/Xresources",
      },
    ],
  }),
});
