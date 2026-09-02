import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Eye, HeartHandshake, LineChart, Sparkles } from 'lucide-react';

import { FAQList } from '@/components/faq-list';
import { SectionHeading } from '@/components/section-heading';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'About & How It Works',
  description: 'Learn how CoHaven combines hospitality, operations, and revenue strategy to make short-term rental ownership effortless.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-forest">
      <SiteHeader />
      <section className="page-hero hero-grid bg-forest text-cream">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> The CoHaven approach</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_.62fr] lg:items-end">
            <h1 className="font-serif text-[clamp(3.8rem,8vw,8rem)] leading-[.87] tracking-[-.055em]">Care you can feel.<br /><em className="text-gold">Clarity you can see.</em></h1>
            <p className="max-w-xl text-lg leading-8 text-cream/60">CoHaven was built for property owners who want hospitality to feel personal—and operations to run with quiet precision.</p>
          </div>
        </div>
      </section>

      <section className="section-shell bg-paper">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-24">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[45%_45%_1.5rem_1.5rem] bg-forest p-8 sm:p-12">
            <div className="hero-grid absolute inset-0 opacity-60" />
            <div className="absolute inset-[10%] rounded-t-[50%] border border-gold/35" />
            <div className="relative flex h-full flex-col justify-end">
              <span className="font-serif text-[9rem] leading-none text-gold/18">C</span>
              <p className="mt-auto max-w-sm font-serif text-4xl leading-tight text-cream">A better stay begins long before check-in.</p>
              <p className="mt-5 text-sm leading-7 text-cream/50">It begins with a property that is understood, a plan that is clear, and details that never slip.</p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Why CoHaven exists" title={<>Ownership should feel<br /><em className="text-gold">lighter than this.</em></>} body="Short-term rentals ask owners to be strategists, hoteliers, pricing analysts, coordinators, and problem-solvers—often all in the same hour. CoHaven brings those roles into one calm, accountable partnership." />
            <p className="mt-6 max-w-2xl text-base leading-8 text-forest/58">We pair the instincts of thoughtful hospitality with a disciplined operating rhythm, so your property performs without taking over your life.</p>
          </div>
        </div>
      </section>

      <section className="section-shell bg-background" id="why-cohaven">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading align="center" eyebrow="Our principles" title={<>The standard behind<br /><em className="text-gold">every stay.</em></>} />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              [HeartHandshake, 'Human hospitality', 'Every message should feel considered, not copied.'],
              [LineChart, 'Measured decisions', 'We use performance signals to act—not to decorate reports.'],
              [Eye, 'Visible ownership', 'You always know what is happening and why.'],
              [Sparkles, 'Care in the details', 'The smallest touch often becomes the strongest review.'],
            ].map(([Icon, title, body]) => (
              <article className="principle-card" key={title as string}><Icon className="size-6 text-gold" /><h2 className="mt-12 font-serif text-3xl">{title as string}</h2><p className="mt-4 text-sm leading-7 text-forest/55">{body as string}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-forest text-cream">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading light eyebrow="The first 30 days" title={<>A considered path<br />from audit to <em className="text-gold">arrival.</em></>} body="We move deliberately: understand first, improve second, operate third. That is how the property gets better without the handover feeling disruptive." />
          <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-cream/10 bg-cream/10 lg:grid-cols-4">
            {[
              ['Week 1', 'Property audit', 'Listing, pricing, guest journey, operations, and opportunity reviewed together.'],
              ['Week 2', 'Experience design', 'Your voice, standards, workflows, and owner preferences documented.'],
              ['Week 3', 'Systems & handover', 'Channels, access, vendors, messages, and reporting brought into rhythm.'],
              ['Week 4', 'Go live', 'CoHaven takes the lead, then keeps improving from real performance.'],
            ].map(([week, title, body], index) => (
              <article className="timeline-card" key={week}><span className="text-xs font-bold uppercase tracking-[.16em] text-gold">{week}</span><span className="mt-8 font-serif text-6xl text-cream/12">0{index + 1}</span><h3 className="mt-5 font-serif text-3xl">{title}</h3><p className="mt-4 text-sm leading-7 text-cream/52">{body}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-paper" id="faq">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
          <SectionHeading eyebrow="Questions, answered" title={<>A clear start<br /><em className="text-gold">begins here.</em></>} body="If your situation is more specific, share a few property details and we’ll answer directly." />
          <FAQList />
        </div>
      </section>

      <section className="cta-band hero-grid"><div className="mx-auto max-w-4xl text-center"><p className="section-kicker text-gold">The first step is simple</p><h2 className="mt-6 font-serif text-[clamp(3rem,6vw,6rem)] leading-[.92] text-cream">Show us the property.<br />We’ll show you the potential.</h2><Link className="button-primary group mt-9" href="/contact">Begin the audit <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link></div></section>
      <SiteFooter />
    </main>
  );
}
