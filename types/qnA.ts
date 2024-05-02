import { storyblokHeadings } from "./storyblokMain";
export interface qnA {
  heading: storyblokHeadings;
  body: storyblokHeadings;
  questions: qnAQuestion[];
}

export interface qnAQuestion {
  question: storyblokHeadings;
  answer: storyblokHeadings;
}
