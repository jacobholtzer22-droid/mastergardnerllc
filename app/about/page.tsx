import { Leaf, HeartHandshake, Clock, ShieldCheck } from 'lucide-react';
import { Section, SectionHeader } from '@/components/Section';
import CTASection from '@/components/CTASection';
import Photo from '@/components/Photo';
import Reveal from '@/components/motion/Reveal';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';

export const metadata = {
  title: 'About — Master Gardner, LLC',
  description:
    'Locally owned and operated landscaping and lawn care company serving Kent and Ottawa County, Michigan.',
};

const VALUES = [
  { icon: ShieldCheck, title: 'Superior Quality', body: 'We treat every property like it’s our own — and stand behind every job we do.' },
  { icon: HeartHandshake, title: 'Lasting Relationships', body: 'Most of our work comes from repeat customers and referrals. That’s the bar.' },
  { icon: Clock, title: 'Your Time Matters', body: 'We show up when we say we will, communicate clearly, and don’t waste your day.' },
  { icon: Leaf, title: 'Complete Confidence', body: 'Licensed, insured, and BBB accredited — so you can hand off the worry.' },
];

const ON_THE_JOB = [
  {
    src: '/images/crew-truck-trailer.jpg',
    alt: 'Master Gardner truck and equipment trailer staged on a property during a project',
    caption: 'Our own trucks, our own crew — on site start to finish.',
  },
  {
    src: '/images/commercial-streetside.jpg',
    alt: 'Freshly mowed and edged lawn along a commercial storefront and sidewalk',
    caption: 'Commercial accounts kept sharp week after week.',
  },
  {
    src: '/images/snow-plowed-driveway.jpg',
    alt: 'Residential driveway plowed clean at night with snow banked on both sides',
    caption: 'And we show up in January, too.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream">
        <Reveal className="container-page py-20 sm:py-24">
          <p className="eyebrow">About Us</p>
          <h1 className="h-display mt-3 max-w-3xl">
            Crafting outdoor excellence across West Michigan.
          </h1>
          <p className="lead mt-5 max-w-2xl">
            Master Gardner, LLC is a locally owned landscaping and lawn care company based in
            Ada, Michigan. We serve Kent and Ottawa County with year-round property care —
            from spring cleanups to mid-winter plowing.
          </p>
        </Reveal>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal direction="right">
            <Photo
              src="/images/deer-lawn.png"
              alt="A deer resting on a lush, healthy lawn beside evergreen trees"
              aspect="aspect-[4/5]"
              className="transition-transform duration-500 hover:scale-[1.02]"
            />
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <p className="eyebrow">Our story</p>
            <h2 className="h-section mt-3">A local company, built one yard at a time.</h2>
            <div className="lead mt-4 space-y-4">
              <p>
                Master Gardner started with a simple idea: West Michigan deserves a landscaper
                who actually picks up the phone, shows up on time, and leaves the property
                better than they found it.
              </p>
              <p>
                Years later, we&apos;re still that same crew — just with more customers, more
                trucks, and a reputation we&apos;ve worked hard to earn. We&apos;re proud to be
                BBB accredited and to count so many of our neighbors as long-term clients.
              </p>
              <p>
                Whether it&apos;s a weekly mow, a full landscape transformation, or plowing
                you out at 4 AM after a storm — we&apos;d love the chance to take care of your
                property too.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Out on the job */}
        <Stagger className="mt-16 grid gap-4 sm:grid-cols-3" stagger={0.1}>
          {ON_THE_JOB.map((item) => (
            <StaggerItem key={item.src}>
              <figure>
                <Photo src={item.src} alt={item.alt} aspect="aspect-[4/3]" />
                <figcaption className="mt-3 text-sm font-medium text-ink/70">
                  {item.caption}
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Values */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeader
              eyebrow="What we stand for"
              title="The way we work."
              center
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <StaggerItem key={v.title}>
                  <div className="card-soft h-full transition duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-100 text-brand-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">{v.body}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <CTASection />
    </>
  );
}
