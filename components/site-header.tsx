'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Menu } from 'lucide-react';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'How it works' },
  { href: '/about#why-cohaven', label: 'Why CoHaven' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-cream/10 bg-forest/96 text-cream backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1536px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link aria-label="CoHaven home" className="group block" href="/">
          <Image
            alt="CoHaven"
            className="h-auto w-[158px] object-contain brightness-0 invert sepia-[.25] transition-opacity group-hover:opacity-80 sm:w-[174px]"
            height={50}
            priority
            src="/cohaven-logo-transparent.png"
            width={200}
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link className="nav-link" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link className="button-header hidden md:inline-flex" href="/contact">
          Get started <ArrowUpRight className="size-4" />
        </Link>

        <Sheet>
          <SheetTrigger
            aria-label="Open navigation"
            className="grid size-10 place-items-center rounded-full border border-cream/18 text-cream transition-colors hover:bg-cream/10 md:hidden"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent className="border-gold/20 bg-forest p-0 text-cream" side="right">
            <SheetHeader className="border-b border-cream/10 px-6 py-7 text-left">
              <SheetTitle className="font-serif text-2xl text-cream">Welcome to CoHaven</SheetTitle>
              <SheetDescription className="text-cream/55">Hosting, handled with devotion.</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-1 flex-col px-6 py-7" aria-label="Mobile navigation">
              <SheetClose render={<Link href="/" />} className="mobile-link">Home</SheetClose>
              {links.map((link) => (
                <SheetClose render={<Link href={link.href} />} className="mobile-link" key={link.href}>
                  {link.label}
                </SheetClose>
              ))}
              <SheetClose render={<Link href="/contact" />} className="button-primary mt-auto">
                Start with a free audit <ArrowUpRight className="size-4" />
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
