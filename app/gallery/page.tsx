import { Section, SectionHeader } from '@/components/Section';
import CTASection from '@/components/CTASection';
import Photo from '@/components/Photo';

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
        <div className="container-page py-20 sm:py-24">
          <p className="eyebrow">Gallery</p>
          <h1 className="h-display mt-3 max-w-3xl">
            Recent work across West Michigan.
          </h1>
          <p className="lead mt-5 max-w-2xl">
            A look at some of the lawns, landscapes, and properties we&apos;ve had the chance
            to work on. New photos added throughout the season.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((item) => (
            <figure key={item.src} className="group">
              <Photo src={item.src} alt={item.alt} aspect="aspect-square" />
              <figcaption className="mt-3 text-sm font-medium text-ink/70">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-ink/60">
          More photos added throughout the season.
        </p>
      </Section>

      <CTASection />
    </>
  );
}
