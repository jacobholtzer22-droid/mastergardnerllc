import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, ShieldCheck, Award, Leaf } from 'lucide-react';
import { Section, SectionHeader } from '@/components/Section';
import CTASection from '@/components/CTASection';
import Photo from '@/components/Photo';
import Hero from '@/components/Hero';
import Reveal from '@/components/motion/Reveal';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import { SERVICES, TESTIMONIALS, VALUE_PROPS } from '@/lib/content';

const RECENT_WORK = [
  { src: '/images/crosshatch-stripes.jpg', label: 'Crosshatch striping', alt: 'Lawn mowed in a crosshatch pattern with long afternoon shadows' },
  { src: '/images/garden-bed-flowers.jpg', label: 'Planting & beds', alt: 'Red hot poker perennials blooming in a freshly mulched garden bed' },
  { src: '/images/irrigation-sprinkler.jpg', label: 'Irrigation', alt: 'Sprinkler head watering a striped lawn beside a planted bed' },
  { src: '/images/sunset-commercial.jpg', label: 'Commercial curb appeal', alt: 'Commercial lawn and walkway at sunset with an orange sky' },
  { src: '/images/autumn-stripes.jpg', label: 'Fall cleanups', alt: 'Long mowing stripes running through a lawn framed by autumn trees' },
  { src: '/images/plow-truck.jpg', label: 'Snow & ice', alt: 'Master Gardner truck fitted with a Western MVP3 plow, ready for the season' },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* SERVICES OVERVIEW */}
      <Section id="services">
        <Reveal>
          <SectionHeader
            eyebrow="What we do"
            title="Full-service property care, all year long."
            description="From weekly mowing to full landscape construction and winter snow management — one crew handles it all."
          />
        </Reveal>
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {SERVICES.slice(0, 8).map((s) => {
            const Icon = s.icon;
            return (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/services#${s.slug}`}
                  className="group card-soft block h-full transition duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:ring-brand-200"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-100 text-brand-700 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.short}</p>
                  <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 transition-all group-hover:gap-2 group-hover:text-brand-800">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </p>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      {/* WHY US */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal direction="right">
            <Photo
              src="/images/truck-on-site.png"
              alt="Master Gardner truck and trailer on a commercial property with freshly striped lawn"
              aspect="aspect-[5/4]"
              className="transition-transform duration-500 hover:scale-[1.02]"
            />
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <p className="eyebrow">Why Master Gardner</p>
            <h2 className="h-section mt-3">
              Local crew. Real accountability. <span className="text-brand-700">Beautiful results.</span>
            </h2>
            <p className="lead mt-4">
              We&apos;re not a franchise. Master Gardner is a locally owned, family-run operation
              based right here in Ada. Every job runs through our own crew — so the person you
              talk to is the person who&apos;s actually on your property.
            </p>
            <Stagger className="mt-8 grid gap-5 sm:grid-cols-2" as="ul" stagger={0.08}>
              {VALUE_PROPS.map((v) => (
                <StaggerItem key={v.title} as="li" className="flex gap-3">
                  <div className="mt-1 grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                    <Leaf className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink">{v.title}</p>
                    <p className="mt-1 text-sm text-ink/70">{v.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        </div>
      </section>

      {/* RECENT WORK */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow="Recent work"
            title="Real properties, real results."
            description="A few of the lawns, beds, and driveways we've taken care of around West Michigan."
          />
        </Reveal>
        <Stagger
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
          stagger={0.07}
        >
          {RECENT_WORK.map((item) => (
            <StaggerItem key={item.src}>
              <Link
                href="/gallery"
                className="group relative block aspect-square overflow-hidden rounded-2xl bg-brand-100 ring-1 ring-black/5"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/5 to-transparent transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 p-3 text-xs font-semibold text-white transition-all duration-300 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  {item.label}
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10 flex justify-center" delay={0.1}>
          <Link href="/gallery" className="btn-outline">
            See the full gallery
          </Link>
        </Reveal>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="bg-cream">
        <Reveal>
          <SectionHeader
            eyebrow="Reviews"
            title="Trusted by neighbors across West Michigan."
            center
          />
        </Reveal>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.12}>
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <StaggerItem key={i}>
              <div className="card-soft h-full transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-700 font-display text-sm font-semibold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink/80">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold text-ink">— {t.name}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10 flex justify-center" delay={0.1}>
          <Link href="/reviews" className="btn-outline">
            Read more reviews
          </Link>
        </Reveal>
      </Section>

      {/* TRUST STRIP */}
      <section className="border-y border-black/5 bg-white py-10">
        <Stagger
          className="container-page grid gap-6 text-center sm:grid-cols-3"
          stagger={0.12}
        >
          <StaggerItem className="flex items-center justify-center gap-3">
            <ShieldCheck className="h-6 w-6 text-brand-700" />
            <span className="text-sm font-medium text-ink/80">BBB Accredited Business</span>
          </StaggerItem>
          <StaggerItem className="flex items-center justify-center gap-3">
            <Award className="h-6 w-6 text-brand-700" />
            <span className="text-sm font-medium text-ink/80">Licensed &amp; Insured</span>
          </StaggerItem>
          <StaggerItem className="flex items-center justify-center gap-3">
            <Leaf className="h-6 w-6 text-brand-700" />
            <span className="text-sm font-medium text-ink/80">Locally Owned &amp; Operated</span>
          </StaggerItem>
        </Stagger>
      </section>

      <CTASection />
    </>
  );
}
