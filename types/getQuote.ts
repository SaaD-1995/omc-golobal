import { storyblokAsset, storyblokHeadings, storyblokButton } from "./storyblokMain";

export interface storyblokGetQuote {
  bgAsset: storyblokAsset;
  headings: storyblokHeadings[];
  type: "home" | "packages" | "tour";
  button: storyblokButton[];
}