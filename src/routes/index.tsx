import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, BookOpen, Code2, Mail, Plane } from 'lucide-react'

import { ContactDialog } from '@/components/ContactDialog'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
  component: Home,
})

const offers = [
  {
    title: 'Wystąpienia i prelekcje',
    text: 'Ciepłe, szczere wystąpienia o pieniądzach na konferencjach, w szkołach, na uczelniach i w kobiecych społecznościach.',
  },
  {
    title: 'Warsztaty',
    text: 'Praktyczne zajęcia o budżetowaniu, oszczędzaniu, podstawach inwestowania i zdrowym podejściu do pieniędzy.',
  },
  {
    title: 'Współprace',
    text: 'Partnerstwa z markami, organizacjami i twórcami, którzy chcą, by edukacja finansowa była dostępna dla każdego.',
  },
]

const interests = [
  {
    icon: Plane,
    title: 'Podróże',
    text: 'Zbieram miejsca, ludzi i historie — a każdą podróż planuję z budżetem.',
  },
  {
    icon: Code2,
    title: 'Nauka vibe codingu',
    text: 'Tworzę małe projekty z pomocą AI i ciekawości. Ta strona jest jednym z nich.',
  },
  {
    icon: BookOpen,
    title: 'Dużo czytam',
    text: 'Zawsze jestem w trakcie jakiejś książki — od finansów osobistych po beletrystykę.',
  },
]

function ContactButton({
  label = 'Napisz do mnie',
  variant = 'default',
}: {
  label?: string
  variant?: 'default' | 'outline'
}) {
  return (
    <ContactDialog
      trigger={
        <Button
          size="lg"
          variant={variant}
          className="h-12 rounded-full px-7 text-base"
        >
          <Mail aria-hidden />
          {label}
        </Button>
      }
    />
  )
}

function Home() {
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-content items-center justify-between px-6 py-6">
        <a href="/" className="font-display text-2xl tracking-tight">
          Finansowa Bestie
        </a>
        <ContactDialog
          trigger={
            <Button variant="ghost" className="rounded-full">
              Kontakt
            </Button>
          }
        />
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-content px-6 pt-16 pb-24 sm:pt-24 sm:pb-32">
          <p className="mb-6 text-sm font-medium tracking-[0.2em] text-accent-foreground uppercase">
            Edukatorka finansowa · Prelegentka
          </p>
          <h1 className="font-display text-6xl leading-[1.02] tracking-tight sm:text-8xl">
            Cześć, jestem Kasia.
            <br />
            <span className="text-muted-foreground italic">
              Twoja Finansowa Bestie.
            </span>
          </h1>
          <p className="mt-8 max-w-reading text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Pomagam młodym kobietom czuć się pewnie i spokojnie w sprawach
            pieniędzy — poprzez wystąpienia, warsztaty i szczere rozmowy o
            edukacji finansowej.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ContactButton label="Zaproś mnie na wystąpienie" />
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
            >
              Więcej o mnie <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-border">
          <div className="mx-auto grid max-w-content gap-10 px-6 py-20 md:grid-cols-[1fr_2fr]">
            <h2 className="font-display text-4xl">O mnie</h2>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Jestem edukatorką finansową i prelegentką, w sieci znaną jako{' '}
                <span className="text-foreground">Finansowa Bestie</span> —
                przyjaciółka, która mówi o pieniądzach tak, jak nikt nie mówił z
                nami w szkole: otwarcie, prosto i bez oceniania.
              </p>
              <p>
                Wierzę, że niezależność finansowa zaczyna się od wiedzy. Moją
                misją jest dać młodym kobietom narzędzia do budżetowania,
                oszczędzania, inwestowania i podejmowania decyzji, które pasują
                do życia, jakiego pragną.
              </p>
            </div>
          </div>
        </section>

        {/* Opportunities */}
        <section className="border-t border-border bg-secondary/50">
          <div className="mx-auto max-w-content px-6 py-20">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 text-sm font-medium tracking-[0.2em] text-accent-foreground uppercase">
                  Otwarta na współpracę
                </p>
                <h2 className="max-w-xl font-display text-4xl sm:text-5xl">
                  Edukujmy młode kobiety o pieniądzach — razem.
                </h2>
              </div>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
              {offers.map((offer, i) => (
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
          </div>
        </section>

        {/* Interests */}
        <section className="border-t border-border">
          <div className="mx-auto grid max-w-content gap-10 px-6 py-20 md:grid-cols-[1fr_2fr]">
            <h2 className="font-display text-4xl">Poza finansami</h2>
            <ul className="divide-y divide-border">
              {interests.map(({ icon: Icon, title, text }) => (
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
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-content px-6 py-24 text-center">
            <h2 className="mx-auto max-w-2xl font-display text-5xl leading-tight sm:text-6xl">
              Planujesz wydarzenie lub warsztaty?
            </h2>
            <p className="mx-auto mt-5 max-w-reading text-lg text-muted-foreground">
              Chętnie o tym usłyszę. Napisz do mnie i sprawmy razem, żeby
              rozmowy o pieniądzach były trochę mniej straszne.
            </p>
            <div className="mt-10 flex justify-center">
              <ContactButton />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <span className="font-display text-lg text-foreground">
            Kasia · Finansowa Bestie
          </span>
          <span>© 2026 Wszelkie prawa zastrzeżone.</span>
        </div>
      </footer>
    </div>
  )
}
