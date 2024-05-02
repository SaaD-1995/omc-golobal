import { storyblokAsset, storyblokHeadings, storyblokButton } from "./storyblokMain";

export interface storyblokVehicleType {
  bgAsset: storyblokAsset;
  headings: storyblokHeadings[];
  type: "home" | "packages" | "tour";
  button: storyblokButton[];
}export interface VehicleTypeCard {
    bgImage: storyblokAsset;
    headings: storyblokHeadings[];
    cardLink: string;
    icon:storyblokAsset;
    subheadings:storyblokHeadings[];
  }