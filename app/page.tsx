import Link from 'next/link';
import { ArrowRight, BarChart3, Check, Headphones, KeyRound, MessageCircle, Sparkles, TrendingUp } from 'lucide-react';

import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { SectionHeading } from '@/components/section-heading';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <section className="hero-grid relative min-h-[calc(100svh-76px)] border-b border-cream/10 bg-forest px-5 pb-10 pt-14 text-cream sm:px-8 lg:px-12 lg:pb-12 lg:pt-20">
        <div className="glow-orb absolute -right-32 top-0 h-[520px] w-[520px] rounded-full opacity-55" />
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-10">
          <div className="max-w-3xl">
            <div className="eyebrow reveal-up">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Property management & co-hosting
            </div>
            <h1 className="reveal-up delay-1 mt-8 font-serif text-[clamp(3.6rem,7vw,7.6rem)] leading-[.86] tracking-[-0.055em]">
              Your property.
              <span className="mt-2 block italic text-gold">Our devotion.</span>
            </h1>
            <p className="reveal-up delay-2 mt-8 max-w-2xl text-lg leading-8 text-cream/68 sm:text-xl">
              We turn short-term rentals into beautifully run hospitality
              businesses—pairing hands-on guest care with sharper pricing,
              seamless operations, and complete owner visibility.
            </p>
            <div className="reveal-up delay-3 mt-10 flex flex-col gap-3 sm:flex-row">
              <Link className="button-primary group" href="/contact">
                Start with a free audit
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link className="button-ghost" href="/services">
                Explore our services
              </Link>
            </div>
            <div className="reveal-up delay-4 mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-cream/58">
              <span className="inline-flex items-center gap-2">
                <Check className="size-4 text-gold" /> No long-term contract
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="size-4 text-gold" /> Built around your property
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[620px] lg:ml-auto">
            <div className="halo-ring absolute left-1/2 top-1/2 h-[112%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-gold/20" />
            <div className="dashboard-card relative rounded-[2rem] border border-white/10 bg-[#f6f0e3] p-4 text-forest shadow-2xl shadow-black/25 sm:p-6">
              <div className="flex items-center justify-between border-b border-forest/10 pb-5">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[.18em] text-forest/45">Owner overview</p>
                  <p className="mt-1 font-serif text-2xl">The Palm House</p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-sage/15 px-3 py-2 text-xs font-semibold text-sage">
                  <span className="size-1.5 animate-pulse rounded-full bg-sage" /> Live
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 py-5 sm:gap-3">
                <Metric label="Revenue" value="$8,420" change="+18%" />
                <Metric label="Occupancy" value="86%" change="+7%" />
                <Metric label="Rating" value="4.92" change="5★" />
              </div>

              <div className="rounded-2xl bg-white/60 p-4 sm:p-5">
                <div className="mb-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold text-forest/45">Revenue performance</p>
                    <p className="mt-1 font-serif text-xl">A stronger season</p>
                  </div>
                  <TrendingUp className="size-5 text-gold" />
                </div>
                <div className="flex h-28 items-end gap-2" aria-label="Revenue chart trending upward">
                  {[28, 42, 36, 55, 50, 68, 61, 77, 73, 92, 84, 100].map((height, index) => (
                    <span
                      className="chart-bar flex-1 rounded-t-sm bg-forest/12"
                      key={index}
                      style={{ '--bar-height': `${height}%`, animationDelay: `${index * 70 + 600}ms` } as React.CSSProperties}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-2xl bg-forest px-4 py-4 text-cream">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gold/18">
                  <MessageCircle className="size-4 text-gold" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-cream/55">Guest message · just now</p>
                  <p className="truncate text-sm font-medium">Early check-in arranged ✓</p>
                </div>
                <span className="text-xs text-gold">2m</span>
              </div>
            </div>

            <div className="float-card absolute -left-5 top-24 hidden items-center gap-3 rounded-2xl border border-white/15 bg-cream px-4 py-3 text-forest shadow-xl sm:flex">
              <span className="grid size-9 place-items-center rounded-full bg-gold/20 font-serif text-gold">5★</span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.14em] text-forest/40">New review</p>
                <p className="text-sm font-semibold">“Impeccable stay.”</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-14 grid max-w-[1440px] grid-cols-2 border-t border-cream/10 pt-7 sm:grid-cols-4 lg:mt-8">
          <Proof value="24/7" label="Guest support" />
          <Proof value="5★" label="Hospitality standard" />
          <Proof value="Daily" label="Pricing reviews" />
          <Proof value="100%" label="Owner visibility" />
        </div>
      </section>

      <section className="section-shell bg-background">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            <SectionHeading
              eyebrow="The CoHaven standard"
              title={<>Hospitality at heart.<br /><em className="text-gold">Systems underneath.</em></>}
              body="Your guests feel warmth and attention. You feel the confidence of a property that is priced, prepared, and cared for every day."
            />
            <div className="grid gap-px overflow-hidden rounded-[2rem] border border-forest/10 bg-forest/10 sm:grid-cols-2">
              {[
                [Headphones, 'Guest care, always on', 'Fast, thoughtful communication from enquiry through checkout.'],
                [BarChart3, 'Revenue with intention', 'Daily pricing decisions shaped by season, demand, and your goals.'],
                [KeyRound, 'Operations without gaps', 'Turnovers, maintenance, and access coordinated in one clear rhythm.'],
                [Sparkles, 'A stay worth reviewing', 'Every touchpoint refined to earn trust, ratings, and repeat bookings.'],
              ].map(([Icon, title, body]) => (
                <article className="service-tile group" key={title as string}>
                  <Icon className="size-6 text-gold transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mt-10 font-serif text-3xl">{title as string}</h3>
                  <p className="mt-4 text-sm leading-7 text-forest/56">{body as string}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell overflow-hidden bg-paper">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow="How it works" title={<>From property audit<br />to <em className="text-gold">peace of mind.</em></>} />
            <Link className="text-link" href="/about">Explore our approach <ArrowRight className="size-4" /></Link>
          </div>
          <div className="process-line mt-14 grid gap-4 md:grid-cols-3">
            {[
              ['01', 'Discover', 'We study your listing, market, goals, and every operational handoff.'],
              ['02', 'Elevate', 'We refine pricing, presentation, guest journeys, and property systems.'],
              ['03', 'Host', 'CoHaven runs the day-to-day while you stay informed and in control.'],
            ].map(([number, title, body]) => (
              <article className="process-card" key={number}>
                <span className="font-serif text-5xl text-gold/55">{number}</span>
                <h3 className="mt-12 font-serif text-3xl text-forest">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-forest/55">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-forest text-cream">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-20">
          <div>
            <p className="section-kicker text-gold">Built around owners</p>
            <blockquote className="mt-8 font-serif text-[clamp(2.7rem,5vw,5rem)] leading-[1.02] tracking-[-.035em]">
              “More revenue is good. <em className="text-gold">More freedom</em> is the point.”
            </blockquote>
            <p className="mt-7 max-w-xl text-base leading-8 text-cream/56">That belief shapes every service: clear ownership, fewer surprises, and a guest experience that never feels automated.</p>
          </div>
          <div className="owner-panel hero-grid rounded-[2rem] border border-cream/10 p-7 sm:p-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[.15em] text-cream/45">This week at your property</span>
              <span className="rounded-full bg-gold/15 px-3 py-1 text-xs text-gold">All on track</span>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {['Rates reviewed daily', 'Guest replies under care', 'Turnover confirmed', 'Owner update prepared'].map((item) => (
                <div className="flex items-center gap-3 rounded-2xl border border-cream/10 bg-cream/[.04] p-4 text-sm text-cream/72" key={item}><span className="grid size-7 place-items-center rounded-full bg-gold/14"><Check className="size-3.5 text-gold" /></span>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-background text-center">
        <div className="mx-auto max-w-4xl">
          <p className="section-kicker">Your next chapter</p>
          <h2 className="mt-6 font-serif text-[clamp(3.2rem,7vw,7rem)] leading-[.9] tracking-[-.05em]">Ready to host<br /><em className="text-gold">with ease?</em></h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-forest/56">Begin with a complimentary audit. We’ll show you what is working, what is being left on the table, and how CoHaven can help.</p>
          <Link className="button-dark group mt-9" href="/contact">Start my free audit <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function Metric({ label, value, change }: { label: string; value: string; change: string }) {
  return (
    <div className="rounded-2xl bg-white/55 p-3 sm:p-4">
      <p className="text-[10px] font-bold uppercase tracking-[.12em] text-forest/40">{label}</p>
      <p className="mt-2 font-serif text-xl sm:text-2xl">{value}</p>
      <p className="mt-1 text-[11px] font-bold text-sage">{change}</p>
    </div>
  );
}

function Proof({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-cream/10 px-2 py-3 text-center odd:border-r sm:border-r sm:last:border-r-0">
      <p className="font-serif text-3xl text-gold sm:text-4xl">{value}</p>
      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[.16em] text-cream/45 sm:text-xs">{label}</p>
    </div>
  );
}
