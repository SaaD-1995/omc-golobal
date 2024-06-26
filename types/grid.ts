import { storyblokAsset, storyblokHeadings, storyblokButton } from "./storyblokMain";

export interface storyblokGrid {
  images: storyblokAsset;
  headings: storyblokHeadings[];
  type: "home" | "packages" | "tour";
  buttons: storyblokButton[];
  flexHeadings:storyblokHeadings[];
  colorHeadings:storyblokHeadings[];
  bottomHeadings:storyblokHeadings[];
  bodyHeadings:storyblokHeadings[];
  subHeadings:storyblokHeadings[];
}
