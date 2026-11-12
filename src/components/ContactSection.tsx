import { FormEvent, useState } from 'react';
import {
  Check,
  Clock,
  Copy,
  MapPin,
  MessageSquare,
  Phone,
} from 'lucide-react';
import { CAMPUSES, FILIERES, WHATSAPP_BASE } from '../data/cerecData';

export function ContactSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [campus, setCampus] = useState<'Pointe-Noire' | 'Brazzaville'>('Pointe-Noire');
  const [filiere, setFiliere] = useState(FILIERES[0].title);
  const [niveau, setNiveau] = useState('Licence professionnelle');
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = async (id: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // Clipboard API unavailable in restricted contexts
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleanedName = fullName.trim();
    const cleanedPhone = phone.trim();

    if (cleanedName.length < 2) {
      setError('Veuillez indiquer votre nom complet.');
      return;
    }
    if (!/^[+\d\s().-]{6,}$/.test(cleanedPhone)) {
      setError('Veuillez saisir un numéro de téléphone ou WhatsApp valide.');
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Bonjour CEREC-ISCOM, je m'appelle ${fullName.trim() || 'candidat'} (${phone.trim() || 'contact'}). Je souhaite m'inscrire au campus de ${campus} en filière "${filiere}" (parcours : ${niveau}).`
  );

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#c58b12] mb-3">
            Contact &amp; Inscriptions
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0b1f3f]">
            Les inscriptions se poursuivent
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Contactez nos secrétariats pédagogiques pour connaître les conditions
            d&apos;admission, les pièces à fournir et les frais de scolarité.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Campus Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {CAMPUSES.map((loc) => (
              <article
                key={loc.id}
                className="bg-[#f8f9fb] border border-slate-200 rounded-2xl p-6 sm:p-8 flex-1 flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs font-medium text-slate-500 mb-1">
                    {loc.highlight}
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-[#0b1f3f] mb-5">
                    {loc.title}
                  </h3>

                  <div className="space-y-4 text-sm text-slate-700">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#c58b12] shrink-0 mt-1" />
                      <span>
                        <strong className="font-semibold text-[#0b1f3f]">
                          Adresse :
                        </strong>{' '}
                        {loc.address}
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-[#c58b12] shrink-0 mt-1" />
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                        <strong className="font-semibold text-[#0b1f3f]">
                          Téléphones :
                        </strong>
                        {loc.phones.map((ph) => {
                          const copyKey = `${loc.id}-${ph.label}`;
                          const isCopied = copiedId === copyKey;
                          return (
                            <span
                              key={ph.label}
                              className="inline-flex items-center gap-1.5 tabular-nums"
                            >
                              <a
                                href={ph.href}
                                className="font-medium text-[#0b1f3f] hover:text-[#c58b12] underline decoration-slate-300 underline-offset-4"
                              >
                                {ph.label}
                              </a>
                              <button
                                type="button"
                                onClick={() => handleCopy(copyKey, ph.label)}
                                aria-label={`Copier le numéro ${ph.label}`}
                                className="inline-flex items-center justify-center w-7 h-7 rounded-md text-slate-500 hover:text-[#0b1f3f] hover:bg-white transition-colors cursor-pointer"
                              >
                                {isCopied ? (
                                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                                ) : (
                                  <Copy className="w-3.5 h-3.5" />
                                )}
                              </button>
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-[#c58b12] shrink-0 mt-1" />
                      <span className="tabular-nums">
                        <strong className="font-semibold text-[#0b1f3f]">
                          Horaires :
                        </strong>{' '}
                        {loc.hours}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Right Column: Interactive Pre-Registration Form */}
          <div className="lg:col-span-6 bg-[#f8f9fb] border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <p className="text-xs font-medium text-[#c58b12] uppercase tracking-wider mb-1">
                    Pré-inscription apprenant
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-[#0b1f3f]">
                    Demander un dossier d&apos;inscription
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Préparez votre demande et transmettez-la directement à notre équipe
                    d&apos;admission à Pointe-Noire ou Brazzaville.
                  </p>
                </div>

                {error && (
                  <div
                    role="alert"
                    className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-sm text-red-800"
                  >
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-[#0b1f3f] mb-1.5"
                    >
                      Nom complet
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Ex. Jean-Marc Mouanda"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0b1f3f] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm font-medium text-[#0b1f3f] mb-1.5"
                    >
                      Téléphone / WhatsApp
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ex. 06 800 00 00"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 tabular-nums focus:outline-none focus:ring-2 focus:ring-[#0b1f3f] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <span className="block text-sm font-medium text-[#0b1f3f] mb-1.5">
                    Campus souhaité
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    {(['Pointe-Noire', 'Brazzaville'] as const).map((city) => {
                      const active = campus === city;
                      return (
                        <button
                          key={city}
                          type="button"
                          onClick={() => setCampus(city)}
                          className={`py-2.5 px-4 rounded-xl border text-sm font-medium transition-colors cursor-pointer ${
                            active
                              ? 'bg-[#0b1f3f] text-white border-[#0b1f3f]'
                              : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                          }`}
                        >
                          {city}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-filiere"
                      className="block text-sm font-medium text-[#0b1f3f] mb-1.5"
                    >
                      Filière
                    </label>
                    <select
                      id="contact-filiere"
                      value={filiere}
                      onChange={(e) => setFiliere(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0b1f3f]"
                    >
                      {FILIERES.map((f) => (
                        <option key={f.id} value={f.title}>
                          {f.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-niveau"
                      className="block text-sm font-medium text-[#0b1f3f] mb-1.5"
                    >
                      Parcours
                    </label>
                    <select
                      id="contact-niveau"
                      value={niveau}
                      onChange={(e) => setNiveau(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0b1f3f]"
                    >
                      <option value="Licence professionnelle">
                        Licence professionnelle (ISCOM)
                      </option>
                      <option value="Master · Partenariat ESTAM Bénin">
                        Master · Partenariat ESTAM Bénin
                      </option>
                      <option value="Formation qualifiante (CEREC)">
                        Formation qualifiante (CEREC)
                      </option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#e0a526] hover:bg-[#eab33a] text-[#0b1f3f] font-semibold text-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    Préparer ma demande
                  </button>
                  <a
                    href={`${WHATSAPP_BASE}?text=${encodeURIComponent(
                      "Bonjour, je souhaite m'inscrire à CEREC-ISCOM Pointe-Noire."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-[#0b1f3f] font-medium text-sm transition-colors whitespace-nowrap shrink-0"
                  >
                    <MessageSquare className="w-4 h-4 text-[#c58b12]" />
                    <span>Direct WhatsApp</span>
                  </a>
                </div>
              </form>
            ) : (
              <div className="my-auto py-6 space-y-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#0b1f3f]">
                    Demande prête à être envoyée
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    Merci <strong className="text-slate-900">{fullName}</strong>. Votre
                    pré-inscription pour le campus de{' '}
                    <strong className="text-slate-900">{campus}</strong> en filière{' '}
                    <strong className="text-slate-900">{filiere}</strong> ({niveau}) est
                    prête.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={`${WHATSAPP_BASE}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#e0a526] hover:bg-[#eab33a] text-[#0b1f3f] font-semibold text-sm transition-colors whitespace-nowrap shrink-0"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Envoyer sur WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-sm font-medium text-slate-700 cursor-pointer"
                  >
                    Modifier
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
