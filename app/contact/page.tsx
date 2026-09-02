import type { Metadata } from 'next';
import { Clock3, Mail, MapPin } from 'lucide-react';

import { ContactForm } from '@/components/contact-form';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: 'Start Your Free Property Audit',
  description: 'Tell CoHaven about your short-term rental and request a complimentary property and listing audit.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-forest">
      <SiteHeader />
      <section className="hero-grid bg-forest px-5 py-16 text-cream sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-start lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> Complimentary property audit</p>
            <h1 className="mt-8 font-serif text-[clamp(3.8rem,7vw,7.2rem)] leading-[.88] tracking-[-.05em]">Let’s make hosting<br /><em className="text-gold">feel effortless.</em></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-cream/58">Share a little about your property and your goals. We’ll start with a considered review—no pressure, no generic sales script.</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <ContactDetail icon={Mail} label="Email" value="cohaven.str@gmail.com" />
              <ContactDetail icon={Clock3} label="Response" value="Within one business day" />
              <ContactDetail icon={MapPin} label="Based in" value="Pakistan · supporting remote markets" />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="section-shell bg-paper">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="section-kicker">What happens next</p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ['01', 'We review', 'Your property, market, current setup, and the goals you have shared.'],
              ['02', 'We talk', 'A focused conversation about the gaps, opportunities, and right service fit.'],
              ['03', 'You decide', 'A clear proposal with scope, pricing, and onboarding—without pressure.'],
            ].map(([number, title, body]) => <article className="rounded-3xl border border-forest/10 bg-background p-7 text-left" key={number}><span className="font-serif text-4xl text-gold">{number}</span><h2 className="mt-8 font-serif text-2xl">{title}</h2><p className="mt-3 text-sm leading-7 text-forest/52">{body}</p></article>)}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function ContactDetail({ icon: Icon, label, value }: { icon: typeof Mail; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4 border-b border-cream/10 pb-4"><span className="grid size-10 place-items-center rounded-full bg-gold/14"><Icon className="size-4 text-gold" /></span><div><p className="text-[10px] font-bold uppercase tracking-[.15em] text-cream/35">{label}</p><p className="mt-1 text-sm text-cream/72">{value}</p></div></div>
  );
}
