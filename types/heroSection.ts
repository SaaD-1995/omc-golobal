import { storyblokAsset, storyblokHeadings, storyblokButton } from "./storyblokMain";

export interface storyblokHeroSection {
  bgImage: storyblokAsset;
  headings: storyblokHeadings[];
  type: "home" | "packages" | "tour";
  button: storyblokButton[];
  flexHeadings:storyblokHeadings[];
  colorHeadings:storyblokHeadings[];
  bottomHeadings:storyblokHeadings[];
  bodyHeadings:storyblokHeadings[];
  icon:storyblokAsset;
  buttons:storyblokButton[];
}
