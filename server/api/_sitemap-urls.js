import StoryblokClient from 'storyblok-js-client';
export default defineEventHandler(async (event) => {
    const storyblok = new StoryblokClient({ accessToken: process.env.STORYBLOK_ACCESS_TOKEN });
    const links = await storyblok.getAll('cdn/links', { version: 'draft' });
    const prefix = process.env.URL || "https://localhost:3000";
    const ignored = ['/config']; // any stories or folders you don't want to show up in the sitemap
    const sitemap = links
        .filter((link) => !link.is_folder && !ignored.some((ignore) => link.real_path.startsWith(ignore)))
        .map((link) => ({ loc: prefix + link.real_path }));
    return sitemap;
});
