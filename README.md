# domkirby.com

Personal website and blog for Dom Kirby. Built with [Astro](https://astro.build) and Tailwind CSS.

## Development

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Production build to ./dist
npm run preview   # Preview production build locally
```

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

#### 3. Mirror images to `public/`

Images are served from `public/`, so every image (cover or inline) must exist in **both** locations:

```
src/content/posts/2025/my-new-post/images/my-image.jpg   ← kept with the post
public/posts/2025/my-new-post/images/my-image.jpg        ← served at runtime
```

Copy them manually:

```bash
cp src/content/posts/2025/my-new-post/images/my-image.jpg \
   public/posts/2025/my-new-post/images/
```

Or copy everything at once after adding all images:

```bash
cp -r src/content/posts/2025/my-new-post/images/ \
      public/posts/2025/my-new-post/images/
```

#### 4. Add inline images in post content

Reference images in Markdown using a path relative to the `public/` root:

```markdown
![Alt text describing the image](/posts/2025/my-new-post/images/my-image.jpg)
```

The path always starts with `/posts/{year}/{slug}/images/` — matching where you copied the file in step 3. The prose styles in `PostLayout.astro` will automatically center and round the corners of inline images.

#### 5. Preview and publish

```bash
npm run dev
# Visit http://localhost:4321/blog/2025/my-new-post
```

Once it looks good, commit everything (the `src/content/posts/` entry **and** the `public/posts/` images) and deploy.

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
│   ├── config.ts        # Content collection schema
│   └── posts/           # Blog posts (organized by year)
├── layouts/
│   ├── BaseLayout.astro # Base page wrapper
│   └── PostLayout.astro # Individual post wrapper
└── pages/
    ├── index.astro      # Home page
    ├── about.astro
    ├── contact.astro
    ├── tools.astro
    └── blog/
        ├── index.astro       # Post archive
        └── [...slug].astro   # Dynamic post pages
```
