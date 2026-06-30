import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Section, SectionHeader } from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/motion/Reveal';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';

export const metadata = {
  title: 'Contact — Master Gardner, LLC',
  description:
    'Get in touch with Master Gardner, LLC for a free quote on landscaping, lawn care, snow plowing, or salting in Ada, MI.',
};

const FAQ = [
  {
    q: 'Do you offer free quotes?',
    a: 'Yes — every quote is free, and we typically respond within one business day. We’ll come look at the property when needed at no charge.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We cover Ada, Grand Rapids, Holland, Rockford, Forest Hills, Caledonia, Grand Haven, and most of Kent and Ottawa County. Not sure if you’re in our area? Just ask.',
  },
  {
    q: 'Do you do residential and commercial?',
    a: 'Both. We work with homeowners, condo associations, HOAs, and commercial property managers across West Michigan.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes — fully licensed, insured, and BBB accredited. We’re happy to provide documentation on request.',
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream">
        <Reveal className="container-page py-20 sm:py-24">
          <p className="eyebrow">Contact</p>
          <h1 className="h-display mt-3 max-w-3xl">
            Get a free quote.
          </h1>
          <p className="lead mt-5 max-w-2xl">
            Fill out the form below or call us directly. We respond to most inquiries within
            one business day.
          </p>
        </Reveal>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-5">
          <Reveal direction="right" className="lg:col-span-3">
            <ContactForm />
          </Reveal>
          <Reveal as="div" direction="left" delay={0.1} className="space-y-6 lg:col-span-2">
            <div className="card-soft">
              <h3 className="font-display text-xl font-semibold text-ink">
                Get in touch
              </h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-brand-700" />
                  <div>
                    <p className="font-medium text-ink">Phone</p>
                    <a href="tel:+16163661552" className="text-ink/70 hover:text-brand-800">
                      (616) 366-1552
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-brand-700" />
                  <div>
                    <p className="font-medium text-ink">Email</p>
                    <a href="mailto:info@mastergardnerllc.com" className="text-ink/70 hover:text-brand-800">
                      info@mastergardnerllc.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-brand-700" />
                  <div>
                    <p className="font-medium text-ink">Location</p>
                    <p className="text-ink/70">Ada, MI 49301</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 text-brand-700" />
                  <div>
                    <p className="font-medium text-ink">Hours</p>
                    <p className="text-ink/70">Mon–Fri · 9 AM – 5 PM</p>
                    <p className="text-ink/60 text-xs">Weekend appointments available</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-200">
              <p className="text-sm font-semibold text-brand-800">Need it fast?</p>
              <p className="mt-2 text-sm text-ink/80">
                Storm coming in or last-minute job? Give us a call — we&apos;ll do our best to
                accommodate.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeader
              eyebrow="FAQ"
              title="Frequently asked questions."
              center
            />
          </Reveal>
          <Stagger
            className="mx-auto mt-12 max-w-3xl divide-y divide-black/10 rounded-2xl bg-white p-2 shadow-soft ring-1 ring-black/5"
            stagger={0.07}
          >
            {FAQ.map((item, i) => (
              <StaggerItem as="div" key={i} className="group p-4">
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-semibold text-ink">
                  {item.q}
                  <span className="text-brand-700 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.a}</p>
              </details>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
