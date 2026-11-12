import { useState } from 'react';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { HERO_IMAGE, KEY_METRICS } from '../data/cerecData';
import { BrandCrest } from './BrandCrest';

interface HeroSectionProps {
  onOpenRegistration: () => void;
}

export function HeroSection({ onOpenRegistration }: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="accueil" className="bg-[#0b1f3f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Editorial Column */}
          <div className="lg:col-span-6 flex flex-col justify-center py-2">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium tracking-wide text-[#e0a526] mb-5">
              <span>Pointe-Noire</span>
              <span aria-hidden="true">·</span>
              <span>République du Congo</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">Depuis 1990</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.1] tracking-tight text-white max-w-xl">
              Construisez votre avenir avec{' '}
              <span className="text-[#e0a526] italic font-semibold">CEREC-ISCOM</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-200/90 leading-relaxed max-w-xl">
              Institut d&apos;enseignement supérieur et de formation qualifiante : licences,
              masters et formations professionnelles en gestion, logistique, commerce
              international, finance et informatique.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenRegistration}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#e0a526] hover:bg-[#eab33a] text-[#0b1f3f] font-semibold text-base transition-transform duration-150 active:scale-[0.99] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>S&apos;inscrire</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#filieres"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-white/30 hover:bg-white/10 text-white font-medium text-base transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Découvrir les filières
              </a>
            </div>
          </div>

          {/* Right Architectural Visual Frame */}
          <div className="lg:col-span-6 flex">
            <div className="relative w-full min-h-[280px] sm:min-h-[360px] lg:min-h-[440px] rounded-2xl overflow-hidden border border-white/15 bg-[#143263]">
              {!imgError ? (
                <img
                  src={HERO_IMAGE}
                  alt="Campus et bibliothèque universitaire CEREC-ISCOM"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#0b1f3f] to-[#1a3e78] text-center">
                  <GraduationCap className="w-14 h-14 text-[#e0a526] mb-3" />
                  <p className="font-serif text-xl text-white">
                    Groupe CEREC-ISCOM
                  </p>
                  <p className="text-sm text-slate-300 mt-1">
                    Pointe-Noire &amp; Brazzaville
                  </p>
                </div>
              )}

              {/* Subtle measured scrim for crest legibility */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#07142b]/80 via-[#07142b]/15 to-transparent pointer-events-none"
              />

              {/* Framed Institutional Crest Seal */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 border border-slate-200/80 shadow-sm flex items-center gap-3.5">
                  <BrandCrest className="h-12 w-auto object-contain shrink-0" />
                  <div className="pr-1">
                    <p className="font-serif font-bold text-sm text-[#0b1f3f] leading-tight">
                      Groupe CEREC-ISCOM
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Enseignement supérieur &amp; qualifiant
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Institutional Proof Strip */}
      <div className="bg-white border-b border-slate-200 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {KEY_METRICS.map((metric) => (
              <div key={metric.value} className="py-6 md:px-8 first:md:pl-0 last:md:pr-0">
                <dt className="font-serif text-2xl sm:text-[1.65rem] font-bold text-[#0b1f3f] tabular-nums">
                  {metric.value}
                </dt>
                <dd className="mt-1 text-sm text-slate-600">{metric.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
