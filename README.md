# Jagadeeswaran — Portfolio v3

Personal site of Jagadeeswaran A R, product designer. Built with Vite + React + TypeScript and plain CSS (no UI framework).

## Run locally

```bash
npm install
npm run dev
```

## Edit content

Almost everything (bio, case studies, metrics, visuals, LinkedIn posts, links) lives in **`src/data.ts`**. Images are in `public/img/`, and the résumé is `public/Jagadeeswaran-Resume.pdf`.

- Years of experience are calculated automatically from `careerStart`.
- Add a `url` to any entry in `POSTS` to link that card to its own LinkedIn post.
- Colors and fonts are CSS variables at the top of `src/styles.css`. Light and dark themes are both defined there.

## Deploy

Import the repo on [Vercel](https://vercel.com/new). It detects Vite automatically (build: `npm run build`, output: `dist`). Then add your custom domain under **Project → Settings → Domains**.
