# Kasia · Finansowa Bestie

A minimal, one-page personal site for Kasia — financial educator and public speaker known as **Finansowa Bestie** — who is open to opportunities to teach young women about financial literacy.

The page covers an introduction, an about section, the kinds of opportunities Kasia is open to (talks, workshops, collaborations), personal interests (traveling, learning to vibe code, reading), and a contact button that opens a contact form.

## Tech

- TanStack Start + React 19, Tailwind CSS 4, shadcn/ui components
- Netlify Forms for contact form submissions (view them in the Netlify dashboard under **Forms**)
- Fonts: Instrument Serif (headings) and Manrope (body) from Google Fonts

## Run locally

```bash
pnpm install
netlify dev    # or: pnpm dev (contact form submissions only work on Netlify / netlify dev)
```

## Editing content

All copy lives in `src/routes/index.tsx`. Colors and fonts are CSS variables in `src/styles.css`.
