import { Section } from '@/components/Section';
import CTASection from '@/components/CTASection';
import Reveal from '@/components/motion/Reveal';
import GalleryGrid from './GalleryGrid';

export const metadata = {
  title: 'Gallery — Master Gardner, LLC',
  description:
    'Recent landscaping, lawn care, and hardscape projects by Master Gardner, LLC.',
};

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
            Every photo below is a real property we take care of — no stock images.
            Filter by the service you&apos;re shopping for.
          </p>
        </Reveal>
      </section>

      <Section>
        <GalleryGrid />
      </Section>

      <CTASection />
    </>
  );
}
