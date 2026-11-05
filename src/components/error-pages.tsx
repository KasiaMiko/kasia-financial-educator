import {
  Link,
  useRouter,
  type ErrorComponentProps,
} from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export function NotFoundPage() {
  return (
    <main className="grid min-h-svh place-items-center px-6 py-16">
      <div className="max-w-md space-y-6 text-center">
        <p className="text-sm font-medium text-muted-foreground">404</p>
        <h1 className="text-3xl font-semibold tracking-tight">
          Nie znaleziono strony
        </h1>
        <p className="text-muted-foreground">
          Ta strona nie istnieje. Sprawdź adres lub wróć na stronę główną.
        </p>
        <Button asChild>
          <Link to="/">Strona główna</Link>
        </Button>
      </div>
    </main>
  )
}

export function RouteErrorPage({ reset }: ErrorComponentProps) {
  const router = useRouter()

  return (
    <main className="grid min-h-svh place-items-center px-6 py-16">
      <div className="max-w-md space-y-6 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          Nie udało się załadować strony
        </h1>
        <p role="alert" className="text-muted-foreground">
          Spróbuj ponownie lub wróć na stronę główną.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            onClick={() => {
              void router.invalidate()
              reset()
            }}
          >
            Spróbuj ponownie
          </Button>
          <Button variant="outline" asChild>
            <a href="/">Strona główna</a>
          </Button>
        </div>
      </div>
    </main>
  )
}
