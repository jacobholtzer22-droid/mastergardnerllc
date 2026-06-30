'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import CountUp from '@/components/motion/CountUp';

const HEADLINE = ['A', 'beautiful', 'landscape'];

type Stat = {
  value: number;
  label: string;
  suffix?: string;
  decimals?: number;
  display?: string;
};

const STATS: Stat[] = [
  { value: 15, suffix: '+', label: 'Years experience' },
  { value: 5, decimals: 1, label: 'Customer rating' },
  { value: 0, display: 'BBB', label: 'Accredited' },
];

export default function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
  };
  const word: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      };
  const fade: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* Full-bleed photographic background with slow zoom */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 origin-center animate-kenburns">
          <Image
            src="/images/commercial-lawn-stripes.png"
            alt="Freshly striped lawn maintained by Master Gardner, LLC"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Legibility + brand overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/20" />
      </div>

      <div className="container-page relative z-10 grid min-h-[88vh] items-center py-24 sm:py-28 lg:grid-cols-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-7"
        >
          <motion.p
            variants={fade}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-200"
          >
            Master Gardner, LLC · Ada, Michigan
          </motion.p>

          <h1 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
            <span className="inline-flex flex-wrap gap-x-3">
              {HEADLINE.map((w) => (
                <motion.span key={w} variants={word} className="inline-block">
                  {w}
                </motion.span>
              ))}
            </span>
            <motion.span variants={word} className="mt-1 block text-brand-300">
              starts here.
            </motion.span>
          </h1>

          <motion.p variants={fade} className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            Lawn care, landscaping, snow plowing, and salting across Kent and Ottawa County —
            done by a local crew that actually cares about the result, every season of the year.
          </motion.p>

          <motion.div variants={fade} className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/services" className="btn-light">
              View Our Services
            </Link>
          </motion.div>

          <motion.div
            variants={fade}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/15 pt-6 text-sm"
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-semibold text-white">
                  {s.display ? (
                    s.display
                  ) : (
                    <CountUp value={s.value} decimals={s.decimals ?? 0} suffix={s.suffix ?? ''} />
                  )}
                </p>
                <p className="mt-1 text-white/60">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating review card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 lg:col-span-5 lg:mt-0 lg:justify-self-end"
        >
          <div className="animate-float inline-block rounded-2xl bg-white/95 p-5 shadow-soft ring-1 ring-black/5 backdrop-blur">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="mt-3 max-w-xs text-sm font-medium text-ink">
              &ldquo;He is a professional and his work is outstanding. Quick to respond and easy to
              work with.&rdquo;
            </p>
            <p className="mt-2 text-xs font-semibold text-ink/60">— Marge E., Ada MI</p>
          </div>
        </motion.div>
      </div>

      <div className="stripe-divider relative z-10" aria-hidden />
    </section>
  );
}
