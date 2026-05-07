import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return rss({
    title: 'R. F. Costa — Blog',
    description: "Long-form notes on data pipelines, statistics, Linux, and master's coursework.",
    site: context.site!,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => {
        const slashIdx = post.slug.indexOf('/');
        const lang     = post.slug.slice(0, slashIdx);
        const bareSlug = post.slug.slice(slashIdx + 1);
        return {
          title:       post.data.title,
          description: post.data.description,
          pubDate:     post.data.pubDate,
          link:        `/${lang}/blog/${bareSlug}/`,
          customData:  `<language>${lang === 'pt' ? 'pt-BR' : 'en-US'}</language>`,
        };
      }),
  });
}
