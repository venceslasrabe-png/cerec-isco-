import { useEffect } from 'react';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import { Filiere } from '../data/cerecData';

interface ProgramModalProps {
  filiere: Filiere | null;
  onClose: () => void;
  onEnroll: (filiereTitle: string) => void;
}

export function ProgramModal({ filiere, onClose, onEnroll }: ProgramModalProps) {
  useEffect(() => {
    if (!filiere) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [filiere, onClose]);

  if (!filiere) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="program-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#07142b]/70 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl border border-slate-200 max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-[#0b1f3f] px-5 py-6 sm:px-8 sm:py-8 text-white">
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer la fenêtre"
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <p className="text-xs font-medium text-[#e0a526] tabular-nums mb-1.5 pr-10">
            Filière {filiere.number} · {filiere.tracks.join(' · ')}
          </p>
          <h3
            id="program-modal-title"
            className="font-serif text-2xl sm:text-3xl font-bold text-white pr-10"
          >
            {filiere.title}
          </h3>
        </div>

        <div className="p-5 sm:p-8 space-y-6">
          <p className="text-base text-slate-700 leading-relaxed">
            {filiere.fullDescription}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-slate-200">
            <div>
              <h4 className="font-serif text-lg font-bold text-[#0b1f3f] mb-3">
                Compétences clés
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-600">
                {filiere.competences.map((comp) => (
                  <li key={comp} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c58b12] shrink-0 mt-0.5" />
                    <span>{comp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold text-[#0b1f3f] mb-3">
                Débouchés professionnels
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-600">
                {filiere.debouches.map((deb) => (
                  <li key={deb} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0b1f3f] shrink-0 mt-0.5" />
                    <span>{deb}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Disponible à Pointe-Noire &amp; Brazzaville
            </span>
            <button
              type="button"
              onClick={() => onEnroll(filiere.title)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-xl bg-[#e0a526] hover:bg-[#eab33a] text-[#0b1f3f] font-semibold text-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>S&apos;inscrire dans cette filière</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
