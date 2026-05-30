import Image from 'next/image';

export default function Photo({
  src,
  alt,
  className = '',
  aspect = 'aspect-[4/3]',
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  aspect?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`${aspect} relative w-full overflow-hidden rounded-2xl bg-brand-100 ring-1 ring-black/5 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}
