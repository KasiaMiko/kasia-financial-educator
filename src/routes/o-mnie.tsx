import { createFileRoute } from '@tanstack/react-router'

import { ContactButton } from '@/components/ContactButton'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'

const title = 'O mnie | Finansowa Bestie'
const description =
  'Kasia, czyli Finansowa Bestie: inżynierka, była menedżerka w IT i absolwentka Finansów Osobistych w SGH, która prosto tłumaczy, jak działają pieniądze.'

export const Route = createFileRoute('/o-mnie')({
  head: () => ({
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
    ],
  }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        <article className="mx-auto max-w-content px-6 pt-16 pb-24 sm:pt-24">
          <p className="mb-6 text-sm font-medium tracking-[0.2em] text-accent-foreground uppercase">
            O mnie
          </p>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight sm:text-7xl">
            Hej, jestem Kasia!
          </h1>

          <div className="mt-10 max-w-reading space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Od pierwszej pensji odkładałam część zarobków, bo marzyłam o
              niezależności finansowej. Brzmi rozsądnie? Też tak myślałam.
              Trochę za późno zrozumiałam, że samo oszczędzanie nie wystarczy,
              nawet przy dobrych zarobkach. Bez przemyślanego inwestowania
              oszczędności po cichu zjada inflacja.
            </p>
            <p className="font-display text-2xl leading-snug text-foreground sm:text-3xl">
              Dziś chcę być dla Ciebie osobą, której mi wtedy zabrakło: starszą
              koleżanką, która w prosty sposób tłumaczy, jak działają pieniądze,
              oszczędzanie i budowanie majątku.
            </p>
            <p>
              Z wykształcenia jestem inżynierką po Politechnice Wrocławskiej.
              Ponad 10 lat temu przebranżowiłam się do IT, gdzie budowałam
              zespoły i prowadziłam projekty. Najchętniej pracowałam w
              start-upach, w których naprawdę można coś zmienić. W 2026 roku
              ukończyłam studia podyplomowe z Finansów Osobistych w SGH, a teraz
              zgłębiam temat nieruchomości, ich sprzedaży i najmu.
            </p>
            <p>
              Krok po kroku, przez lata i z kilkoma błędami po drodze, doszłam
              do etapu tzw. Barista FIRE. To moment, w którym mogę wybierać
              pracę, która ma dla mnie sens, a nie tylko taką, która płaci
              rachunki.
            </p>
            <p>
              Najlepiej czuję się na żywo, na szkoleniach i warsztatach 😊 Po
              godzinach czytam książki i planuję kolejne podróże.{' '}
              <span className="text-foreground">Rozgość się!</span>
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
