import { cn } from '@/lib/utils';

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'left',
  light = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body?: string;
  align?: 'left' | 'center';
  light?: boolean;
}) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      <p className={cn('section-kicker', light && 'text-gold')}>{eyebrow}</p>
      <h2 className={cn('mt-5 font-serif text-[clamp(2.7rem,5vw,5.4rem)] leading-[.96] tracking-[-.045em]', light ? 'text-cream' : 'text-forest')}>{title}</h2>
      {body && <p className={cn('mt-6 max-w-2xl text-base leading-8 sm:text-lg', align === 'center' && 'mx-auto', light ? 'text-cream/58' : 'text-forest/58')}>{body}</p>}
    </div>
  );
}
