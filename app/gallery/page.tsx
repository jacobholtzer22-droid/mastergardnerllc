import Image from 'next/image';
import { Section } from '@/components/Section';
import CTASection from '@/components/CTASection';
import Reveal from '@/components/motion/Reveal';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';

export const metadata = {
  title: 'Gallery — Master Gardner, LLC',
  description:
    'Recent landscaping, lawn care, and hardscape projects by Master Gardner, LLC.',
};

const GALLERY = [
  { src: '/images/commercial-property.png', label: 'Commercial property maintenance', alt: 'Manicured lawn and beds lining a sidewalk at a commercial property' },
  { src: '/images/truck-on-site.png', label: 'Commercial mowing & striping', alt: 'Master Gardner truck and trailer on a commercial property with striped lawn' },
  { src: '/images/commercial-lawn-stripes.png', label: 'Clean mowing stripes', alt: 'Lawn with crisp mowing stripes along a fence line' },
  { src: '/images/backyard-lawn-stripes.png', label: 'Residential lawn care', alt: 'Striped backyard lawn shaded by mature trees' },
  { src: '/images/tree-lawn-stripes.png', label: 'Detailed trimming & edging', alt: 'Mowing stripes carefully cut around a tree' },
  { src: '/images/deer-lawn.png', label: 'Healthy, lush turf', alt: 'A deer resting on a healthy green lawn beside evergreens' },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-cream">
        <Reveal className="container-page py-20 sm:py-24">
          <p className="eyebrow">Gallery</p>
          <h1 className="h-display mt-3 max-w-3xl">
            Recent work across West Michigan.
          </h1>
          <p className="lead mt-5 max-w-2xl">
            A look at some of the lawns, landscapes, and properties we&apos;ve had the chance
            to work on. New photos added throughout the season.
          </p>
        </Reveal>
      </section>

      <Section>
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {GALLERY.map((item) => (
            <StaggerItem key={item.src}>
              <figure className="group relative aspect-square overflow-hidden rounded-2xl ring-1 ring-black/5">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                {/* Caption slides up on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-4 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.label}
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-10 text-center text-sm text-ink/60">
          More photos added throughout the season.
        </p>
      </Section>

      <CTASection />
    </>
  );
}
