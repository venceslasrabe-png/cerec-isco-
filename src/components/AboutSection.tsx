import {
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
  Globe,
  GraduationCap,
} from 'lucide-react';
import { CAMPUS_ATOUTS, CampusAtout, ENTITIES } from '../data/cerecData';

function renderAtoutIcon(name: CampusAtout['iconName']) {
  const cls = 'w-5 h-5 text-[#0b1f3f]';
  switch (name) {
    case 'cap':
      return <GraduationCap className={cls} />;
    case 'diploma':
      return <Award className={cls} />;
    case 'book':
      return <BookOpen className={cls} />;
    case 'globe':
      return <Globe className={cls} />;
    case 'campus':
      return <Building2 className={cls} />;
    case 'check':
      return <CheckCircle2 className={cls} />;
  }
}

export function AboutSection() {
  return (
    <section id="apropos" className="py-16 lg:py-24 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Institutional narrative + 2 complementary entities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#c58b12] mb-3">
              À propos
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0b1f3f] leading-tight">
              Une référence de l&apos;enseignement privé au Congo
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-2xl">
              Le groupe CEREC-ISCOM est reconnu comme la première école supérieure privée de
              formation professionnelle de la République du Congo. Fondé en 1990, il réunit
              deux entités complémentaires, avec des campus à Brazzaville et à Pointe-Noire
              ainsi que des centres de formation professionnelle.
            </p>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
              <span>Pointe-Noire · Route de la base</span>
              <span aria-hidden="true" className="text-slate-300">
                /
              </span>
              <span>Brazzaville · Plateau des 15 ans</span>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 gap-5">
            {ENTITIES.map((entity) => (
              <article
                key={entity.name}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 transition-colors duration-150 hover:border-slate-300"
              >
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <div className="flex items-baseline gap-3">
                    <span className="text-sm font-semibold text-[#c58b12] tabular-nums">
                      {entity.number}.
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#0b1f3f]">
                      {entity.name}
                    </h3>
                  </div>
                  <span className="text-xs font-medium text-slate-500 text-right">
                    {entity.focus}
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-700 mb-2">
                  {entity.fullName}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {entity.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* 6 Campus Highlights in clean architectural grid */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#c58b12] mb-2">
                Cadre académique
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0b1f3f]">
                Un environnement structuré pour réussir
              </h3>
            </div>
            <p className="text-sm text-slate-600 max-w-md">
              Des parcours adaptés aussi bien aux bacheliers qu&apos;aux professionnels en
              perfectionnement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAMPUS_ATOUTS.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-xl p-5 flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-lg bg-[#fff4d6] flex items-center justify-center shrink-0">
                  {renderAtoutIcon(item.iconName)}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-xs text-slate-500 tabular-nums mb-0.5">
                    <span>{item.number}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.subtitle}</span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#0b1f3f] leading-snug">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
