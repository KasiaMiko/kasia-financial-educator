import { Mail } from 'lucide-react'

import { ContactDialog } from '@/components/ContactDialog'
import { Button } from '@/components/ui/button'

export function ContactButton({
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
