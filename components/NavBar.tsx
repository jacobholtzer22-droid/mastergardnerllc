'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/service-area', label: 'Service Area' },
  { href: '/about', label: 'About' },
  { href: '/referral', label: 'Referrals' },
  { href: '/contact', label: 'Contact' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-700 font-display text-lg font-bold text-white">
            M
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            Master Gardner<span className="text-brand-700">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/70 transition hover:text-brand-800"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+16163661552"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink/70 hover:text-brand-800"
          >
            <Phone className="h-4 w-4" />
            (616) 366-1552
          </a>
          <Link href="/contact" className="btn-primary !py-2">
            Get a Quote
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-brand-50 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink/80 hover:bg-brand-50 hover:text-brand-800"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-2">
              <a href="tel:+16163661552" className="btn-outline flex-1 !py-2">
                Call Us
              </a>
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary flex-1 !py-2">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
