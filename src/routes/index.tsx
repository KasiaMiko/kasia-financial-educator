import { createFileRoute } from '@tanstack/react-router'

import { HomePage } from '@/components/pages/HomePage'
import { pageHead } from '@/i18n'

export const Route = createFileRoute('/')({
  head: () => pageHead('pl', 'home'),
  component: HomePage,
})
