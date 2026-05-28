import Link from 'next/link';
import { Gift, Users, Sparkles } from 'lucide-react';
import { Section, SectionHeader } from '@/components/Section';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Customer Referrals — Master Gardner, LLC',
  description:
    'Refer a friend or neighbor to Master Gardner, LLC and get rewarded.',
};

const STEPS = [
  { icon: Users, title: 'Refer a neighbor', body: 'Send us a friend, family member, or neighbor who could use our services.' },
  { icon: Sparkles, title: 'We take care of them', body: 'Once they sign up for any service, we’ll let you know they’re on board.' },
  { icon: Gift, title: 'You get rewarded', body: 'Receive a thank-you credit toward your next service with us.' },
];

export default function ReferralPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="container-page py-20 sm:py-24">
          <p className="eyebrow">Customer Referrals</p>
          <h1 className="h-display mt-3 max-w-3xl">
            Refer a neighbor. We&apos;ll thank you both.
          </h1>
          <p className="lead mt-5 max-w-2xl">
            Most of our growth comes from happy customers telling their friends. If you&apos;ve
            had a great experience with us, we&apos;d love to make it worth your while.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeader
          eyebrow="How it works"
          title="Three simple steps."
          center
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="card-soft text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-100 text-brand-700">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.body}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl bg-cream p-10 text-center ring-1 ring-black/5">
          <h3 className="h-section">Ready to refer someone?</h3>
          <p className="lead mx-auto mt-3 max-w-xl">
            Have them mention your name when they reach out — or send us their info directly.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Send us a referral
            </Link>
            <a href="tel:+16163661552" className="btn-outline">
              Call (616) 366-1552
            </a>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
