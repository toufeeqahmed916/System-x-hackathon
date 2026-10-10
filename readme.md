# System X Hackathon 1.0

[![Live](https://img.shields.io/badge/Live-Website-brightgreen)](https://systemhackathon.netlify.app/)

Recap website for **System X Hackathon 1.0**, a 6-hour hackathon for teams of 2 to 4,
hosted by Computer Systems at MUET Jamshoro. Shows the winners, judges, gallery,
reviews and FAQ.

## Stack

React 19, Vite, Tailwind CSS 3. Fonts are self-hosted through Fontsource.
No animation library: scroll reveals use IntersectionObserver and CSS, and the gallery
rope runs on requestAnimationFrame.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in /dist
npm run preview   # preview the production build
```

## Editing content

Everything lives in `src/config/event.js`:

| What | Where |
|---|---|
| Date, venue, socials, prizes | `EVENT` |
| Winning teams, members, photos, demo links | `WINNERS` |
| Typed team reviews | `TESTIMONIALS` |
| Sticky note photos | `STICKY_NOTES` (files in `public/sticky-notes/`) |
| Gallery photos and videos | `GALLERY` (files in `public/gallery/`) |

Judges are listed at the top of `src/components/Judges.jsx`.
FAQ answers are in `src/components/FAQ.jsx`.

## Media guidelines

- Photos: JPG, about 1200 to 1400px wide, under 300 KB each.
- Judge photos: transparent WebP, 600x800.
- Videos: MP4 (H.264), 720p, under 10 MB each. Add an optional `poster` image.
- Link preview image: `public/og-image.jpg`, exactly 1200x630.

## SEO

`index.html` holds the title, description, Open Graph and Twitter tags and Event
structured data. `public/robots.txt` and `public/sitemap.xml` use the Netlify URL; update
them if the domain changes.

## Deploy

Netlify: build command `npm run build`, publish directory `dist`.
