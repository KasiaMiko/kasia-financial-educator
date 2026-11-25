import { createFileRoute } from '@tanstack/react-router'

import { ContactButton } from '@/components/ContactButton'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const title = 'Warsztaty i prelekcje | Finansowa Bestie'
const description =
  'Prelekcje i warsztaty z finansów osobistych dla kobiet: o podwyżkach i inflacji stylu życia, funduszu awaryjnym i pierwszych krokach w inwestowaniu.'

export const Route = createFileRoute('/warsztaty-i-prelekcje')({
  head: () => ({
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
    ],
  }),
  component: TalksPage,
})

const topics = [
  {
    kind: 'Prelekcja',
    title: 'Zarabiasz więcej, a pieniędzy wcale nie przybywa?',
    text: 'Dlaczego wyższa pensja nie oznacza automatycznie zamożności i co zrobić, żeby podwyżki naprawdę pracowały na przyszłość.',
    details: [
      ['Czas i format', '30–45 min + Q&A, stacjonarnie lub online'],
      [
        'Dla kogo',
        'kobiety w IT i korporacjach, które dobrze zarabiają, ale nie widzą wzrostu majątku',
      ],
      ['Liczba osób', 'stacjonarnie 20–300+, online do 100+'],
    ],
    outcomes: [
      'zrozumienie, jak działa inflacja stylu życia',
      'prosty plan na każdą podwyżkę',
      'sposób na automatyzację oszczędzania',
    ],
  },
  {
    kind: 'Warsztat',
    title: 'Trzech muszkieterów Twoich finansów',
    text: 'Praktyczny warsztat o funduszu awaryjnym, poduszce bezpieczeństwa i funduszu celowym. Uczestniczki liczą na własnych liczbach, których nie muszą nikomu pokazywać.',
    details: [
      ['Czas i format', '2–2,5 h, najlepiej stacjonarnie (możliwy online)'],
      ['Dla kogo', 'początkujące, które chcą uporządkować finanse'],
      ['Liczba osób', 'stacjonarnie 8–20 (maks. 25), online 8–15'],
    ],
    outcomes: [
      'wyliczoną wysokość funduszu awaryjnego i poduszki',
      'listę większych wydatków na rok z miesięczną kwotą do odkładania',
      'ustawiony przelew automatyczny',
    ],
  },
  {
    kind: 'Warsztat',
    title: 'Oszczędzam i co dalej? Jak nie dać się zjeść inflacji',
    text: 'Dla kobiet, które mają oszczędności, ale trzymają je na koncie, bo inwestowanie wydaje się trudne albo straszne.',
    details: [
      ['Czas i format', '2 h, stacjonarnie lub online'],
      ['Dla kogo', 'osoby z oszczędnościami, które nie zaczęły jeszcze inwestować'],
      ['Liczba osób', 'stacjonarnie 10–30, online do 50'],
    ],
    outcomes: [
      'zrozumienie inflacji i procentu składanego',
      'podstawowe pojęcia: ryzyko, horyzont, dywersyfikacja, koszty, IKE/IKZE',
      'listę pytań przed pierwszą inwestycją i PDF ze słowniczkiem',
    ],
  },
]

const faq = [
  {
    q: 'Ile kosztuje prelekcja lub warsztat?',
    a: 'Wycena na zapytanie. Zależy od formatu, czasu trwania, liczby uczestniczek i tego, czy spotkanie odbywa się stacjonarnie, czy online. Napiszcie, co planujecie, a przygotuję ofertę.',
  },
  {
    q: 'Czy możesz dopasować temat do naszej publiczności?',
    a: 'Tak. Przed wydarzeniem robimy krótką rozmowę o Waszej grupie: kim są uczestniczki, na jakim są etapie i czego potrzebują. Na tej podstawie dopasowuję przykłady, długość i proporcje między teorią a praktyką. Tematy można też łączyć, np. prelekcja dla wszystkich i warsztat dla mniejszej grupy.',
  },
  {
    q: 'Jak wygląda współpraca i z jakim wyprzedzeniem rezerwować termin?',
    a: 'Najpierw ustalamy termin, format i szczegóły, potem dostajecie ofertę. Po jej akceptacji przesyłam bio, zdjęcie i opis wystąpienia do Waszej komunikacji. Przy warsztatach najlepiej odezwać się z co najmniej 4-tygodniowym wyprzedzeniem, żeby zdążyć przygotować materiały.',
  },
  {
    q: 'Czy prowadzisz zajęcia online i poza swoim miastem?',
    a: 'Tak. Każdy temat może odbyć się online, a warsztat „Trzech muszkieterów Twoich finansów” najlepiej działa na żywo. Przyjeżdżam też na wydarzenia w innych miastach; koszty dojazdu ustalamy w ramach wyceny.',
  },
  {
    q: 'Czy podczas zajęć polecasz konkretne inwestycje lub produkty finansowe?',
    a: 'Nie. Zajęcia mają charakter edukacyjny i nie są poradą inwestycyjną. Tłumaczę mechanizmy, pojęcia i nawyki, ale nie wskazuję konkretnych spółek, funduszy, kryptowalut ani instytucji finansowych.',
  },
  {
    q: 'Czego potrzebujesz od nas na miejscu i co dostaną uczestniczki?',
    a: 'Zwykle to rzutnik i mikrofon, a przy warsztatach stoliki do pracy i Wi-Fi. Szczegóły ustalamy przy wycenie. Uczestniczki warsztatów dostają karty pracy lub PDF z materiałami. Możliwość nagrywania wystąpienia ustalamy indywidualnie.',
  },
]

function TalksPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-content px-6 pt-16 pb-20 sm:pt-24">
          <p className="mb-6 text-sm font-medium tracking-[0.2em] text-accent-foreground uppercase">
            Warsztaty i prelekcje
          </p>
          <h1 className="max-w-3xl font-display text-5xl leading-[1.05] tracking-tight sm:text-7xl">
            Finanse osobiste{' '}
            <span className="text-muted-foreground italic">
              prosto, konkretnie i bez żargonu.
            </span>
          </h1>
          <div className="mt-8 max-w-reading space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Uczę kobiety, jak działają pieniądze, oszczędzanie i budowanie
              majątku. Mówię o finansach jak starsza koleżanka, czyli przekazuję
              to, co sama chciałabym usłyszeć 10–15 lat temu.
            </p>
            <p>
              Po moich zajęciach uczestniczki wychodzą z planem do wdrożenia, a
              nie tylko z notatkami.
            </p>
          </div>
          <div className="mt-10">
            <ContactButton label="Zaproś mnie" />
          </div>
        </section>

        <section className="border-t border-border bg-secondary/50">
          <div className="mx-auto max-w-content px-6 py-20">
            <h2 className="font-display text-4xl sm:text-5xl">Tematy</h2>
            <div className="mt-10 grid gap-6">
              {topics.map((topic, i) => (
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
                      Uczestniczki wyniosą
                    </h4>
                    <ul className="mt-3 list-disc space-y-1 pl-5 leading-relaxed marker:text-accent-foreground">
                      {topic.outcomes.map((outcome) => (
                        <li key={outcome}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                  <dl className="grid content-start gap-4 border-border md:border-l md:pl-8">
                    {topic.details.map(([label, value]) => (
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
                Tematy można łączyć,
              </span>{' '}
              np. prelekcja na scenie głównej i warsztat dla mniejszej grupy
              tego samego dnia. Program dopasuję do Waszej publiczności i czasu.
              Treści mają charakter edukacyjny i nie są poradą inwestycyjną.
            </p>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto grid max-w-content gap-10 px-6 py-20 md:grid-cols-[1fr_2fr]">
            <h2 className="font-display text-4xl">FAQ dla organizatorów</h2>
            <Accordion type="multiple" className="border-t border-border">
              {faq.map((item) => (
                <AccordionItem
                  key={item.q}
                  value={item.q}
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
              Porozmawiajmy o Twoim wydarzeniu
            </h2>
            <p className="mx-auto mt-5 max-w-reading text-lg text-muted-foreground">
              Napisz, co planujesz, a przygotuję propozycję dopasowaną do Twojej
              publiczności.
            </p>
            <div className="mt-10 flex justify-center">
              <ContactButton label="Zaproś mnie" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
