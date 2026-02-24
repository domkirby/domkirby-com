# CLAUDE.md — domkirby.com (Astro Rebuild)

## Project Overview

Personal website and blog for Dom Kirby. Rebuilt from WordPress using Astro as a static site generator. Design mirrors the existing site at domkirby.com — dark navy + bright green branding, card-based blog layout.

## Tech Stack

- **Framework:** Astro
- **Styling:** Tailwind CSS
- **Content:** Markdown via Astro Content Collections
- **Deployment:** TBD (Netlify / Cloudflare Pages / GitHub Pages)

## Brand Colors

| Name | Hex |
|------|-----|
| Navy (primary bg) | `#0b1970` |
| Green (accent/logo) | `#7ed957` |
| White | `#ffffff` |
| Link blue | `#1025a1` |

## Project Structure

```
domkirby-astro/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/              # Global images, logo, etc.
│   ├── components/
│   │   ├── BaseHead.astro   # <head> meta, SEO, OG tags
│   │   ├── Header.astro     # Site nav
│   │   ├── Footer.astro     # Site footer
│   │   └── PostCard.astro   # Blog post card (used on home + blog index)
│   ├── content/
│   │   ├── config.ts        # Content collection schema definitions
│   │   └── posts/           # All blog posts live here (see Content Structure below)
│   ├── layouts/
│   │   ├── BaseLayout.astro # Wraps all pages — includes Header + Footer
│   │   └── PostLayout.astro # Wraps individual blog posts
│   └── pages/
│       ├── index.astro      # Home — recent posts grid
│       ├── blog/
│       │   └── index.astro  # Full blog listing / archive
│       ├── about.astro      # Bio / About Me
│       ├── contact.astro    # Contact page
│       └── tools.astro      # Tools and Stuff page
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── CLAUDE.md
```

## Content Structure (Posts)

Posts live in `src/content/posts/` organized by year, matching the original WordPress export structure:

```
src/content/posts/
├── 2023/
│   └── my-post-slug/
│       ├── index.md
│       └── images/
│           └── featured.jpg
├── 2024/
│   └── another-post/
│       ├── index.md
│       └── images/
└── 2025/
    └── latest-post/
        ├── index.md
        └── images/
```

### Post Frontmatter Schema

Frontmatter matches the WordPress export format as-is — no bulk editing of posts required.

```yaml
---
title: "My AI Assisted Blog Writing Workflow"
date: 2025-12-10
categories:
  - "ai"
  - "content"
tags:
  - "ai"
  - "blog"
  - "content"
  - "wordpress"
coverImage: "Gemini_DomBlogging.jpg"
---
```

- **`coverImage`** — filename only (e.g. `Gemini_DomBlogging.jpg`). The image lives in the post's `images/` subfolder. Resolve the full path in components as `./images/{coverImage}`.
- **`slug`** — derived from the folder name at build time, not stored in frontmatter.
- **`excerpt`** — not in frontmatter; generate from the first paragraph of post content in `PostCard.astro`.
- **`categories`** and **`tags`** — separate arrays of lowercase strings. Display categories as uppercase tags on cards (matching existing site style). Tags available for future filtering/search.
- **`draft`** — not currently in frontmatter; if needed, add as an optional field with a `false` default in the schema.

> **Note:** The content collection schema in `src/content/config.ts` validates this. If a field is missing or wrong type, the build will error with a clear message.

## Pages

Static pages live in `src/pages/` as `.astro` files. If a page is primarily text content (like About/Bio), it can be an `.md` file instead and Astro will render it automatically using the assigned layout.

Planned pages:

| Route | File | Notes |
|-------|------|-------|
| `/` | `pages/index.astro` | Recent posts grid, hero tagline |
| `/blog` | `pages/blog/index.astro` | Full post archive |
| `/blog/[slug]` | `pages/blog/[...slug].astro` | Dynamic post pages |
| `/about` | `pages/about.astro` | Bio page |
| `/contact` | `pages/contact.astro` | Contact info / form |
| `/tools` | `pages/tools.astro` | Tools and Stuff |

## Key Conventions

- **Images:** `coverImage` in frontmatter is a filename only. Resolve in components as `./images/{coverImage}` relative to the post folder. Astro's image optimization handles resizing/format conversion.
- **Slugs:** Derived from the folder name at build time — not stored in frontmatter.
- **Excerpts:** Not in frontmatter — generate from the first paragraph of post content in `PostCard.astro`.
- **Drafts:** Not currently in frontmatter. Add `draft: false` as an optional schema field with a default if needed.
- **Date format:** ISO 8601 (`YYYY-MM-DD`) in frontmatter. Display formatting handled in components.
- **Categories:** Lowercase strings in frontmatter, rendered uppercase on cards to match existing site style.
- **Tags:** Separate from categories. Available for future tag pages or filtering.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Production build to ./dist
npm run preview   # Preview production build locally
```

**Use the `grepika` tool when grepping for faster results with less tokens.

## Design Notes

- Nav links: Home, Blog, Store (external), About Me, Tools and Stuff, Contact
- Hero on home page: full-width navy bar with centered white tagline
- Post cards: 3-column grid, rounded featured image, blue linked title, date + categories, excerpt
- Store link opens externally (external link icon in nav)
- Keep it simple — the AI-generated post images carry the visual weight; the UI should stay clean and get out of the way
