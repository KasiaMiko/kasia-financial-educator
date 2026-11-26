# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

The imported `AGENTS.md` above covers the stack, conventions, theme variables and full command list. This file only adds what it leaves out or what has changed since it was written.

## What this repo is

A one-page personal site for Kasia, also known as "Finansowa Bestie": a financial educator and speaker for young women. Polish is the main language. An English version under `/en` mirrors every page (see Architecture), and new copy needs both versions. The owner is learning to code, so explain changes in plain language and point to the file and line where the content lives.

## Zasady pracy (od właścicielki)

- **Pisz po polsku.** Odpowiedzi, plany i wyjaśnienia mają być po polsku.
- **Najpierw plan, potem zmiany.** Zanim zmienisz jakikolwiek plik, przedstaw krótki plan: co zmienisz i w których plikach. Zmiany wprowadzaj dopiero po akceptacji.
- **Bez reklam i bez mediów społecznościowych.** Nie dodawaj na stronę reklam ani publikacji z mediów społecznościowych (np. osadzonych postów). Nie publikuj też niczego w mediach społecznościowych.

`AGENTS.md` still describes `src/routes/index.tsx` as the whole page (in the overview) and as a "placeholder page to replace" (in the directory tree). Both are out of date. The Architecture section below is current.

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

- **Two languages (PL and EN).** All visible copy lives in `src/i18n/pl.ts` and `src/i18n/en.ts`, including page titles and descriptions for Google. `en.ts` is typed as `Dictionary`, so it must mirror `pl.ts` exactly. Every text change has to be made in both files.
- **Pages and routes.** Page layouts live in `src/components/pages/` (`HomePage`, `AboutPage`, `TalksPage`). They read their texts through `useT()` / `useLang()` from `@/i18n`, and the language comes from the URL. Route files are thin wrappers:
  - `src/routes/*.tsx` serve Polish at `/`, `/o-mnie` and `/warsztaty-i-prelekcje`.
  - `src/routes/en/*.tsx` serve English at the same slugs under `/en`.
  - To add a page, add a dictionary section, a page component, both route files and an entry in `paths` in `src/i18n/index.ts`. The language switcher and the menu use `paths`.
- **Shared chrome.** `SiteHeader` (menu and PL/EN switcher), `SiteFooter` and `ContactButton` are in `src/components/`. `__root.tsx` holds the HTML shell (`<html lang>` follows the URL), the default metadata and the Google Fonts `<link>`s.
- **Contact form (Netlify Forms) is split across two files that must stay in sync:**
  - `src/components/ContactDialog.tsx` renders the form in a Dialog. It POSTs URL-encoded data with `form-name=contact` to `/contact-form.html`, and shows the result with `sonner` toasts.
  - `public/contact-form.html` is a hidden static copy. Netlify only detects it at deploy time.
  - The form posts to `/contact-form.html` and not to `/` because the TanStack Start SSR catch-all would intercept `/`.
  - If you add, remove or rename a field, change it in both files. The fields are `name`, `email`, `organization`, `message` and the `bot-field` honeypot.
- **Theme.** The site follows the "Finansowa Bestie" design system (Design System artifact on claude.ai). Brand colors are defined in `:root` of `src/styles.css` under their Polish names (`krem`, `granat`, `morski`, `grafit`, `morela`, `poszetka`, `tekst-pomocniczy`) and are available as Tailwind classes (`bg-granat`, `text-morski`…). The shadcn variables map onto them. There is no dark mode. Headings and body text both use Plus Jakarta Sans. Cards have square corners; buttons and stickers are pills. Text on `morela` is always `granat`. Helper utilities: `prazek` (pinstripe background; never put text directly on it), `prazek-pasek`, `etykieta` (uppercase label), `naklejka` (sticker). `Logo` and `Disclaimer` live in `src/components/`.
- **Unused starter code.** `src/examples/`, most of `src/components/ui/` and `docs/` (forms, data-fetching) come from the starter template. They are references and are not part of the live page.
