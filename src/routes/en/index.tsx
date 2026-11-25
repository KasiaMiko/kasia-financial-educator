import { createFileRoute } from '@tanstack/react-router'

import { HomePage } from '@/components/pages/HomePage'
import { pageHead } from '@/i18n'

export const Route = createFileRoute('/en/')({
  head: () => pageHead('en', 'home'),
  component: HomePage,
})
