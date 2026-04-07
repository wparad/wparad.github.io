import matter from 'gray-matter';

// Raw markdown for frontmatter parsing
const rawModules = import.meta.glob('../posts/*/index.md', { eager: true, query: '?raw', import: 'default' });
// Vue SFC components compiled by unplugin-vue-markdown
const vueModules = import.meta.glob('../posts/*/index.md', { eager: true });

const DATE_PREFIX = /^(\d{4}-\d{2}-\d{2})-/;

function slugify(text) {
  return text.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');
}

function extractToc(rawContent, fm) {
  if (fm.hide_table_of_contents) { return []; }
  const maxLevel = fm.toc_max_heading_level ?? 3;
  const content = matter(rawContent).content;
  const toc = [];
  let match;
  const re = /^(#{2,6})\s+(.+)$/gm;
  while ((match = re.exec(content)) !== null) {
    const depth = match[1].length;
    if (depth > maxLevel) { continue; }
    const text = match[2].replace(/\*\*(.+?)\*\*|`(.+?)`|\[(.+?)\]\(.+?\)/g, '$1$2$3').trim();
    toc.push({ id: slugify(text), text, depth });
  }
  return toc;
}

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
      toc: extractToc(rawModules[path], fm),
      component: vueModules[path].default,
    };
  })
  .filter(Boolean)
  .sort((a, b) => b.date.localeCompare(a.date)); // newest first
