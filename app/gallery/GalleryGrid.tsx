'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import { GALLERY, GALLERY_FILTERS, type GalleryCategory } from './gallery-data';

export default function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategory>('all');

  const counts = useMemo(
    () =>
      GALLERY_FILTERS.map(({ key, label }) => ({
        key,
        label,
        count:
          key === 'all'
            ? GALLERY.length
            : GALLERY.filter((i) => i.tags.includes(key)).length,
      })),
    []
  );

  const visible =
    active === 'all' ? GALLERY : GALLERY.filter((i) => i.tags.includes(active));

  return (
    <>
      {/* Category filter — labels + counts, never colour alone */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter photos by service">
        {counts.map((f) => {
          const isActive = f.key === active;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setActive(f.key)}
              aria-pressed={isActive}
              className={`inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full border px-5 text-sm transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${
                isActive
                  ? 'border-brand-700 bg-brand-700 font-semibold text-white shadow-soft'
                  : 'border-black/10 bg-white font-medium text-ink/70 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-800'
              }`}
            >
              {f.label}
              <span className={isActive ? 'text-brand-100' : 'text-ink/40'}>{f.count}</span>
            </button>
          );
        })}
      </div>

      <Stagger
        key={active}
        className="mt-8 grid grid-flow-row-dense grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
        stagger={0.04}
      >
        {visible.map((item) => (
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
                loading="lazy"
                sizes={
                  item.feature || item.wide
                    ? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px'
                    : '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px'
                }
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              {/* Caption is always legible on touch devices; desktop reveals it on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 p-3 text-xs font-semibold text-white transition-all duration-300 sm:p-4 sm:text-sm md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                {item.label}
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>

      <p className="mt-10 text-center text-sm text-ink/60">
        Showing {visible.length} of {GALLERY.length} photos — more added throughout the season.
      </p>
    </>
  );
}
