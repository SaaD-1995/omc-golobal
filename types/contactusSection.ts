import { storyblokAsset, storyblokHeadings, storyblokButton } from "./storyblokMain";

export interface storyblokContactusSection {
  bgAsset: storyblokAsset;
  headings: storyblokHeadings[];
  type: "home" | "packages" | "tour";
  button: storyblokButton[];
  cards:ContactCard[];
}
export interface ContactCard {
  icon: storyblokAsset;
  headings: storyblokHeadings[];
  url: string;
  button: storyblokButton[];
  iconHeadings:storyblokHeadings[];
}