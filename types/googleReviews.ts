import { storyblokButton, storyblokHeadings } from "./storyblokMain";
export interface googleReview {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: false;
}

export interface storyblokReviewsSection {
  topActions: storyblokButton;
  bottomActions: storyblokButton;
  headings:storyblokHeadings[];
  buttons: storyblokButton[];
}
