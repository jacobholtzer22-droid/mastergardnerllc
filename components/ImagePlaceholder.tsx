import { ImageIcon } from 'lucide-react';

export default function ImagePlaceholder({
  label,
  className = '',
  aspect = 'aspect-[4/3]',
}: {
  label?: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`${aspect} relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-brand-100 via-brand-50 to-brand-200 ring-1 ring-black/5 ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-brand-700/70">
        <ImageIcon className="h-8 w-8" />
        {label && <span className="text-xs font-medium tracking-wide">{label}</span>}
      </div>
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 20%, #ffffff 0, transparent 35%), radial-gradient(circle at 80% 80%, #ffffff 0, transparent 30%)',
        }}
      />
    </div>
  );
}
