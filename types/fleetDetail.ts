import { storyblokAsset, storyblokHeadings, storyblokButton } from "./storyblokMain";

export interface storyblokFleetDetail {
  bgAsset: storyblokAsset;
  headings: storyblokHeadings[];
  type: "home" | "packages" | "tour";
  buttons: storyblokButton[];
  fleetCardDetailSilders:[];
  nextimage:storyblokAsset;
  previmage:storyblokAsset;
}
export interface FleetCardDetail {
  vehicleImage: storyblokAsset;
}
