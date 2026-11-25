import { useRouterState } from '@tanstack/react-router'

import { en } from './en'
import { pl, type Dictionary } from './pl'

export type Lang = 'pl' | 'en'

export const dictionaries: Record<Lang, Dictionary> = { pl, en }

// Page addresses per language. The English version is prefixed with /en.
export const paths = {
  pl: { home: '/', about: '/o-mnie', talks: '/warsztaty-i-prelekcje' },
  en: {
    home: '/en',
    about: '/en/o-mnie',
    talks: '/en/warsztaty-i-prelekcje',
  },
} as const

export type PageKey = keyof (typeof paths)['pl']

const pageKeys = Object.keys(paths.pl) as PageKey[]

export function langFromPath(pathname: string): Lang {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'pl'
}

/** Which page the address points to, ignoring the language prefix. */
export function pageFromPath(pathname: string): PageKey {
  const trimmed = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  const lang = langFromPath(trimmed)
  return (
    pageKeys.find((key) => paths[lang][key] === trimmed) ?? ('home' as const)
  )
}

export function useLang(): Lang {
  return useRouterState({
    select: (state) => langFromPath(state.location.pathname),
  })
}

export function useT(): Dictionary {
  return dictionaries[useLang()]
}

/** <head> tags (title, description, sharing preview) for one page. */
export function pageHead(lang: Lang, page: PageKey) {
  const { title, description } = dictionaries[lang].meta[page]
  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:locale', content: lang === 'en' ? 'en_GB' : 'pl_PL' },
    ],
  }
}
