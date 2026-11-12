import { useState } from 'react';
import { LOGO_JPG_PATH, LOGO_SVG_PATH } from '../data/cerecData';

interface BrandCrestProps {
  className?: string;
  alt?: string;
}

export function BrandCrest({
  className = 'h-10 w-auto',
  alt = 'Emblème officiel CEREC-ISCOM',
}: BrandCrestProps) {
  const [sourceIndex, setSourceIndex] = useState<0 | 1 | 2>(0);

  if (sourceIndex === 2) {
    return (
      <span
        aria-label={alt}
        className={`inline-flex items-center justify-center rounded-lg bg-[#0b1f3f] text-[#e0a526] font-serif font-bold text-lg px-3 py-1.5 ${className}`}
      >
        CI
      </span>
    );
  }

  return (
    <img
      src={sourceIndex === 0 ? LOGO_SVG_PATH : LOGO_JPG_PATH}
      alt={alt}
      referrerPolicy="no-referrer"
      className={className}
      onError={() => {
        setSourceIndex((prev) => (prev === 0 ? 1 : 2));
      }}
    />
  );
}
