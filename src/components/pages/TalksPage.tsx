import { ContactButton } from '@/components/ContactButton'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useT } from '@/i18n'

// Naklejki są lekko przekrzywione (od −4° do +4°), na zmianę w lewo i w prawo.
const stickerTilt = ['-rotate-2', 'rotate-2']

export function TalksPage() {
  const t = useT().talks

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-content px-6 pt-16 pb-20 sm:pt-24">
          <p className="mb-6 etykieta text-morski">{t.eyebrow}</p>
          <h1 className="max-w-3xl font-display text-5xl leading-none font-extrabold tracking-[-0.03em] sm:text-[56px]">
            {t.titleStart}{' '}
            <span className="text-morski italic">{t.titleEnd}</span>
          </h1>
          <div className="mt-8 max-w-reading space-y-4 text-lg leading-relaxed">
            <p>{t.introP1}</p>
            <p>{t.introP2}</p>
          </div>
          <div className="mt-10">
            <ContactButton label={t.invite} />
          </div>
        </section>

        <section className="border-t border-poszetka">
          <div className="mx-auto max-w-content px-6 py-20">
            <h2 className="font-display text-3xl leading-[1.15] font-bold tracking-[-0.02em] sm:text-[32px]">
              {t.topicsTitle}
            </h2>
            <div className="mt-10 grid gap-6">
              {t.topics.map((topic, i) => (
                <article
                  key={topic.title}
                  className="grid gap-8 border border-poszetka bg-bialy p-6 sm:p-8 md:grid-cols-[2fr_1fr]"
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-extrabold text-morski">
                        0{i + 1}
                      </span>
                      <span
                        className={`naklejka bg-poszetka ${stickerTilt[i % 2]}`}
                      >
                        {topic.kind}
                      </span>
                    </div>
                    <h3 className="mt-4 text-2xl leading-[1.2] font-bold">
                      {topic.title}
                    </h3>
                    <p className="mt-3 leading-relaxed">{topic.text}</p>
                    <h4 className="mt-6 etykieta text-morski">
                      {t.outcomesLabel}
                    </h4>
                    <ul className="mt-3 list-disc space-y-1 pl-5 leading-relaxed marker:text-morski">
                      {topic.outcomes.map((outcome) => (
                        <li key={outcome}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                  <dl className="grid content-start gap-4 border-poszetka md:border-l md:pl-8">
                    {topic.details.map(({ label, value }) => (
                      <div key={label}>
                        <dt className="etykieta text-tekst-pomocniczy">
                          {label}
                        </dt>
                        <dd className="mt-1 font-semibold text-granat">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </article>
              ))}
            </div>
            <p className="mt-8 max-w-reading leading-relaxed">
              <strong className="font-bold text-granat">{t.combineLead}</strong>
              {t.combineRest}
            </p>
          </div>
        </section>

        <section className="border-t border-poszetka">
          <div className="mx-auto grid max-w-content gap-10 px-6 py-20 md:grid-cols-[1fr_2fr]">
            <h2 className="font-display text-3xl leading-[1.15] font-bold tracking-[-0.02em] sm:text-[32px]">
              {t.faqTitle}
            </h2>
            <Accordion type="multiple" className="border-t border-poszetka">
              {t.faq.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  value={`faq-${i}`}
                  className="border-poszetka"
                >
                  <AccordionTrigger className="py-5 text-base font-bold text-granat">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
                <ContactButton label={t.invite} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
