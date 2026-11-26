import { useState, type FormEvent, type ReactNode } from 'react'
import { CheckCircle2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useT } from '@/i18n'

type State = 'idle' | 'pending' | 'success' | 'error'

export function ContactDialog({ trigger }: { trigger: ReactNode }) {
  const t = useT().contact
  const [open, setOpen] = useState(false)
  const [state, setState] = useState<State>('idle')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (state === 'pending') return
    const body = new URLSearchParams()
    new FormData(event.currentTarget).forEach((value, key) =>
      body.append(key, String(value)),
    )
    setState('pending')
    try {
      const response = await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok) throw new Error('Submission failed')
      const isUnprocessedRegistration = /\bdata-netlify\s*=/i.test(
        await response.text(),
      )
      if (isUnprocessedRegistration)
        throw new Error('Form handling unavailable')
      setState('success')
    } catch {
      setState('error')
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next)
        if (!next && state === 'success') setState('idle')
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="border-poszetka bg-krem sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-3xl leading-[1.15] font-extrabold tracking-[-0.02em] text-granat">
            {t.title}
          </DialogTitle>
          <DialogDescription>{t.description}</DialogDescription>
        </DialogHeader>

        {state === 'success' ? (
          <div
            role="status"
            className="flex flex-col items-center gap-3 py-8 text-center"
          >
            <CheckCircle2 className="size-10 text-morski" aria-hidden />
            <p className="text-2xl font-bold text-granat">{t.successTitle}</p>
            <p className="text-sm text-muted-foreground">{t.successText}</p>
            <Button
              variant="outline"
              className="mt-2"
              onClick={() => setOpen(false)}
            >
              {t.close}
            </Button>
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            action="/contact-form.html"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={submit}
            onChange={() => {
              if (state === 'error') setState('idle')
            }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                {t.honeypot}
                <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>
            <fieldset disabled={state === 'pending'} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="contact-name">{t.name}</Label>
                <Input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contact-email">{t.email}</Label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contact-org">
                  {t.organization}{' '}
                  <span className="text-muted-foreground">{t.optional}</span>
                </Label>
                <Input
                  id="contact-org"
                  name="organization"
                  autoComplete="organization"
                  maxLength={150}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contact-message">{t.message}</Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  maxLength={2000}
                />
              </div>
              {state === 'error' && (
                <p role="alert" className="text-sm text-destructive">
                  {t.error}
                </p>
              )}
              <Button type="submit" size="lg" className="h-12 text-base">
                {state === 'pending' ? t.sending : t.send}
              </Button>
            </fieldset>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
