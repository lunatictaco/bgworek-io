# bgworek.io — Astro Portfolio

Personal portfolio site for Bryan Gworek: CV/bio, academic publications, and photography galleries.

## Stack

- [Astro](https://astro.build) — static site framework
- [Tailwind CSS](https://tailwindcss.com) — styling
- [Motion](https://motion.dev) — animations
- [PhotoSwipe](https://photoswipe.com) — image lightbox
- [Netlify](https://netlify.com) — hosting + forms

---

## Getting started

**Requires Node.js 18+** — install from https://nodejs.org

```bash
cd bgworek-astro
npm install
npm run dev       # http://localhost:4321
npm run build     # build for production
npm run preview   # preview the production build
```

---

## Adding content

### Add a publication

Create a new JSON file in `src/content/publications/`:

```json
// src/content/publications/paper-YEAR-slug.json
{
  "title": "Your Paper Title",
  "authors": "Last, F., Gworek, B., Other, A.",
  "journal": "Journal Name",
  "year": 2025,
  "volume": "10(2)",
  "pages": "123456",
  "doi": "10.xxxx/xxxx",
  "link": "https://doi.org/10.xxxx/xxxx",
  "notes": "# equally contributed",
  "highlight_author": "Gworek, B."
}
```

### Add an image to the gallery

1. Place the image file in `public/images/scientific/` or `public/images/film/`
2. Create a matching JSON file in `src/content/visuals/scientific/` or `src/content/visuals/film/`:

```json
// src/content/visuals/film/my-photo.json
{
  "title": "Photo Title",
  "description": "A short description shown in the lightbox.",
  "category": "film",
  "image": "/images/film/my-photo.jpg",
  "width": 1200,
  "height": 1600,
  "order": 5
}
```

- `width`/`height` should match the actual image dimensions (used by PhotoSwipe)
- `order` controls the sort order within the category (lower = first)

---

## Deploying to Netlify

1. Push this project to a GitHub repository
2. Go to [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import from Git"
3. Select your repository
4. Build command: `npm run build` | Publish directory: `dist`
5. Deploy!

To connect bgworek.io, go to **Domain settings** in Netlify and add your custom domain, then update your DNS records.

---

## Filling in your bio

Edit `src/pages/index.astro` — look for `<!-- PLACEHOLDER: ... -->` comments.
