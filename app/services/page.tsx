import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { Section, SectionHeader } from '@/components/Section';
import CTASection from '@/components/CTASection';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import Photo from '@/components/Photo';
import Reveal from '@/components/motion/Reveal';
import { SERVICES } from '@/lib/content';

export const metadata = {
  title: 'Services — Master Gardner, LLC',
  description:
    'Lawn care, landscaping, irrigation, snow plowing, salting, and full landscape construction across Kent and Ottawa County, MI.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-cream">
        <Reveal className="container-page py-20 sm:py-24">
          <p className="eyebrow">Our services</p>
          <h1 className="h-display mt-3 max-w-3xl">
            Everything your property needs — handled by one local crew.
          </h1>
          <p className="lead mt-5 max-w-2xl">
            We work on residential homes, condo associations, and commercial properties across
            Kent and Ottawa County. Pick a single service or a full-year plan.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a href="tel:+16163661552" className="btn-outline">
              (616) 366-1552
            </a>
          </div>
        </Reveal>
      </section>

      {/* Service blocks */}
      <Section>
        <div className="grid gap-16">
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;
            const reverse = idx % 2 === 1;
            return (
              <article
                key={s.slug}
                id={s.slug}
                className="grid scroll-mt-24 gap-10 lg:grid-cols-2 lg:items-center"
              >
                <Reveal
                  direction={reverse ? 'left' : 'right'}
                  className={reverse ? 'lg:order-2' : ''}
                >
                  {s.image ? (
                    <Photo
                      src={s.image}
                      alt={s.imageAlt ?? s.title}
                      aspect="aspect-[5/4]"
                      className="transition-transform duration-500 hover:scale-[1.02]"
                    />
                  ) : (
                    <ImagePlaceholder label={`${s.title} — replace later`} aspect="aspect-[5/4]" />
                  )}
                </Reveal>
                <Reveal
                  direction={reverse ? 'right' : 'left'}
                  delay={0.1}
                  className={reverse ? 'lg:order-1' : ''}
                >
                  <div className="inline-grid h-12 w-12 place-items-center rounded-xl bg-brand-100 text-brand-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="h-section mt-5">{s.title}</h2>
                  <p className="lead mt-4">{s.long}</p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-ink/80">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-700" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link href="/contact" className="btn-primary">
                      Request a quote
                    </Link>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
