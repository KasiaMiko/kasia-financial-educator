import { ContactButton } from '@/components/ContactButton'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { useT } from '@/i18n'

export function AboutPage() {
  const t = useT().about

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        <article className="mx-auto max-w-content px-6 pt-16 pb-24 sm:pt-24">
          <p className="mb-6 text-sm font-medium tracking-[0.2em] text-accent-foreground uppercase">
            {t.eyebrow}
          </p>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight sm:text-7xl">
            {t.title}
          </h1>

          <div className="mt-10 max-w-reading space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>{t.p1}</p>
            <p className="font-display text-2xl leading-snug text-foreground sm:text-3xl">
              {t.quote}
            </p>
            <p>{t.p3}</p>
            <p>{t.p4}</p>
            <p>
              {t.p5} <span className="text-foreground">{t.welcome}</span>
            </p>
          </div>

          <div className="mt-12">
            <ContactButton />
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}
