import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({
    base: './src/content/posts',
    pattern: '**/index.md',
    generateId: ({ entry }) => entry.replace(/\/index\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };