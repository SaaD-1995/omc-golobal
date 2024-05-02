import { withLeadingSlash } from "ufo";
export function storyblokLink(link) {
  if (typeof link === "string") {
    return withLeadingSlash(link);
  }
  return link.linktype === "url"
    ? link.cached_url
    : withLeadingSlash(link.cached_url);
}
