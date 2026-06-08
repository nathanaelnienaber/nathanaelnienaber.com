# nathanaelnienaber.com

Personal narrative site for [nathanaelnienaber.com](https://nathanaelnienaber.com).

A story-driven essay — not a résumé — with outbound links to [Attuned Holdings](https://attunedholdings.com), [tmrw](https://tmrw.it), and [studio.tmrw](https://studio.tmrw.it).

## Content

All narrative copy lives in [`src/content/site.ts`](src/content/site.ts) as `story.chapters` and `doors`. Edit chapters there without touching layout components.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3002](http://localhost:3002).

> Port 3000 is often used by other local projects (e.g. `attuned-search-os`). This repo uses **3002** by default.

## Deploy

Connect this repo to a **new** Vercel project at [vercel.com/new](https://vercel.com/new), then add the `nathanaelnienaber.com` domain when ready to go live.
