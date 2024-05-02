import {
  storyblokAsset,
  storyblokButton,
  storyblokHeadings,
} from "./storyblokMain";

export interface advantagesSection {
  bgImage: storyblokAsset;
  heading: storyblokHeadings;
  body: storyblokHeadings;
  advantageCards: advantageCard[];
}

export interface advantageCard {
  svg: String;
  heading: storyblokHeadings;
  body: storyblokHeadings;
}
