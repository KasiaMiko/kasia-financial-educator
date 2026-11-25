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

export function TalksPage() {
  const t = useT().talks

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-content px-6 pt-16 pb-20 sm:pt-24">
          <p className="mb-6 text-sm font-medium tracking-[0.2em] text-accent-foreground uppercase">
            {t.eyebrow}
          </p>
          <h1 className="max-w-3xl font-display text-5xl leading-[1.05] tracking-tight sm:text-7xl">
            {t.titleStart}{' '}
            <span className="text-muted-foreground italic">{t.titleEnd}</span>
          </h1>
          <div className="mt-8 max-w-reading space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>{t.introP1}</p>
            <p>{t.introP2}</p>
          </div>
          <div className="mt-10">
            <ContactButton label={t.invite} />
          </div>
        </section>

        <section className="border-t border-border bg-secondary/50">
          <div className="mx-auto max-w-content px-6 py-20">
            <h2 className="font-display text-4xl sm:text-5xl">
              {t.topicsTitle}
            </h2>
            <div className="mt-10 grid gap-6">
              {t.topics.map((topic, i) => (
                <article
                  key={topic.title}
                  className="grid gap-8 rounded-2xl border border-border bg-background p-6 sm:p-8 md:grid-cols-[2fr_1fr]"
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="font-display text-3xl text-accent-foreground italic">
                        0{i + 1}
                      </span>
                      <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium tracking-[0.15em] text-accent-foreground uppercase">
                        {topic.kind}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-3xl leading-tight">
                      {topic.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {topic.text}
                    </p>
                    <h4 className="mt-6 text-xs font-medium tracking-[0.15em] text-accent-foreground uppercase">
                      {t.outcomesLabel}
                    </h4>
                    <ul className="mt-3 list-disc space-y-1 pl-5 leading-relaxed marker:text-accent-foreground">
                      {topic.outcomes.map((outcome) => (
                        <li key={outcome}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                  <dl className="grid content-start gap-4 border-border md:border-l md:pl-8">
                    {topic.details.map(({ label, value }) => (
                      <div key={label}>
                        <dt className="text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase">
                          {label}
                        </dt>
                        <dd className="mt-1">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              ))}
            </div>
            <p className="mt-8 max-w-reading leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">
                {t.combineLead}
              </span>
              {t.combineRest}
            </p>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto grid max-w-content gap-10 px-6 py-20 md:grid-cols-[1fr_2fr]">
            <h2 className="font-display text-4xl">{t.faqTitle}</h2>
            <Accordion type="multiple" className="border-t border-border">
              {t.faq.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  value={`faq-${i}`}
                  className="border-border"
                >
                  <AccordionTrigger className="py-5 text-base font-semibold">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-content px-6 py-24 text-center">
            <h2 className="mx-auto max-w-2xl font-display text-5xl leading-tight sm:text-6xl">
              {t.ctaTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-reading text-lg text-muted-foreground">
              {t.ctaText}
            </p>
            <div className="mt-10 flex justify-center">
              <ContactButton label={t.invite} />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
