# Tasks

Portfolio + project/lab space replacing the old Vite React site.

## Done

- [x] Tailwind v4 via `@tailwindcss/vite` (`src/styles/global.css`)
- [x] MDX via `@astrojs/mdx`
- [x] `projects` content collection (`src/content.config.ts`, schema in `src/schemas/project.ts`)
- [x] `@/*` → `src/*` path alias in `tsconfig.json`
- [x] Content folder at `content/projects/` (first entry: `home-tools/`)

## Next

- [ ] Import `src/styles/global.css` in a base layout (not loaded anywhere yet)
- [ ] Base layout (`src/layouts/`) with head, meta, nav
- [ ] Schema cleanup
  - [ ] Rename `content` → `description`/`summary` (MDX body is already the content)
  - [ ] `publishedDate`: `z.date()` → `z.coerce.date()`
  - [ ] `.default(false)` / `.default([])` on `published` / `tags`
  - [ ] Consider `status` (idea / wip / shipped / archived) and `links` (repo / live)
- [ ] Write `content/projects/home-tools/index.mdx`
- [ ] Project index page (`src/pages/projects/index.astro`) filtering out unpublished
- [ ] Project detail page (`src/pages/projects/[id].astro`) using `render(entry)`
- [ ] Initial git commit (repo has no commits yet)

## Design

Goal: a full Figma → code token pipeline, documented as a case study on the site itself.

```
Figma Variables → tokens.json (DTCG) → build script → src/styles/tokens.css (@theme) → Tailwind utilities → components
```

- [ ] Check Figma access: Dev Mode toggle (`</>`, Shift+D); apply for the Education plan if eligible
- [ ] Figma Variables first: colors (light/dark modes), type scale, spacing, radii
- [ ] Export tokens to `tokens.json` (Tokens Studio plugin, or Figma's JSON export). The Variables REST API is Enterprise-only.
- [ ] Optional: Tokens Studio → GitHub sync, so a token change opens a PR
- [ ] Build script (Style Dictionary or a custom one) generating `src/styles/tokens.css` with `@theme`
- [ ] Import `tokens.css` in `global.css`; light/dark via `prefers-color-scheme` / `data-theme`
- [ ] Optional: connect the Figma MCP server to Claude Code (needs a Dev or Full seat)
- [ ] Figma: pages for home, project index, project detail (maybe about / now)
- [ ] `/tokens` page: a live style guide rendered from the token file
- [ ] Case study post: `content/projects/xndr-live/index.mdx`, updated as the pipeline gets built

## Later / ideas

- [ ] `@astrojs/react` for interactive demos inside MDX (port bits from the old site)
- [ ] More collections under `content/` (notes, uses, now)
- [ ] Custom loader pulling GitHub repos into the lab

## Conventions

- Content lives in `content/<collection>/`, not `src/` or `public/`
- Per-post folders: `content/projects/<slug>/index.mdx` with images alongside
- Import from `src` using `@/…`
