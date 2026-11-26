import { useT } from '@/i18n'

/**
 * Stałe zastrzeżenie z design systemu (komponent „Disclaimer”):
 * biała karta z ramką w kolorze poszetki i wąskim paskiem prążka po lewej.
 * Tekst jest w src/i18n/pl.ts i en.ts (sekcja footer).
 */
export function Disclaimer() {
  const t = useT().footer

  return (
    <p className="flex max-w-reading items-start gap-3.5 border border-poszetka bg-bialy px-4.5 py-4 text-sm leading-normal">
      <span aria-hidden className="prazek-pasek h-11 w-2.5 flex-none" />
      <span>
        <strong className="font-bold text-granat">{t.disclaimerLead}</strong>{' '}
        {t.disclaimerRest}
      </span>
    </p>
  )
}
