import { storyblokAsset, storyblokHeadings, storyblokButton } from "./storyblokMain";

export interface storyblokFeaturedServices {
  bgAsset: storyblokAsset;
  headings: storyblokHeadings[];
  type: "home" | "packages" | "tour";
  buttons: storyblokButton[];
  serviceCards:[];
  flexHeadings:storyblokHeadings[];
  colorHeadings:storyblokHeadings[];
  services:[];
  silderServiceCard:[];
  previmage:storyblokAsset;
  nextimage:storyblokAsset;
}
export interface ServiceCard {
  bgAssets: storyblokAsset;
  headings: storyblokHeadings[];
  url: string;
  buttons: storyblokButton[];
  name:string;
}