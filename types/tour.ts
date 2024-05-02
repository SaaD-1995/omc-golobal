import { storyblokAsset, storyblokHeadings } from "./storyblokMain";

export interface tour {
  name: storyblokHeadings;
  description: storyblokHeadings;
  img: storyblokAsset;
  price: string;
  id: string;
  link: string;
  tags: tag[];
}

export interface tag {
  title: string;
}
