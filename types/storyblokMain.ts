import { tour } from "./tour";
export type storyblokHeadings = {
  text: string;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  id: string;
  align: "left" | "center" | "right";
  size:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
  color:
    | "primary"
    | "secondary"
    | "white"
    | "black"
    | "textGray1"
    | "textGray2"
    | "textGray3"
    | "textGray4"
    | "text1"
    | "text2"
    | "text3"
    | "text4";
};

export interface storyblokAsset {
  id: 13700342;
  alt: string;
  name: string;
  title: string;
  source: string;
  filename: string;
  meta_data: object;

  is_external_url: boolean;
}

export interface storyblokMenuLink {
  label: string;
  link: {
    url: string;
    story: {
      name: string;
      slug: string;
      url: string;
    };
  };
}

export interface storyblokAction {
  label: string;
  link: string;
  size: "sm" | "md" | "lg";
  type: "primary" | "secondary" | "tertiary" | "icon";
  icon: storyblokAsset;
}

export interface storyblokButton {
  link: string;
  label: string;
  size: "sm" | "md" | "lg";
  type:
    | "primary"
    | "primaryOutlined"
    | "secondary"
    | "tertiary"
    | "text"
    | "icon";
  icon: storyblokAsset;
  rounded: "sm" | "md" | "lg" | "xl" | "full";
  buttons:storyblokButton[];
}

export interface popularTours {
  headings: storyblokHeadings[];
  tours: tour[];
}
