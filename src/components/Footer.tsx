import { BrandCrest } from './BrandCrest';

export function Footer() {
  return (
    <footer className="bg-[#07142b] text-slate-300 border-t border-[#143263]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3.5">
            <div className="bg-white rounded-xl p-2 shrink-0">
              <BrandCrest className="h-9 w-auto object-contain" />
            </div>
            <div>
              <p className="font-serif font-bold text-lg text-white">
                Groupe CEREC-ISCOM
              </p>
              <p className="text-xs text-slate-400">
                Enseignement supérieur &amp; formation qualifiante · Depuis 1990
              </p>
            </div>
          </div>

          <nav
            aria-label="Liens de pied de page"
            className="flex flex-wrap items-center gap-6 text-sm text-slate-300"
          >
            <a href="#apropos" className="hover:text-[#e0a526] transition-colors">
              À propos
            </a>
            <a href="#filieres" className="hover:text-[#e0a526] transition-colors">
              Filières
            </a>
            <a href="#partenariat" className="hover:text-[#e0a526] transition-colors">
              Partenariat
            </a>
            <a href="#contact" className="hover:text-[#e0a526] transition-colors">
              Contact
            </a>
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Groupe CEREC-ISCOM · Pointe-Noire, République du Congo</p>
          <p>Pointe-Noire (Route de la base) · Brazzaville (Plateau des 15 ans)</p>
        </div>
      </div>
    </footer>
  );
}
