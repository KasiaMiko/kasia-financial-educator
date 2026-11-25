import { Link } from '@tanstack/react-router'

import { ContactDialog } from '@/components/ContactDialog'
import { Button } from '@/components/ui/button'

const navLinkClass =
  'rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground motion-reduce:transition-none'

export function SiteHeader() {
  return (
    <header className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-6">
      <Link to="/" className="font-display text-2xl tracking-tight">
        Finansowa Bestie
      </Link>
      <nav
        aria-label="Menu główne"
        className="-mx-3 flex flex-wrap items-center gap-1"
      >
        <Link to="/" activeOptions={{ exact: true }} className={navLinkClass}>
          Strona główna
        </Link>
        <Link to="/o-mnie" className={navLinkClass}>
          O mnie
        </Link>
        <Link to="/warsztaty-i-prelekcje" className={navLinkClass}>
          Warsztaty i prelekcje
        </Link>
        <ContactDialog
          trigger={
            <Button
              variant="ghost"
              className="rounded-full px-3 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Kontakt
            </Button>
          }
        />
      </nav>
    </header>
  )
}
