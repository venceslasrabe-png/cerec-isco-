import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandCrest } from './BrandCrest';

interface NavbarProps {
  onOpenRegistration: () => void;
}

const NAV_LINKS = [
  { href: '#apropos', label: 'À propos' },
  { href: '#filieres', label: 'Filières' },
  { href: '#partenariat', label: 'Partenariat' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar({ onOpenRegistration }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[68px] flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark + emblem (strictly single-line, no subtitle clutter) */}
        <a
          href="#accueil"
          className="flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f3f] rounded-md"
        >
          <BrandCrest className="h-10 w-auto object-contain" />
          <span className="font-serif font-bold text-lg tracking-tight text-[#0b1f3f]">
            CEREC-ISCOM
          </span>
        </a>

        {/* Zone 2: 4 clean single-line navigation links */}
        <nav
          aria-label="Navigation principale"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:text-[#0b1f3f] hover:border-[#e0a526] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f3f] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenRegistration}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#0b1f3f] bg-[#e0a526] hover:bg-[#eab33a] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f3f]"
          >
            S&apos;inscrire
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#0b1f3f] hover:bg-slate-100 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f3f]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0b1f3f]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenRegistration();
              }}
              className="w-full py-3 px-5 text-sm font-semibold text-[#0b1f3f] bg-[#e0a526] hover:bg-[#eab33a] rounded-lg transition-colors cursor-pointer"
            >
              S&apos;inscrire maintenant
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
