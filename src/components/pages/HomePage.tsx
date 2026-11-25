import { Link } from '@tanstack/react-router'
import { ArrowRight, BookOpen, Code2, Plane } from 'lucide-react'

import { ContactButton } from '@/components/ContactButton'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { dictionaries, paths, useLang } from '@/i18n'

const interestIcons = [Plane, Code2, BookOpen]

export function HomePage() {
  const lang = useLang()
  const t = dictionaries[lang].home

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-content px-6 pt-16 pb-24 sm:pt-24 sm:pb-32">
          <p className="mb-6 text-sm font-medium tracking-[0.2em] text-accent-foreground uppercase">
            {t.eyebrow}
          </p>
          <h1 className="font-display text-6xl leading-[1.02] tracking-tight sm:text-8xl">
            {t.titleLine1}
            <br />
            <span className="text-muted-foreground italic">
              {t.titleLine2}
            </span>
          </h1>
          <p className="mt-8 max-w-reading text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {t.intro}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ContactButton label={t.invite} />
            <Link
              to={paths[lang].about}
              className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
            >
              {t.moreAboutMe} <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-border">
          <div className="mx-auto grid max-w-content gap-10 px-6 py-20 md:grid-cols-[1fr_2fr]">
            <h2 className="font-display text-4xl">{t.aboutTitle}</h2>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                {t.aboutP1Before}
                <span className="text-foreground">{t.aboutP1Highlight}</span>
                {t.aboutP1After}
              </p>
              <p>{t.aboutP2}</p>
              <Link
                to={paths[lang].about}
                className="inline-flex items-center gap-2 text-base font-medium text-foreground underline-offset-4 hover:underline"
              >
                {t.readMoreAboutMe}{' '}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        {/* Opportunities */}
        <section className="border-t border-border bg-secondary/50">
          <div className="mx-auto max-w-content px-6 py-20">
            <p className="mb-3 text-sm font-medium tracking-[0.2em] text-accent-foreground uppercase">
              {t.offersEyebrow}
            </p>
            <h2 className="max-w-xl font-display text-4xl sm:text-5xl">
              {t.offersTitle}
            </h2>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
              {t.offers.map((offer, i) => (
                <div key={offer.title} className="bg-background p-8">
                  <span className="font-display text-xl text-accent-foreground italic">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{offer.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {offer.text}
                  </p>
                </div>
              ))}
            </div>
            <Link
              to={paths[lang].talks}
              className="mt-8 inline-flex items-center gap-2 text-base font-medium underline-offset-4 hover:underline"
            >
              {t.seeTopics} <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </section>

        {/* Interests */}
        <section className="border-t border-border">
          <div className="mx-auto grid max-w-content gap-10 px-6 py-20 md:grid-cols-[1fr_2fr]">
            <h2 className="font-display text-4xl">{t.interestsTitle}</h2>
            <ul className="divide-y divide-border">
              {t.interests.map(({ title, text }, i) => {
                const Icon = interestIcons[i] ?? BookOpen
                return (
                  <li
                    key={title}
                    className="flex gap-5 py-6 first:pt-0 last:pb-0"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">{title}</h3>
                      <p className="mt-1 leading-relaxed text-muted-foreground">
                        {text}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-content px-6 py-24 text-center">
            <h2 className="mx-auto max-w-2xl font-display text-5xl leading-tight sm:text-6xl">
              {t.ctaTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-reading text-lg text-muted-foreground">
              {t.ctaText}
            </p>
            <div className="mt-10 flex justify-center">
              <ContactButton />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
