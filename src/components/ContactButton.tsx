import { Mail } from 'lucide-react'

import { ContactDialog } from '@/components/ContactDialog'
import { Button } from '@/components/ui/button'
import { useT } from '@/i18n'

export function ContactButton({
  label,
  variant = 'default',
}: {
  label?: string
  variant?: 'default' | 'outline'
}) {
  const t = useT().contact

  return (
    <ContactDialog
      trigger={
        <Button
          size="lg"
          variant={variant}
          className="h-12 rounded-full px-7 text-base"
        >
          <Mail aria-hidden />
          {label ?? t.button}
        </Button>
      }
    />
  )
}
