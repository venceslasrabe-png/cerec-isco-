import { useState } from 'react';
import {
  Briefcase,
  Calculator,
  Globe,
  Laptop,
  Pause,
  Play,
  TrendingUp,
  Truck,
} from 'lucide-react';
import { FILIERES, Filiere, TrackCategory } from '../data/cerecData';

interface ProgramsSectionProps {
  onSelectFiliere: (filiere: Filiere) => void;
}

const FILTER_OPTIONS: { id: TrackCategory; label: string }[] = [
  { id: 'all', label: 'Toutes les filières' },
  { id: 'iscom', label: 'ISCOM · Licences & Masters' },
  { id: 'cerec', label: 'CEREC · Qualifiant' },
];

function getProgramIcon(id: string) {
  const cls = 'w-[26px] h-[26px] stroke-[1.8] text-[#0b1f3f]';
  switch (id) {
    case 'gestion':
      return <Briefcase className={cls} />;
    case 'gestion-comptable-financiere':
      return <Calculator className={cls} />;
    case 'logistique':
      return <Truck className={cls} />;
    case 'commerce-international':
      return <Globe className={cls} />;
    case 'finance':
      return <TrendingUp className={cls} />;
    default:
      return <Laptop className={cls} />;
  }
}

export function ProgramsSection({ onSelectFiliere }: ProgramsSectionProps) {
  const [filter, setFilter] = useState<TrackCategory>('all');
  const [paused, setPaused] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const visiblePrograms = FILIERES.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'iscom') return item.category === 'iscom' || item.category === 'both';
    return item.category === 'cerec' || item.category === 'both';
  });

  // Duplicate items for seamless infinite marquee loop (same technique as original HTML)
  const renderCard = (filiere: Filiere, clone = false) => (
    <article
      key={clone ? `${filiere.id}-clone` : filiere.id}
      aria-hidden={clone || undefined}
      onClick={() => onSelectFiliere(filiere)}
      className="filiere-card cursor-pointer text-left"
    >
      <span className="filiere-badge" aria-hidden="true">
        {getProgramIcon(filiere.id)}
      </span>

      <div
        className="filiere-img"
        style={{ background: filiere.gradient }}
      >
        {!failedImages[filiere.id] && (
          <img
            src={filiere.image}
            alt={clone ? '' : filiere.title}
            loading="lazy"
            referrerPolicy="no-referrer"
            className={filiere.imagePosition}
            onError={() =>
              setFailedImages((prev) => ({ ...prev, [filiere.id]: true }))
            }
          />
        )}
        <span className="absolute z-[2] left-[14px] bottom-[10px] font-serif font-bold text-2xl text-[#e0a526] tabular-nums">
          {filiere.number}
        </span>
      </div>

      <div className="pt-[34px] px-[22px] pb-[24px]">
        <p className="text-xs text-slate-500 mb-1.5 truncate">
          {filiere.tracks.join(' · ')}
        </p>
        <h3 className="font-serif text-[1.15rem] font-bold text-[#0b1f3f] mb-1.5 leading-snug">
          {filiere.title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          {filiere.shortDescription}
        </p>
      </div>
    </article>
  );

  return (
    <section id="filieres" className="py-16 lg:py-24 bg-[#f8f9fb] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#c58b12] mb-3">
              Nos filières
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0b1f3f]">
              Des domaines tournés vers l&apos;emploi
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-xl">
              Une offre de formation couvrant les métiers clés de l&apos;économie.
              Survolez pour mettre en pause ou cliquez sur une filière pour consulter le
              programme.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start lg:self-auto">
            <div
              role="tablist"
              aria-label="Filtrer par parcours"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-white rounded-xl border border-slate-200"
            >
              {FILTER_OPTIONS.map((opt) => {
                const active = filter === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(opt.id)}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f3f] ${
                      active
                        ? 'bg-[#0b1f3f] text-white'
                        : 'text-slate-600 hover:text-[#0b1f3f]'
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>

            {filter === 'all' && (
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? 'Reprendre le défilement' : 'Mettre en pause'}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-medium text-[#0b1f3f] hover:bg-slate-50 transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                {paused ? (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>Reprendre</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>Pause</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Infinite Marquee Track (when showing all) or Static Filtered Grid */}
      {filter === 'all' ? (
        <div
          className="filiere-marquee"
          data-paused={paused ? 'true' : 'false'}
          aria-label="Nos filières en défilement continu"
        >
          <div className="filiere-track">
            {visiblePrograms.map((f) => renderCard(f, false))}
            {visiblePrograms.map((f) => renderCard(f, true))}
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-6">
          <div className="flex flex-wrap justify-center gap-6">
            {visiblePrograms.map((f) => renderCard(f, false))}
          </div>
        </div>
      )}
    </section>
  );
}
