import Link from 'next/link';
import { ArrowRight, Star, ShieldCheck, Award, Leaf } from 'lucide-react';
import { Section, SectionHeader } from '@/components/Section';
import CTASection from '@/components/CTASection';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { SERVICES, TESTIMONIALS, VALUE_PROPS } from '@/lib/content';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream">
        <div className="absolute inset-0 -z-10 opacity-60"
             style={{
               backgroundImage:
                 'radial-gradient(circle at 15% 20%, #e3edd9 0, transparent 45%), radial-gradient(circle at 85% 60%, #c8dcb3 0, transparent 50%)',
             }}
        />
        <div className="container-page grid gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Master Gardner, LLC · Ada, Michigan</p>
            <h1 className="h-display mt-4">
              A beautiful landscape <span className="text-brand-700">starts here.</span>
            </h1>
            <p className="lead mt-5 max-w-xl">
              Lawn care, landscaping, snow plowing, and salting across Kent and Ottawa County —
              done by a local crew that actually cares about the result.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/services" className="btn-outline">
                View Our Services
              </Link>
            </div>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-6 text-sm">
              <div>
                <p className="font-display text-3xl font-semibold text-brand-800">15+</p>
                <p className="text-ink/60">Years experience</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-brand-800">5.0</p>
                <p className="text-ink/60">Customer rating</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-brand-800">BBB</p>
                <p className="text-ink/60">Accredited</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <ImagePlaceholder label="Hero photo — replace later" aspect="aspect-[4/5]" />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-4 shadow-soft ring-1 ring-black/5 sm:block">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mt-2 text-sm font-medium text-ink">“Outstanding work.”</p>
              <p className="text-xs text-ink/60">— Marge E.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <Section id="services">
        <SectionHeader
          eyebrow="What we do"
          title="Full-service property care, all year long."
          description="From weekly mowing to full landscape construction and winter snow management — one crew handles it all."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.slice(0, 8).map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                href={`/services#${s.slug}`}
                className="group card-soft transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-100 text-brand-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.short}</p>
                <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:text-brand-800">
                  Learn more <ArrowRight className="h-4 w-4" />
                </p>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* WHY US */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <ImagePlaceholder label="Crew at work — replace later" aspect="aspect-[5/4]" />
          </div>
          <div>
            <p className="eyebrow">Why Master Gardner</p>
            <h2 className="h-section mt-3">
              Local crew. Real accountability. <span className="text-brand-700">Beautiful results.</span>
            </h2>
            <p className="lead mt-4">
              We&apos;re not a franchise. Master Gardner is a locally owned, family-run operation
              based right here in Ada. Every job runs through our own crew — so the person you
              talk to is the person who&apos;s actually on your property.
            </p>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {VALUE_PROPS.map((v) => (
                <li key={v.title} className="flex gap-3">
                  <div className="mt-1 grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                    <Leaf className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink">{v.title}</p>
                    <p className="mt-1 text-sm text-ink/70">{v.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Section>
        <SectionHeader
          eyebrow="Reviews"
          title="Trusted by neighbors across West Michigan."
          center
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <div key={i} className="card-soft">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink/80">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-ink">— {t.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/reviews" className="btn-outline">
            Read more reviews
          </Link>
        </div>
      </Section>

      {/* TRUST STRIP */}
      <section className="border-y border-black/5 bg-white py-10">
        <div className="container-page grid gap-6 text-center sm:grid-cols-3">
          <div className="flex items-center justify-center gap-3">
            <ShieldCheck className="h-6 w-6 text-brand-700" />
            <span className="text-sm font-medium text-ink/80">BBB Accredited Business</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Award className="h-6 w-6 text-brand-700" />
            <span className="text-sm font-medium text-ink/80">Licensed &amp; Insured</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Leaf className="h-6 w-6 text-brand-700" />
            <span className="text-sm font-medium text-ink/80">Locally Owned &amp; Operated</span>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
