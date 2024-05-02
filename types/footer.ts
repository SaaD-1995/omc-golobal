import { storyblokAsset, storyblokMenuLink, storyblokButton } from "./storyblokMain";

export interface Footer {
  logo: storyblokAsset;
  numberText: string;
  whatsappNumber: string;
  emailText: string;
  email: string;
  linkText:string;
  documentText:string;
  privacyText:string;
  companyLinks: storyblokMenuLink[];
  socialMediaLinks: storyblokMenuLink[];
  actions:storyblokButton[];
  buttonInstas:storyblokButton[];
}
