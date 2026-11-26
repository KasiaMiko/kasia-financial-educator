import { Disclaimer } from '@/components/Disclaimer'
import { Logo } from '@/components/Logo'
import { useT } from '@/i18n'

export function SiteFooter() {
  const t = useT().footer

  return (
    <footer>
      {/* Zastrzeżenie na kremowym tle, nad granatową stopką */}
      <div className="mx-auto max-w-content px-6 pt-12 pb-12">
        <Disclaimer />
      </div>

      {/* Granatowy pas w prążek z kremowym logotypem */}
      <div className="prazek">
        <div className="mx-auto max-w-content px-6 py-12">
          <Logo tone="dark" className="text-base" />
        </div>
      </div>
      <div className="bg-granat">
        <div className="mx-auto flex max-w-content flex-col justify-between gap-2 px-6 py-5 text-sm text-krem sm:flex-row">
          <span className="font-semibold">{t.name}</span>
          <span>{t.rights}</span>
        </div>
      </div>
    </footer>
  )
}
