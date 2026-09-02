import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BarChart3, CalendarCheck, Camera, Check, FileText, Headphones, ShieldCheck } from 'lucide-react';

import { PricingPlanner } from '@/components/pricing-planner';
import { SectionHeading } from '@/components/section-heading';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Services & Pricing',
  description: 'Explore CoHaven co-hosting, full property management, and portfolio support for short-term rental owners.',
};

const services = [
  { icon: Camera, number: '01', title: 'Listing elevation', body: 'Positioning, copy, imagery direction, amenities, and platform-ready details that turn consideration into bookings.', tags: ['SEO-led copy', 'Photo direction', 'Channel setup'] },
  { icon: Headphones, number: '02', title: 'Guest communication', body: 'Warm, responsive guest care from the first question to the post-stay follow-up—day, night, and weekend.', tags: ['24/7 coverage', 'Check-in care', 'Issue resolution'] },
  { icon: BarChart3, number: '03', title: 'Revenue strategy', body: 'Rates reviewed against demand, seasonality, events, competitor movement, and the performance you want.', tags: ['Daily review', 'Market signals', 'Occupancy balance'] },
  { icon: CalendarCheck, number: '04', title: 'Property operations', body: 'Turnovers, cleaner handoffs, maintenance, supply checks, and access—coordinated before they become owner problems.', tags: ['Turnovers', 'Maintenance', 'Vendor coordination'] },
  { icon: ShieldCheck, number: '05', title: 'Resolution & claims', body: 'Documented incidents, evidence gathering, guest resolution, and claim support handled with calm precision.', tags: ['Documentation', 'Guest resolution', 'Claim support'] },
  { icon: FileText, number: '06', title: 'Owner reporting', body: 'Clear monthly performance summaries with the numbers, context, and next actions that actually matter.', tags: ['Revenue', 'Occupancy', 'Recommendations'] },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-forest">
      <SiteHeader />
      <section className="page-hero hero-grid bg-forest text-cream">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> Services & pricing</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_.65fr] lg:items-end">
            <h1 className="font-serif text-[clamp(3.8rem,8vw,8rem)] leading-[.87] tracking-[-.055em]">Every detail,<br /><em className="text-gold">beautifully handled.</em></h1>
            <p className="max-w-xl text-lg leading-8 text-cream/60">Choose a flexible co-hosting partnership or hand us the full operation. Every service is shaped around your property, your market, and your goals.</p>
          </div>
        </div>
      </section>

      <section className="section-shell bg-background">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading eyebrow="Complete property care" title={<>One team. Every<br /><em className="text-gold">operational layer.</em></>} body="No scattered freelancers, lost handoffs, or dashboards you have to decipher. CoHaven brings the work into one accountable partnership." />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-forest/10 bg-forest/10 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, number, title, body, tags }) => (
              <article className="service-detail-card group" key={title}>
                <div className="flex items-start justify-between"><Icon className="size-6 text-gold" /><span className="font-serif text-2xl text-forest/22">{number}</span></div>
                <h2 className="mt-12 font-serif text-3xl">{title}</h2>
                <p className="mt-4 min-h-24 text-sm leading-7 text-forest/56">{body}</p>
                <div className="mt-5 flex flex-wrap gap-2">{tags.map((tag) => <span className="service-tag" key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#e9dfcc]">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading align="center" eyebrow="Plan your partnership" title={<>Pricing that follows<br /><em className="text-gold">the work.</em></>} body="We price for the property and scope—not from a one-size-fits-all menu. Use the planner for a starting point, then request a tailored proposal." />
          <div className="mt-14"><PricingPlanner /></div>
        </div>
      </section>

      <section className="section-shell bg-paper">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-start lg:gap-20">
          <SectionHeading eyebrow="What every plan includes" title={<>The essentials are<br /><em className="text-gold">never optional.</em></>} />
          <div className="grid gap-4 sm:grid-cols-2">
            {['A dedicated point of contact', 'Transparent owner visibility', 'Thoughtful guest communication', 'Documented operating standards', 'Performance-led pricing', 'A clear onboarding plan'].map((item) => <div className="flex items-center gap-4 border-b border-forest/12 py-5 text-sm font-medium" key={item}><span className="grid size-8 place-items-center rounded-full bg-gold/16"><Check className="size-4 text-gold" /></span>{item}</div>)}
          </div>
        </div>
      </section>

      <section className="cta-band hero-grid">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 text-center">
          <p className="section-kicker text-gold">Let’s find the right fit</p>
          <h2 className="font-serif text-[clamp(3rem,6vw,6rem)] leading-[.92] text-cream">Your property deserves<br />a thoughtful plan.</h2>
          <Link className="button-primary group mx-auto" href="/contact">Request a proposal <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
