import { Section, SectionHeader } from '@/components/Section';
import CTASection from '@/components/CTASection';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export const metadata = {
  title: 'Gallery — Master Gardner, LLC',
  description:
    'Recent landscaping, lawn care, and hardscape projects by Master Gardner, LLC.',
};

const GALLERY = [
  'Landscape installation', 'Mulched garden beds', 'Paver walkway',
  'Lawn maintenance', 'Hardscape patio', 'Spring cleanup',
  'Retaining wall', 'New sod install', 'Snow plowing',
  'Driveway salting', 'Front yard refresh', 'Backyard transformation',
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
          {GALLERY.map((label, i) => (
            <ImagePlaceholder key={i} label={label} aspect="aspect-square" />
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-ink/60">
          Photos coming soon — replace these placeholders with project photography.
        </p>
      </Section>

      <CTASection />
    </>
  );
}
