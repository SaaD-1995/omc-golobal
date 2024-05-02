import {
  storyblokAsset,
  storyblokAction,
  storyblokMenuLink,
  storyblokButton,
} from "./storyblokMain";

export interface storyblokNavbar {
  logo: storyblokAsset;
  headerItems: storyblokMenuLink[];
  actions: storyblokAction;
  buttons:storyblokButton;
  url: string;
  logoSidebar: storyblokAsset;
  logo404:storyblokAsset;
  buttons404:storyblokButton[];
  number:text;
}
