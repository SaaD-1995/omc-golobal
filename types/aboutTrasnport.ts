import { storyblokAsset, storyblokHeadings, storyblokButton } from "./storyblokMain";

export interface storyblokAboutTrasnport {
  bgAsset: storyblokAsset;
  headings: storyblokHeadings[];
  type: "home" | "packages" | "tour";
  buttons: storyblokButton[];
  aboutCards:[];
  colorHeadings:storyblokHeadings[];
}

export interface transportCard {
  bgAsset: storyblokAsset;
  headings: storyblokHeadings[];
  url: string;
  button: storyblokButton[];
}
