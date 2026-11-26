import { cn } from '@/lib/utils'

/**
 * Logotyp „bestie.” z design systemu Finansowej Bestie.
 * - tone="light": na jasnym tle (krem, biały) napis granatowy, „finansowa” morski.
 * - tone="dark": na granacie lub prążku napis kremowy, „finansowa” poszetka.
 * Kropka jest zawsze morelowa.
 */
export function Logo({
  tone = 'light',
  className,
}: {
  tone?: 'light' | 'dark'
  className?: string
}) {
  return (
    <span className={cn('inline-flex flex-col items-start', className)}>
      <span
        className={cn(
          'pl-[0.34em] text-[10px] leading-none font-bold tracking-[0.34em] uppercase',
          tone === 'light' ? 'text-morski' : 'text-poszetka',
        )}
      >
        finansowa
      </span>
      <span
        className={cn(
          'text-[2em] leading-none font-extrabold tracking-[-0.04em]',
          tone === 'light' ? 'text-granat' : 'text-krem',
        )}
      >
        bestie<span className="text-morela">.</span>
      </span>
    </span>
  )
}
