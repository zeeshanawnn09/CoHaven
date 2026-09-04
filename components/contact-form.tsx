'use client';

import { FormEvent, useState } from 'react';
import { AlertCircle, ArrowRight, CheckCircle2, LoaderCircle } from 'lucide-react';

import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const endpoint = window.location.hostname.endsWith('github.io')
      ? 'https://co-haven.co/api/contact'
      : '/api/contact';

    setStatus('sending');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('The enquiry could not be sent.');

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div aria-live="polite" className="grid min-h-[520px] place-items-center rounded-[2rem] border border-forest/10 bg-paper p-8 text-center shadow-[0_28px_80px_rgba(23,56,45,.08)]">
        <div className="max-w-md">
          <CheckCircle2 className="mx-auto size-12 text-gold" />
          <h2 className="mt-6 font-serif text-4xl text-forest">Your enquiry is on its way.</h2>
          <p className="mt-4 leading-7 text-forest/58">Thanks for sharing your property details. They’ve been sent directly to our inbox, and we’ll be in touch shortly.</p>
          <button className="button-dark mt-7" onClick={() => setStatus('idle')} type="button">Send another enquiry <ArrowRight className="size-4" /></button>
        </div>
      </div>
    );
  }

  return (
    <form className="rounded-[2rem] border border-forest/10 bg-paper p-6 shadow-[0_28px_80px_rgba(23,56,45,.08)] sm:p-9 lg:p-11" onSubmit={handleSubmit}>
      <FieldGroup>
        <div aria-hidden="true" className="absolute -left-[9999px]" tabIndex={-1}>
          <label htmlFor="company">Company</label>
          <input autoComplete="off" id="company" name="company" tabIndex={-1} />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field><FieldLabel htmlFor="name">Your name</FieldLabel><Input className="form-control" id="name" name="name" placeholder="Jane Smith" required /></Field>
          <Field><FieldLabel htmlFor="email">Email address</FieldLabel><Input className="form-control" id="email" name="email" placeholder="jane@example.com" required type="email" /></Field>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field><FieldLabel htmlFor="market">Property market</FieldLabel><Input className="form-control" id="market" name="market" placeholder="City or region" required /></Field>
          <Field><FieldLabel htmlFor="properties">Number of properties</FieldLabel><Input className="form-control" id="properties" min="1" name="properties" placeholder="1" required type="number" /></Field>
        </div>
        <Field>
          <FieldLabel htmlFor="support">What would you like help with?</FieldLabel>
          <select className="form-control" defaultValue="" id="support" name="support" required>
            <option disabled value="">Choose a service</option>
            <option>Co-hosting</option><option>Full property management</option><option>Portfolio partnership</option><option>Not sure yet</option>
          </select>
        </Field>
        <Field><FieldLabel htmlFor="message">Tell us about your property</FieldLabel><Textarea className="form-control min-h-32" id="message" name="message" placeholder="Where it is, where you are in your hosting journey, and what you’d most like to improve…" /></Field>
        <button className="button-dark group mt-2 w-full disabled:cursor-wait disabled:opacity-70 sm:w-auto" disabled={status === 'sending'} type="submit">
          {status === 'sending' ? <>Sending securely <LoaderCircle className="size-4 animate-spin" /></> : <>Send my enquiry <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></>}
        </button>
        {status === 'error' && (
          <p aria-live="polite" className="flex items-start gap-2 text-sm leading-6 text-red-700">
            <AlertCircle className="mt-1 size-4 shrink-0" /> We couldn’t send your enquiry just now. Please try again or email <a className="underline" href="mailto:zac@co-haven.co">zac@co-haven.co</a>.
          </p>
        )}
        <p className="text-xs leading-5 text-forest/40">No commitment. We’ll use these details only to understand your property and shape the right next step.</p>
      </FieldGroup>
    </form>
  );
}
