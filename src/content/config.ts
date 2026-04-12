import { defineCollection, z } from 'astro:content';

// ─── Publications ─────────────────────────────────────────────────────────────
const publications = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    journal: z.string(),
    year: z.number(),
    volume: z.string().optional(),
    pages: z.string().optional(),
    doi: z.string().optional(),
    link: z.string().url().optional(),
    notes: z.string().optional(), // e.g. "# equally contributed"
    highlight_author: z.string().optional(), // name to highlight, e.g. "Gworek, B."
  }),
});

// ─── Visuals ──────────────────────────────────────────────────────────────────
const visuals = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['scientific', 'film']),
    image: z.string(),            // path relative to /public, e.g. /images/film/photo-1.jpg
    thumbnail: z.string().optional(), // smaller version if available; falls back to image
    width: z.number().optional(),     // original image width (for PhotoSwipe)
    height: z.number().optional(),    // original image height (for PhotoSwipe)
    date: z.string().optional(),
    order: z.number().default(0),     // manual sort order within category
  }),
});

export const collections = { publications, visuals };
