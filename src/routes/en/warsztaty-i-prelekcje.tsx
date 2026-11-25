import { createFileRoute } from '@tanstack/react-router'

import { TalksPage } from '@/components/pages/TalksPage'
import { pageHead } from '@/i18n'

export const Route = createFileRoute('/en/warsztaty-i-prelekcje')({
  head: () => pageHead('en', 'talks'),
  component: TalksPage,
})
