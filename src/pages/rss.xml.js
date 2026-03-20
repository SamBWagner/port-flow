import rss from '@astrojs/rss';
import { projects, parseDisplayDate } from '../data/homeContent';

export async function GET(context) {
  const posts = import.meta.glob('./blogs/*.md', { eager: true });

  const blogItems = Object.entries(posts).map(([path, post]) => {
    // Extract the slug from the path (e.g., './blogs/fast-brew.md' -> 'fast-brew')
    const slug = path.split('/').pop().replace('.md', '');

    // Parse the date string (e.g., "December 29th, 2024" -> Date object)
    const dateStr = post.frontmatter.publishDate;
    const parsedDate = parseDisplayDate(dateStr);

    return {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      pubDate: parsedDate,
      link: `/blogs/${slug}/`,
    };
  });

  const projectItems = projects.map((project) => ({
    title: project.title,
    description: project.summary.join(' '),
    pubDate: parseDisplayDate(project.releaseDate),
    link: project.liveUrl,
  }));

  const items = [...blogItems, ...projectItems];

  items.sort((a, b) => b.pubDate - a.pubDate);

  return rss({
    title: 'Port Flow Blog',
    description: 'My portfolio site where my blogs are stored',
    site: context.site,
    items,
    customData: `<language>en-us</language>`,
  });
}
