import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Mail } from 'lucide-react';

const footerLinks = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'Our approach' },
  { href: '/about#faq', label: 'FAQ' },
  { href: '/contact', label: 'Get started' },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#102a22] px-5 py-12 text-cream sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 border-b border-cream/10 pb-12 md:grid-cols-[1.2fr_.8fr_.8fr]">
          <div className="max-w-md">
            <Image alt="CoHaven" className="h-auto w-[190px] brightness-0 invert sepia-[.25]" height={56} src="/cohaven-logo-transparent.png" width={220} />
            <p className="mt-6 text-sm leading-7 text-cream/55">
              Premium property management and co-hosting—built around stronger stays,
              calmer ownership, and the details guests remember.
            </p>
          </div>
          <div>
            <p className="footer-label">Navigate</p>
            <div className="mt-5 flex flex-col gap-3">
              {footerLinks.map((link) => <Link className="footer-link" href={link.href} key={link.href}>{link.label}</Link>)}
            </div>
          </div>
          <div>
            <p className="footer-label">Start a conversation</p>
            <a className="mt-5 flex items-center gap-3 text-sm text-cream/70 transition-colors hover:text-gold" href="mailto:cohaven.str@gmail.com">
              <Mail className="size-4 text-gold" /> cohaven.str@gmail.com
            </a>
            <Link className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-gold" href="/contact">
              Free property audit <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs text-cream/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CoHaven. All rights reserved.</p>
          <p>Managed with devotion.</p>
        </div>
      </div>
    </footer>
  );
}
