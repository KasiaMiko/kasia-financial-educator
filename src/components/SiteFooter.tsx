import { useT } from '@/i18n'

export function SiteFooter() {
  const t = useT().footer

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <span className="font-display text-lg text-foreground">{t.name}</span>
        <span>{t.rights}</span>
      </div>
    </footer>
  )
}
