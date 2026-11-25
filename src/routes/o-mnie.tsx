import { createFileRoute } from '@tanstack/react-router'

import { AboutPage } from '@/components/pages/AboutPage'
import { pageHead } from '@/i18n'

export const Route = createFileRoute('/o-mnie')({
  head: () => pageHead('pl', 'about'),
  component: AboutPage,
})
