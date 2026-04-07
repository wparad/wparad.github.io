# wparad.github.io — Blog Project

Warren's personal blog. Articles written and published directly here.
See `_Strategy/AUTHOR.md` for the full writing voice, structure, and editorial standards — **read it before touching any article content**.

---

## Project structure

```
src/posts/<YYYY-MM-DD>-<slug>/
├── index.md          ← article (frontmatter + markdown)
├── post.png          ← social/OG image
└── *.png / *.gif     ← diagrams and assets
```

Frontmatter fields:
- `title`, `authors`, `description`, `image`, `image_alt`
- `hide_table_of_contents: false`, `toc_max_heading_level: 3`

---

## Article authoring rules (non-negotiable)

1. **Read `_Strategy/AUTHOR.md` before writing or editing any article content.**
2. **Warren's words are GOLD** — never rephrase, replace, or drop his prose without explicit approval. Present proposed changes in chat first.
3. **`{{ }}` blocks are instructions to Claude** — consume them and replace with fully written prose. Never preserve `{{ }}` in output.
4. **Always include plan links/references in the article** — if it's in the plan, it goes in the article. Warren edits out later; once omitted it's forgotten.
5. **Pull one problem at a time** — never batch article sections. Commit when each section is done.
6. **Ordering discipline** — work section by section in order. Never jump ahead while an earlier section is in progress.
7. **Check before asking** — if the answer is in the article file, read it first. Don't ask Warren what's already written.

---

## Commit convention

Claude-authored commits start with 🤖. No Co-Authored-By trailer. Commit messages explain WHY.
