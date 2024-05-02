import { storyblokAsset, storyblokHeadings, storyblokButton } from "./storyblokMain";

export interface storyblokServicesSection {
  bgAsset: storyblokAsset;
  headings: storyblokHeadings[];
  type: "home" | "packages" | "tour";
  button: storyblokButton[];
  servicesCard:[];
}
export interface ServiceCard {
  bgAssets: storyblokAsset;
  headings: storyblokHeadings[];
  url: string;
  buttons: storyblokButton[];
  name:string;
}