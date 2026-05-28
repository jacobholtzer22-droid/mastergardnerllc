import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-brand-800 py-20 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, #a4c684 0, transparent 40%), radial-gradient(circle at 80% 80%, #7faf5a 0, transparent 40%)',
        }}
      />
      <div className="container-page relative z-10 flex flex-col items-center text-center">
        <p className="eyebrow !text-brand-200">Ready to get started?</p>
        <h2 className="h-section mt-3 !text-white">
          Let&apos;s bring your landscape to life.
        </h2>
        <p className="lead mt-4 max-w-2xl !text-brand-50/90">
          Whether it&apos;s a full property transformation or weekly lawn care, we&apos;re ready
          to help. Reach out for a free quote — we typically respond within one business day.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/contact" className="btn-light">
            Get a Free Quote
          </Link>
          <a
            href="tel:+16163661552"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <Phone className="h-4 w-4" /> (616) 366-1552
          </a>
        </div>
      </div>
    </section>
  );
}
