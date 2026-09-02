'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div aria-live="polite" className="grid min-h-[520px] place-items-center rounded-[2rem] border border-forest/10 bg-paper p-8 text-center shadow-[0_28px_80px_rgba(23,56,45,.08)]">
        <div className="max-w-md">
          <CheckCircle2 className="mx-auto size-12 text-gold" />
          <h2 className="mt-6 font-serif text-4xl text-forest">Your enquiry is ready.</h2>
          <p className="mt-4 leading-7 text-forest/58">Thanks for sharing the details. Email us to begin the property audit and we’ll take it from there.</p>
          <a className="button-dark mt-7" href="mailto:cohaven.str@gmail.com?subject=CoHaven%20property%20audit">Email CoHaven <ArrowRight className="size-4" /></a>
          <button className="mt-5 block w-full text-xs font-bold uppercase tracking-[.14em] text-forest/45 hover:text-forest" onClick={() => setSubmitted(false)} type="button">Edit my details</button>
        </div>
      </div>
    );
  }

  return (
    <form className="rounded-[2rem] border border-forest/10 bg-paper p-6 shadow-[0_28px_80px_rgba(23,56,45,.08)] sm:p-9 lg:p-11" onSubmit={handleSubmit}>
      <FieldGroup>
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
        <button className="button-dark group mt-2 w-full sm:w-auto" type="submit">Prepare my enquiry <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></button>
        <p className="text-xs leading-5 text-forest/40">No commitment. We’ll use these details only to understand your property and shape the right next step.</p>
      </FieldGroup>
    </form>
  );
}
