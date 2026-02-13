import rss from '@astrojs/rss';

export async function GET(context) {
  const posts = import.meta.glob('./blogs/*.md', { eager: true });
  
  const items = Object.entries(posts).map(([path, post]) => {
    // Extract the slug from the path (e.g., './blogs/fast-brew.md' -> 'fast-brew')
    const slug = path.split('/').pop().replace('.md', '');
    
    // Parse the date string (e.g., "December 29th, 2024" -> Date object)
    const dateStr = post.frontmatter.publishDate;
    const parsedDate = new Date(dateStr.replace(/(\d+)(st|nd|rd|th)/, '$1'));
    
    return {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      pubDate: parsedDate,
      link: `/blogs/${slug}/`,
    };
  });
  
  items.sort((a, b) => b.pubDate - a.pubDate);

  return rss({
    title: 'Port Flow Blog',
    description: 'My portfolio site where my blogs are stored',
    site: context.site,
    items,
    customData: `<language>en-us</language>`,
  });
}
