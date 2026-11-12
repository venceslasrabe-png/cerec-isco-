import { FormEvent, useEffect, useState } from 'react';
import { Check, MessageSquare, X } from 'lucide-react';
import { FILIERES, WHATSAPP_BASE } from '../data/cerecData';
import { BrandCrest } from './BrandCrest';

interface RegistrationModalProps {
  isOpen: boolean;
  defaultFiliere?: string;
  defaultNiveau?: string;
  onClose: () => void;
}

export function RegistrationModal({
  isOpen,
  defaultFiliere,
  defaultNiveau,
  onClose,
}: RegistrationModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [campus, setCampus] = useState<'Pointe-Noire' | 'Brazzaville'>('Pointe-Noire');
  const [filiere, setFiliere] = useState(defaultFiliere || FILIERES[0].title);
  const [niveau, setNiveau] = useState(defaultNiveau || 'Licence professionnelle');
  const [error, setError] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (defaultFiliere) setFiliere(defaultFiliere);
    if (defaultNiveau) setNiveau(defaultNiveau);
  }, [defaultFiliere, defaultNiveau]);

  useEffect(() => {
    if (!isOpen) return;
    setReady(false);
    setError(null);
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError('Veuillez indiquer votre nom complet.');
      return;
    }
    if (!/^[+\d\s().-]{6,}$/.test(phone.trim())) {
      setError('Veuillez saisir un numéro de téléphone valide.');
      return;
    }
    setError(null);
    setReady(true);
  };

  const whatsappText = encodeURIComponent(
    `Bonjour CEREC-ISCOM, je m'appelle ${name.trim()} (${phone.trim()}). Je souhaite m'inscrire au campus de ${campus} en filière "${filiere}" (${niveau}).`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reg-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07142b]/70 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl border border-slate-200 max-w-lg w-full max-h-[92vh] overflow-y-auto p-5 sm:p-8 shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-5 right-5 w-10 h-10 rounded-full text-slate-500 hover:text-[#0b1f3f] hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <BrandCrest className="h-11 w-auto object-contain" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#c58b12]">
              Inscriptions ouvertes
            </p>
            <h3
              id="reg-modal-title"
              className="font-serif text-xl sm:text-2xl font-bold text-[#0b1f3f]"
            >
              Inscription apprenant
            </h3>
          </div>
        </div>

        {!ready ? (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {error && (
              <div
                role="alert"
                className="p-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-800"
              >
                {error}
              </div>
            )}

            <div>
              <label
                htmlFor="modal-name"
                className="block text-sm font-medium text-[#0b1f3f] mb-1"
              >
                Nom complet
              </label>
              <input
                id="modal-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex. Grâce Nzaba"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b1f3f]"
              />
            </div>

            <div>
              <label
                htmlFor="modal-phone"
                className="block text-sm font-medium text-[#0b1f3f] mb-1"
              >
                Téléphone / WhatsApp
              </label>
              <input
                id="modal-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ex. 06 879 07 07"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm tabular-nums focus:outline-none focus:ring-2 focus:ring-[#0b1f3f]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="modal-campus"
                  className="block text-sm font-medium text-[#0b1f3f] mb-1"
                >
                  Campus
                </label>
                <select
                  id="modal-campus"
                  value={campus}
                  onChange={(e) =>
                    setCampus(e.target.value as 'Pointe-Noire' | 'Brazzaville')
                  }
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0b1f3f]"
                >
                  <option value="Pointe-Noire">Pointe-Noire</option>
                  <option value="Brazzaville">Brazzaville</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="modal-niveau"
                  className="block text-sm font-medium text-[#0b1f3f] mb-1"
                >
                  Parcours
                </label>
                <select
                  id="modal-niveau"
                  value={niveau}
                  onChange={(e) => setNiveau(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0b1f3f]"
                >
                  <option value="Licence professionnelle">Licence</option>
                  <option value="Master · Partenariat ESTAM Bénin">
                    Master (ESTAM)
                  </option>
                  <option value="Formation qualifiante (CEREC)">
                    Qualifiant (CEREC)
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="modal-filiere"
                className="block text-sm font-medium text-[#0b1f3f] mb-1"
              >
                Filière choisie
              </label>
              <select
                id="modal-filiere"
                value={filiere}
                onChange={(e) => setFiliere(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0b1f3f]"
              >
                {FILIERES.map((f) => (
                  <option key={f.id} value={f.title}>
                    {f.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-[#e0a526] hover:bg-[#eab33a] text-[#0b1f3f] font-semibold text-sm transition-colors cursor-pointer"
              >
                Valider la demande
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-4 py-2">
            <div className="flex items-center gap-3 text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <Check className="w-5 h-5 shrink-0" />
              <p className="text-sm">
                Votre demande pour <strong>{filiere}</strong> ({niveau}) à{' '}
                <strong>{campus}</strong> est prête à être transmise.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setReady(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                Modifier
              </button>
              <a
                href={`${WHATSAPP_BASE}?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#e0a526] hover:bg-[#eab33a] text-[#0b1f3f] font-semibold text-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Finaliser sur WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
