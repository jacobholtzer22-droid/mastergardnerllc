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

type GalleryItem = {
  src: string;
  label: string;
  alt: string;
  /** feature tiles take a 2x2 block on large screens */
  feature?: boolean;
  /** wide tiles take a 2x1 block on large screens */
  wide?: boolean;
};

const GALLERY: GalleryItem[] = [
  { src: '/images/truck-on-site.png', label: 'Commercial mowing & striping', alt: 'Master Gardner truck and trailer on a commercial property with striped lawn', feature: true },
  { src: '/images/estate-lawn-curve.jpg', label: 'Full-property lawn care', alt: 'Sweeping striped lawn wrapping around a large home and drive' },
  { src: '/images/garden-bed-flowers.jpg', label: 'Planting & bed design', alt: 'Red hot poker perennials blooming in a freshly mulched garden bed' },
  { src: '/images/irrigation-sprinkler.jpg', label: 'Irrigation systems', alt: 'Sprinkler head watering a striped lawn beside a planted bed' },
  { src: '/images/commercial-property.png', label: 'Commercial property maintenance', alt: 'Manicured lawn and beds lining a sidewalk at a commercial property' },
  { src: '/images/spring-lawn-stripes.jpg', label: 'Spring stripe patterns', alt: 'Wide green lawn with fresh spring mowing stripes running toward a tree line' },
  { src: '/images/commercial-lawn-stripes.png', label: 'Clean mowing stripes', alt: 'Lawn with crisp mowing stripes along a fence line', feature: true },
  { src: '/images/hillside-stripes.jpg', label: 'Sloped-lawn mowing', alt: 'Striped lawn running down a slope toward mature trees' },
  { src: '/images/commercial-streetside.jpg', label: 'Streetside curb appeal', alt: 'Freshly mowed and edged lawn along a commercial storefront and sidewalk' },
  { src: '/images/crew-truck-trailer.jpg', label: 'On the job', alt: 'Master Gardner truck and equipment trailer staged on a property during a project' },
  { src: '/images/deer-lawn.png', label: 'Healthy, lush turf', alt: 'A deer resting on a healthy green lawn beside evergreens' },
  { src: '/images/fall-hillside-lawn.jpg', label: 'Fall cleanups', alt: 'Freshly cut hillside lawn framed by autumn color', wide: true },
  { src: '/images/backyard-lawn-stripes.png', label: 'Residential lawn care', alt: 'Striped backyard lawn shaded by mature trees' },
  { src: '/images/fall-lawn-woods.jpg', label: 'Lawn restoration', alt: 'Restored lawn cut clean along a wooded tree line in early fall' },
  { src: '/images/dusk-lawn-dog.jpg', label: 'Evening finish', alt: 'Striped lawn at dusk with a dog walking across it' },
  { src: '/images/tree-lawn-stripes.png', label: 'Detailed trimming & edging', alt: 'Mowing stripes carefully cut around a tree' },
  { src: '/images/fall-maple-leaves.jpg', label: 'Seasonal color', alt: 'Close-up of bright red maple leaves in fall' },
  { src: '/images/snow-plowed-driveway.jpg', label: 'Snow plowing', alt: 'Residential driveway plowed clean at night with snow banked on both sides' },
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
        <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4" stagger={0.05}>
          {GALLERY.map((item) => (
            <StaggerItem
              key={item.src}
              className={
                item.feature
                  ? 'lg:col-span-2 lg:row-span-2'
                  : item.wide
                    ? 'col-span-2'
                    : ''
              }
            >
              <figure
                className={`group relative overflow-hidden rounded-2xl bg-brand-100 ring-1 ring-black/5 ${
                  item.wide
                    ? 'aspect-[2/1] lg:aspect-auto lg:h-full'
                    : item.feature
                      ? 'aspect-square lg:h-full'
                      : 'aspect-square'
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={
                    item.feature || item.wide
                      ? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px'
                      : '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px'
                  }
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
