import type { LucideIcon } from 'lucide-react';

/**
 * Branded panel used in place of a photo for services we don't have
 * shootable imagery for yet (e.g. salting, which happens mid-storm at night).
 * Designed to read as an intentional graphic, not a missing image.
 */
export default function ServiceVisual({
  icon: Icon,
  title,
  caption,
  aspect = 'aspect-[5/4]',
  className = '',
}: {
  icon: LucideIcon;
  title: string;
  caption?: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`${aspect} relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-ink via-brand-900 to-brand-800 ring-1 ring-black/10 ${className}`}
    >
      {/* mowing-stripe motif, dialed way back */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(115deg, #ffffff 0, #ffffff 18px, transparent 18px, transparent 40px)',
        }}
      />
      <div
        aria-hidden
        className="absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, #a4c684 0, transparent 70%)' }}
      />

      <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white/10 text-brand-200 ring-1 ring-white/15 backdrop-blur">
          <Icon className="h-8 w-8" />
        </div>
        <p className="mt-5 font-display text-2xl font-semibold text-white">{title}</p>
        {caption && (
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-brand-100/80">{caption}</p>
        )}
      </div>
    </div>
  );
}
