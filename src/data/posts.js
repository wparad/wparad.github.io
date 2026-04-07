import matter from 'gray-matter';

// Raw markdown for frontmatter parsing
const rawModules = import.meta.glob('../posts/*/index.md', { eager: true, query: '?raw', import: 'default' });
// Vue SFC components compiled by unplugin-vue-markdown
const vueModules = import.meta.glob('../posts/*/index.md', { eager: true });

const DATE_PREFIX = /^(\d{4}-\d{2}-\d{2})-/;

export const posts = Object.keys(rawModules)
  .map(path => {
    const dirName = path.split('/').at(-2); // "2025-03-18-meeting-impossible-slas"
    const match = dirName.match(DATE_PREFIX);
    if (!match) {return null;}
    const date = match[1]; // "2025-03-18"
    const slug = dirName.replace(DATE_PREFIX, ''); // "meeting-impossible-slas"
    const { data: fm } = matter(rawModules[path]);
    const wordCount = matter(rawModules[path]).content.trim().split(/\s+/).length;
    return {
      slug,
      date,
      title: fm.title ?? slug,
      description: fm.description ?? '',
      tags: fm.tags ?? [],
      image: fm.image ?? null,
      imageAlt: fm.image_alt ?? '',
      readingTime: Math.max(1, Math.round(wordCount / 250)),
      component: vueModules[path].default,
    };
  })
  .filter(Boolean)
  .sort((a, b) => b.date.localeCompare(a.date)); // newest first
