import { storyblokAsset, storyblokHeadings, storyblokButton } from "./storyblokMain";

export interface storyblokCarFacilities {
  bgAsset: storyblokAsset;
  headings: storyblokHeadings[];
  type: "home" | "packages" | "tour";
  buttons: storyblokButton[];
  fleetDetailCars:[];
  fleetDetailsCarTwos:[];
}

export interface FleetDetailCarCard {
    cardimage: storyblokAsset;
    headings: storyblokHeadings[];
    url: string;
    button: storyblokButton[];
  }
  export interface FleetCardDetail {
    bgAsset: storyblokAsset;
    headings: storyblokHeadings[];
    url: string;
    button: storyblokButton[];
  }