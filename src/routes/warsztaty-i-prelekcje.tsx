import { createFileRoute } from '@tanstack/react-router'

import { TalksPage } from '@/components/pages/TalksPage'
import { pageHead } from '@/i18n'

export const Route = createFileRoute('/warsztaty-i-prelekcje')({
  head: () => pageHead('pl', 'talks'),
  component: TalksPage,
})
