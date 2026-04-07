// Raw markdown for word count and TOC extraction
const rawModules = import.meta.glob('../posts/*/index.md', { eager: true, query: '?raw', import: 'default' });
// Vue SFC components compiled by unplugin-vue-markdown (exportFrontmatter is on by default —
// each frontmatter key is a named export: title, description, tags, image, image_alt, etc.)
const vueModules = import.meta.glob('../posts/*/index.md', { eager: true });

const DATE_PREFIX = /^(\d{4}-\d{2}-\d{2})-/;
const FRONTMATTER_RE = /^---[\s\S]*?---\n*/;

function slugify(text) {
  return text.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');
}

function extractToc(body, mod) {
  if (mod.hide_table_of_contents) { return []; }
  const maxLevel = mod.toc_max_heading_level ?? 3;
  const toc = [];
  let match;
  const re = /^(#{2,6})\s+(.+)$/gm;
  while ((match = re.exec(body)) !== null) {
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
    const mod = vueModules[path];
    const body = rawModules[path].replace(FRONTMATTER_RE, '');
    const wordCount = body.trim().split(/\s+/).length;
    return {
      slug,
      date,
      title: mod.title ?? slug,
      description: mod.description ?? '',
      tags: mod.tags ?? [],
      image: mod.image ?? null,
      imageAlt: mod.image_alt ?? '',
      readingTime: Math.max(1, Math.round(wordCount / 250)),
      toc: extractToc(body, mod),
      component: mod.default,
    };
  })
  .filter(Boolean)
  .sort((a, b) => b.date.localeCompare(a.date)); // newest first
