import {
  Link,
  useRouter,
  type ErrorComponentProps,
} from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { dictionaries, paths, useLang } from '@/i18n'

export function NotFoundPage() {
  const lang = useLang()
  const t = dictionaries[lang].errors

  return (
    <main className="grid min-h-svh place-items-center px-6 py-16">
      <div className="max-w-md space-y-6 text-center">
        <p className="text-sm font-medium text-muted-foreground">404</p>
        <h1 className="text-3xl font-semibold tracking-tight">
          {t.notFoundTitle}
        </h1>
        <p className="text-muted-foreground">{t.notFoundText}</p>
        <Button asChild>
          <Link to={paths[lang].home}>{t.home}</Link>
        </Button>
      </div>
    </main>
  )
}

export function RouteErrorPage({ reset }: ErrorComponentProps) {
  const router = useRouter()
  const lang = useLang()
  const t = dictionaries[lang].errors

  return (
    <main className="grid min-h-svh place-items-center px-6 py-16">
      <div className="max-w-md space-y-6 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          {t.loadErrorTitle}
        </h1>
        <p role="alert" className="text-muted-foreground">
          {t.loadErrorText}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            onClick={() => {
              void router.invalidate()
              reset()
            }}
          >
            {t.retry}
          </Button>
          <Button variant="outline" asChild>
            <a href={paths[lang].home}>{t.home}</a>
          </Button>
        </div>
      </div>
    </main>
  )
}
