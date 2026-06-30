'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur transition-all duration-300 ${
        scrolled
          ? 'border-black/10 bg-white/95 shadow-sm'
          : 'border-transparent bg-white/70'
      }`}
    >
      <div
        className={`container-page flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-14' : 'h-16'
        }`}
      >
        <Link href="/" className="group flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Master Gardner, LLC logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            Master Gardner<span className="text-brand-700">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-ink/70 transition hover:text-brand-800"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-brand-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+16163661552"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink/70 transition hover:text-brand-800"
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
          className="grid h-10 w-10 place-items-center rounded-full text-ink transition hover:bg-brand-50 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-black/5 bg-white lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-3">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-ink/80 transition hover:bg-brand-50 hover:text-brand-800"
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
