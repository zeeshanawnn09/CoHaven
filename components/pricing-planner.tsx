'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Building2, Check } from 'lucide-react';

import { Slider } from '@/components/ui/slider';

export function PricingPlanner() {
  const [properties, setProperties] = useState(1);
  const [mode, setMode] = useState<'partner' | 'complete'>('partner');
  const recommendation = properties >= 5 ? 'Portfolio Partnership' : mode === 'complete' ? 'Full Management' : 'Co-Hosting';

  return (
    <div className="grid overflow-hidden rounded-[2rem] border border-forest/12 bg-paper shadow-[0_28px_80px_rgba(23,56,45,.08)] lg:grid-cols-[.92fr_1.08fr]">
      <div className="bg-forest p-7 text-cream sm:p-10 lg:p-12">
        <p className="section-kicker text-gold">Your property plan</p>
        <h3 className="mt-5 font-serif text-4xl leading-none sm:text-5xl">A partnership sized to you.</h3>
        <p className="mt-5 text-sm leading-7 text-cream/55">Adjust the details for an instant service recommendation. Your final proposal follows a complimentary audit.</p>
        <div className="mt-9">
          <div className="mb-4 flex items-end justify-between">
            <label className="text-xs font-bold uppercase tracking-[.13em] text-cream/55" htmlFor="property-count">Properties</label>
            <span className="font-serif text-4xl text-gold">{properties}</span>
          </div>
          <Slider aria-label="Number of properties" className="[&_[data-slot=slider-range]]:bg-gold [&_[data-slot=slider-thumb]]:border-gold" id="property-count" max={12} min={1} onValueChange={(value) => setProperties(Array.isArray(value) ? value[0] : value)} step={1} value={[properties]} />
          <div className="mt-3 flex justify-between text-[10px] text-cream/35"><span>1</span><span>12+</span></div>
        </div>
        <div className="mt-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[.13em] text-cream/55">How involved would you like to be?</p>
          <div className="grid grid-cols-2 gap-2">
            <button className={`planner-option ${mode === 'partner' ? 'active' : ''}`} onClick={() => setMode('partner')} type="button">Stay involved</button>
            <button className={`planner-option ${mode === 'complete' ? 'active' : ''}`} onClick={() => setMode('complete')} type="button">Take it all on</button>
          </div>
        </div>
      </div>
      <div className="p-7 sm:p-10 lg:p-12">
        <span className="grid size-12 place-items-center rounded-full bg-gold/18 text-gold"><Building2 className="size-5" /></span>
        <p className="mt-8 text-xs font-bold uppercase tracking-[.14em] text-forest/40">Recommended for you</p>
        <h3 className="mt-3 font-serif text-4xl text-forest sm:text-5xl">{recommendation}</h3>
        <p className="mt-5 text-base leading-7 text-forest/60">
          {recommendation === 'Portfolio Partnership' ? 'A dedicated operating rhythm across every property, with centralized reporting and market-level strategy.' : recommendation === 'Full Management' ? 'Complete day-to-day management, from listing and pricing through guest care, turnovers, and reporting.' : 'A flexible service that removes the operational load while keeping you close to the decisions that matter.'}
        </p>
        <div className="mt-7 grid gap-3 text-sm text-forest/70 sm:grid-cols-2">
          {['24/7 guest communication', 'Daily rate review', 'Operations coordination', 'Monthly owner reporting'].map((item) => <span className="flex items-center gap-2" key={item}><Check className="size-4 text-gold" />{item}</span>)}
        </div>
        <div className="mt-9 border-t border-forest/10 pt-7">
          <p className="text-sm text-forest/48"><strong className="text-forest">Tailored pricing</strong> · quoted after your free audit</p>
          <Link className="button-dark group mt-6" href={`/contact?properties=${properties}&service=${encodeURIComponent(recommendation)}`}>Request my proposal <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
        </div>
      </div>
    </div>
  );
}
