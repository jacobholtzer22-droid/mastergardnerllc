import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-24 bg-brand-900 text-brand-50">
      <div className="container-page grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Master Gardner, LLC logo"
              width={44}
              height={44}
              className="h-11 w-11 rounded-lg bg-white object-contain p-0.5"
            />
            <span className="font-display text-xl font-semibold tracking-tight">
              Master Gardner, LLC
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-brand-100/80">
            A beautiful landscape starts here. Locally owned and operated in Ada, Michigan,
            serving Kent and Ottawa County with lawn care, landscaping, snow plowing, and
            salting services all year round.
          </p>
          <div className="mt-6 space-y-2 text-sm text-brand-100/80">
            <a href="tel:+16163661552" className="flex items-center gap-2 hover:text-white">
              <Phone className="h-4 w-4" /> (616) 366-1552
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Ada, MI 49301
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> Mon–Fri 9 AM – 5 PM
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-brand-100/80">
            <li><Link href="/services#lawn-care" className="hover:text-white">Lawn Care</Link></li>
            <li><Link href="/services#landscaping" className="hover:text-white">Landscaping</Link></li>
            <li><Link href="/services#irrigation" className="hover:text-white">Irrigation</Link></li>
            <li><Link href="/services#snow" className="hover:text-white">Snow Plowing</Link></li>
            <li><Link href="/services#salting" className="hover:text-white">Salting</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Company
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-brand-100/80">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link href="/reviews" className="hover:text-white">Reviews</Link></li>
            <li><Link href="/service-area" className="hover:text-white">Service Area</Link></li>
            <li><Link href="/referral" className="hover:text-white">Customer Referral</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-brand-100/70 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Master Gardner, LLC. All rights reserved.{" "}·{" "}
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <span hidden data-aa-cookie-wrap>{" "}·{" "}<a href="#" data-aa-cookie-settings className="hover:text-white">Cookie settings</a></span>
          </p>
          <p>
            Site by <a href="https://www.alignandacquire.com" className="hover:text-white">Align and Acquire</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
