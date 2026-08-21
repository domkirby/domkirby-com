# domkirby.com

Personal website and blog for Dom Kirby. Built with [Astro](https://astro.build) and Tailwind CSS 4.

## Development

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Production build to ./dist
npm run preview   # Preview production build locally
```

## Search

Site-wide search is powered by [Pagefind](https://pagefind.app) — a static search
index built from the site's own HTML. There's no backend and no third-party service;
the index ships as static files alongside the rest of the site.

**The index is built automatically by `npm run build`.** The `build` script runs
`astro build && pagefind --site dist/client`, so the Pagefind step always runs against
the freshly built HTML. Nothing extra to remember when publishing.

> **Note:** `pagefind` is pointed at `dist/client`, not `dist`. The Cloudflare adapter
> emits static HTML into `dist/client/` and the worker into `dist/server/`, and the
> generated deploy config serves `dist/client` as the site root. Indexing `dist` would
> record every result URL with a `/client/` prefix and write the index outside the
> served asset root, so `/pagefind/` would 404 in production.

### Testing search locally

The index only exists in `dist/` — **`npm run dev` has no `/pagefind/` directory**, so
the search page will show a "search is unavailable" message there. That's expected. To
try search for real, build first:

```bash
npm run build && npm run preview
# Visit http://localhost:8787/search
```

`npm run preview` already runs `npm run build` for you, so a bare `npm run preview` is
enough — the two-step form above is just explicit about what's happening.

### What gets indexed

Pagefind only indexes elements marked with `data-pagefind-body`, and skips any page
without one:

| Location | Indexed |
|----------|---------|
| `src/layouts/PostLayout.astro` | Post title, date, categories and rendered markdown |
| `src/pages/about.astro`, `tools.astro`, `contact.astro` | The page's own `<section>` |
| Home, `/blog` archive pages, `/404`, `/search` | Not indexed — they only aggregate content indexed elsewhere |

Scoping this way keeps the `Header.astro` nav and `Footer.astro` text out of the index,
so site chrome never shows up as a match on every result.

**When adding a new page**, add `data-pagefind-body` to the element wrapping its content
if you want it searchable. Posts get it automatically from `PostLayout.astro`.

### The search page

`/search` (`src/pages/search.astro`) mounts Pagefind's default UI. It accepts a `?q=`
query parameter, so you can link to a pre-run search from anywhere on the site:

```html
<a href="/search?q=passkeys">Search for passkeys</a>
```

Pagefind's default styles are re-themed to the site's palette in a `<style is:global>`
block on that page, scoped under `#search` so the overrides can't leak into another
Pagefind instance added later.

## Adding a New Post

### Quick start — use the script

```bash
bash scripts/new-post.sh
```

The script prompts for title, date, slug, categories, tags, and an optional cover image filename. It creates the folder structure and a pre-filled `index.md`, then tells you exactly where to drop your images.

---

### Manual steps

#### 1. Create the post folder

Posts are organized by year. Create a new folder under `src/content/posts/{year}/` using a URL-friendly slug:

```
src/content/posts/2025/my-new-post/
├── index.md
└── images/
    └── cover-image.jpg
```

#### 2. Write the frontmatter

Open `index.md` and add the required frontmatter at the top:

```yaml
---
title: "My New Post Title"
date: 2025-06-15
categories:
  - "cybersecurity"
tags:
  - "tag-one"
  - "tag-two"
coverImage: "cover-image.jpg"
---

Your post content starts here...
```

**Frontmatter fields:**

| Field | Required | Notes |
|-------|----------|-------|
| `title` | Yes | Displayed as the page title and card heading |
| `date` | Yes | ISO 8601 format (`YYYY-MM-DD`) |
| `categories` | No | Lowercase strings; shown as uppercase tags on cards |
| `tags` | No | Lowercase strings; available for future filtering |
| `coverImage` | No | Filename only — image must live in the post's `images/` folder |

`coverImage` is validated at build time against the content schema (`src/content.config.ts`) — if the filename doesn't exist in the post's `images/` folder, `npm run build` will fail with a clear error instead of silently shipping a broken image. It's rendered through Astro's image pipeline (`astro:assets`), so it's automatically resized, converted to modern formats, and won't cause layout shift.

#### 3. Add inline images in post content

Just put the file in the post's `images/` folder and reference it with a path relative to `index.md`:

```markdown
![Alt text describing the image](images/my-image.jpg)
```

No need to copy anything to `public/` — Astro resolves and optimizes the image automatically at build time. The prose styles in `PostLayout.astro` will automatically center and round the corners of inline images.

#### 4. Preview and publish

```bash
npm run dev
# Visit http://localhost:4321/blog/my-new-post
```

Once it looks good, commit the `src/content/posts/` entry (images included) and deploy.

---

## Project Structure

```
scripts/
└── new-post.sh          # Post scaffolding script
src/
├── assets/              # Global images (logo, etc.)
├── components/
│   ├── BaseHead.astro   # <head> meta + SEO
│   ├── Header.astro     # Site navigation
│   ├── Footer.astro     # Site footer
│   └── PostCard.astro   # Blog post card
├── content/
│   └── posts/           # Blog posts (organized by year)
├── content.config.ts    # Content collection schema
├── layouts/
│   ├── BaseLayout.astro # Base page wrapper
│   └── PostLayout.astro # Individual post wrapper
├── styles/
│   └── global.css       # Tailwind CSS entrypoint and theme tokens
└── pages/
    ├── index.astro      # Home page
    ├── about.astro
    ├── contact.astro
    ├── search.astro     # Pagefind search UI
    ├── tools.astro
    └── blog/
        ├── [...page].astro   # Paginated post archive
        └── [...slug].astro   # Dynamic post pages
```
