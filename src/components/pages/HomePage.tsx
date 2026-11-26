import { Link } from '@tanstack/react-router'
import { ArrowRight, BookOpen, Code2, Plane } from 'lucide-react'

import { ContactButton } from '@/components/ContactButton'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { dictionaries, paths, useLang } from '@/i18n'

const interestIcons = [Plane, Code2, BookOpen]

const linkClass =
  'inline-flex items-center gap-2 font-bold text-morski underline-offset-4 hover:underline'

export function HomePage() {
  const lang = useLang()
  const t = dictionaries[lang].home

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-content px-6 pt-16 pb-24 sm:pt-24 sm:pb-32">
          <p className="mb-6 etykieta text-morski">{t.eyebrow}</p>
          <h1 className="font-display text-5xl leading-[0.95] font-extrabold tracking-[-0.03em] sm:text-6xl lg:text-[76px]">
            {t.titleLine1}
            <br />
            <span className="text-morski italic">{t.titleLine2}</span>
          </h1>
          <p className="mt-8 max-w-reading text-lg leading-relaxed">
            {t.intro}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <ContactButton label={t.invite} />
            <Link to={paths[lang].about} className={linkClass}>
              {t.moreAboutMe} <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-poszetka">
          <div className="mx-auto grid max-w-content gap-10 px-6 py-20 md:grid-cols-[1fr_2fr]">
            <h2 className="font-display text-3xl leading-[1.15] font-bold tracking-[-0.02em] sm:text-[32px]">
              {t.aboutTitle}
            </h2>
            <div className="space-y-5 text-lg leading-relaxed">
              <p>
                {t.aboutP1Before}
                <strong className="font-bold text-granat">
                  {t.aboutP1Highlight}
                </strong>
                {t.aboutP1After}
              </p>
              <p>{t.aboutP2}</p>
              <Link to={paths[lang].about} className={linkClass}>
                {t.readMoreAboutMe}{' '}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        {/* Opportunities */}
        <section className="border-t border-poszetka">
          <div className="mx-auto max-w-content px-6 py-20">
            <p className="mb-3 etykieta text-morski">{t.offersEyebrow}</p>
            <h2 className="max-w-xl font-display text-3xl leading-[1.15] font-bold tracking-[-0.02em] sm:text-[32px]">
              {t.offersTitle}
            </h2>
            <div className="mt-12 grid gap-px border border-poszetka bg-poszetka md:grid-cols-3">
              {t.offers.map((offer, i) => (
                <div key={offer.title} className="bg-bialy p-6 sm:p-8">
                  <span className="text-xl font-extrabold text-morski">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 text-2xl leading-[1.2] font-bold">
                    {offer.title}
                  </h3>
                  <p className="mt-2 leading-relaxed">{offer.text}</p>
                </div>
              ))}
            </div>
            <Link to={paths[lang].talks} className={`mt-8 ${linkClass}`}>
              {t.seeTopics} <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </section>

        {/* Interests */}
        <section className="border-t border-poszetka">
          <div className="mx-auto grid max-w-content gap-10 px-6 py-20 md:grid-cols-[1fr_2fr]">
            <h2 className="font-display text-3xl leading-[1.15] font-bold tracking-[-0.02em] sm:text-[32px]">
              {t.interestsTitle}
            </h2>
            <ul className="divide-y divide-poszetka">
              {t.interests.map(({ title, text }, i) => {
                const Icon = interestIcons[i] ?? BookOpen
                return (
                  <li
                    key={title}
                    className="flex gap-5 py-6 first:pt-0 last:pb-0"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full border-[1.5px] border-granat text-granat">
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-xl leading-[1.2] font-bold">
                        {title}
                      </h3>
                      <p className="mt-1 leading-relaxed">{text}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        {/* CTA: kremowa karta na granatowym prążku */}
        <section className="prazek">
          <div className="mx-auto max-w-content px-6 py-20 sm:py-24">
            <div className="mx-auto max-w-3xl bg-krem px-6 py-12 text-center sm:px-12">
              <h2 className="mx-auto max-w-2xl font-display text-4xl leading-[1.05] font-extrabold tracking-[-0.03em] sm:text-5xl">
                {t.ctaTitle}
              </h2>
              <p className="mx-auto mt-5 max-w-reading text-lg">{t.ctaText}</p>
              <div className="mt-10 flex justify-center">
                <ContactButton />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
