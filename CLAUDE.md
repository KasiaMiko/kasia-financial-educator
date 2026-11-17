# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

The imported `AGENTS.md` above covers the stack, conventions, theme variables and full command list. This file only adds what it leaves out or what has changed since it was written.

## What this repo is

A one-page personal site for Kasia, also known as "Finansowa Bestie": a financial educator and speaker for young women. All visible copy is in Polish (`lang="pl"`), and new copy should be Polish too. The owner is learning to code, so explain changes in plain language and point to the file and line where the content lives.

## Zasady pracy (od właścicielki)

- **Pisz po polsku.** Odpowiedzi, plany i wyjaśnienia mają być po polsku.
- **Najpierw plan, potem zmiany.** Zanim zmienisz jakikolwiek plik, przedstaw krótki plan: co zmienisz i w których plikach. Zmiany wprowadzaj dopiero po akceptacji.
- **Bez reklam i bez mediów społecznościowych.** Nie dodawaj na stronę reklam ani publikacji z mediów społecznościowych (np. osadzonych postów). Nie publikuj też niczego w mediach społecznościowych.

`AGENTS.md`'s directory tree still calls `src/routes/index.tsx` a "placeholder page to replace". That is out of date: it is now the real, finished page.

## Commands

The repo has a `pnpm-lock.yaml`, and the README uses pnpm. `npm run …` works the same way.

```bash
pnpm dev                       # Vite on :3000 (contact form won't submit; Netlify Forms is missing)
netlify dev                    # :8888 proxying Vite. Use this to test the contact form locally.
pnpm test                      # vitest run (jsdom, setup in src/test/setup.ts)
pnpm vitest run src/components/error-pages.test.tsx   # single test file
pnpm vitest run -t "name"      # tests matching a name
```

Before reporting completion, run build, typecheck, lint, format:check and test.

## Architecture worth knowing

- **Single route.** `src/routes/index.tsx` is the whole site. The `offers` and `interests` arrays at the top feed the repeated cards. The rest of the page is inline JSX sections (header, hero, about, offers, interests, CTA, footer). `__root.tsx` holds the HTML shell, the SEO metadata (`siteName`, `siteDescription`) and the Google Fonts `<link>`s.
- **Contact form (Netlify Forms) is split across two files that must stay in sync:**
  - `src/components/ContactDialog.tsx` renders the form in a Dialog. It POSTs URL-encoded data with `form-name=contact` to `/contact-form.html`, and shows the result with `sonner` toasts.
  - `public/contact-form.html` is a hidden static copy. Netlify only detects it at deploy time.
  - The form posts to `/contact-form.html` and not to `/` because the TanStack Start SSR catch-all would intercept `/`.
  - If you add, remove or rename a field, change it in both files. The fields are `name`, `email`, `organization`, `message` and the `bot-field` honeypot.
- **Theme.** The site uses only the light palette in `:root` of `src/styles.css`: warm off-white with a rose `--accent`. The `.dark` block is starter leftover and is never switched on. Headings use `font-display` (Instrument Serif); body text uses Manrope.
- **Unused starter code.** `src/examples/`, most of `src/components/ui/` and `docs/` (forms, data-fetching) come from the starter template. They are references and are not part of the live page.
