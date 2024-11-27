import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Noodles 麺ブログ',
    description: 'Noodlesは、月に2回サークル活動として、メンバー同士で麺屋に行って食事を行います。その活動の様子をブログやInstagram、X(旧:Twitter)にアップしています。また、ラーメンフェスや学祭での麵屋の出店も行っています。長期休暇期間には流しそうめんや鍋次郎、合宿を行います。',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>ja-jp</language>`,
  });
}