import { Link, useRouterState } from '@tanstack/react-router'

import { ContactDialog } from '@/components/ContactDialog'
import { Button } from '@/components/ui/button'
import { dictionaries, pageFromPath, paths, useLang, type Lang } from '@/i18n'

const navLinkClass =
  'rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground motion-reduce:transition-none'

const languages: Lang[] = ['pl', 'en']

export function SiteHeader() {
  const lang = useLang()
  const t = dictionaries[lang].nav
  const p = paths[lang]
  const page = useRouterState({
    select: (state) => pageFromPath(state.location.pathname),
  })

  return (
    <header className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-6">
      <Link to={p.home} className="font-display text-2xl tracking-tight">
        Finansowa Bestie
      </Link>
      <div className="-mx-3 flex flex-wrap items-center gap-x-3 gap-y-2">
        <nav aria-label={t.label} className="flex flex-wrap items-center gap-1">
          <Link
            to={p.home}
            activeOptions={{ exact: true }}
            className={navLinkClass}
          >
            {t.home}
          </Link>
          <Link to={p.about} className={navLinkClass}>
            {t.about}
          </Link>
          <Link to={p.talks} className={navLinkClass}>
            {t.talks}
          </Link>
          <ContactDialog
            trigger={
              <Button
                variant="ghost"
                className="rounded-full px-3 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {t.contact}
              </Button>
            }
          />
        </nav>
        <div
          role="group"
          aria-label={t.language}
          className="flex items-center rounded-full border border-border p-0.5 text-xs font-semibold"
        >
          {languages.map((option) => (
            <Link
              key={option}
              to={paths[option][page]}
              hrefLang={option}
              lang={option}
              activeOptions={{ exact: true }}
              className="rounded-full px-2.5 py-1 text-muted-foreground transition-colors hover:text-foreground data-[status=active]:bg-primary data-[status=active]:text-primary-foreground motion-reduce:transition-none"
            >
              {option.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
