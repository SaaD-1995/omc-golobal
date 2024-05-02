import { storyblokAsset, storyblokHeadings, storyblokButton } from "./storyblokMain";
export interface storyblokServiceSection {
  bgAsset: storyblokAsset;
  headings: storyblokHeadings[];
  type: "home" | "packages" | "tour";
  button: storyblokButton[];
  colorHeadings: storyblokHeadings[];
  flexHeadings: storyblokHeadings[];
}