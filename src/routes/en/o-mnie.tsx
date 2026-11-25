import { createFileRoute } from '@tanstack/react-router'

import { AboutPage } from '@/components/pages/AboutPage'
import { pageHead } from '@/i18n'

export const Route = createFileRoute('/en/o-mnie')({
  head: () => pageHead('en', 'about'),
  component: AboutPage,
})
