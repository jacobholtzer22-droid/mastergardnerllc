import { MapPin } from 'lucide-react';
import { Section, SectionHeader } from '@/components/Section';
import CTASection from '@/components/CTASection';
import { SERVICE_AREAS } from '@/lib/content';

export const metadata = {
  title: 'Service Area — Master Gardner, LLC',
  description:
    'Master Gardner, LLC serves Ada and the greater Kent and Ottawa County area, including Grand Rapids, Holland, Rockford, and surrounding communities.',
};

export default function ServiceAreaPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="container-page py-20 sm:py-24">
          <p className="eyebrow">Service Area</p>
          <h1 className="h-display mt-3 max-w-3xl">
            Proudly serving West Michigan.
          </h1>
          <p className="lead mt-5 max-w-2xl">
            Based in Ada, we cover Kent and Ottawa County and the communities in between.
            Not sure if we cover your area? Give us a call — chances are, we do.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeader
          eyebrow="Cities we serve"
          title="Communities across Kent &amp; Ottawa County."
          description="If you don’t see your city listed, reach out — we cover most of West Michigan."
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {SERVICE_AREAS.map((city) => (
            <div
              key={city}
              className="flex items-center gap-3 rounded-xl bg-cream px-4 py-3 ring-1 ring-black/5"
            >
              <MapPin className="h-4 w-4 flex-shrink-0 text-brand-700" />
              <span className="text-sm font-medium text-ink/80">{city}</span>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
