import Link from 'next/link';
import { Star } from 'lucide-react';
import { Section, SectionHeader } from '@/components/Section';
import CTASection from '@/components/CTASection';
import { TESTIMONIALS } from '@/lib/content';

export const metadata = {
  title: 'Reviews — Master Gardner, LLC',
  description:
    'Customer reviews and testimonials for Master Gardner, LLC in Ada, Michigan.',
};

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="container-page py-20 sm:py-24">
          <p className="eyebrow">Reviews</p>
          <h1 className="h-display mt-3 max-w-3xl">
            What our customers say.
          </h1>
          <p className="lead mt-5 max-w-2xl">
            We&apos;ve been lucky to work with great clients across Kent and Ottawa County.
            Here&apos;s a handful of what they&apos;ve had to say.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="card-soft">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink/80">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-ink">— {t.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-ink/70">
            Worked with us? We&apos;d love your feedback.
          </p>
          <Link href="/contact" className="btn-primary mt-4">
            Leave a review
          </Link>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
