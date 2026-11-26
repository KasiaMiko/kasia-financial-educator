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
        <article className="mx-auto max-w-content px-6 pt-16 pb-12 sm:pt-24">
          <p className="mb-6 etykieta text-morski">{t.eyebrow}</p>
          <h1 className="font-display text-5xl leading-none font-extrabold tracking-[-0.03em] sm:text-[56px]">
            {t.title}
          </h1>

          <div className="mt-10 max-w-reading space-y-6 text-lg leading-relaxed">
            <p>{t.p1}</p>
            <p className="text-2xl leading-[1.25] font-bold tracking-[-0.02em] text-granat sm:text-[28px]">
              {t.quote}
            </p>
            <p>{t.p3}</p>
            <p>{t.p4}</p>
            <p>
              {t.p5}{' '}
              <strong className="font-bold text-morski">{t.welcome}</strong>
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
