import { ArrowRight, Globe2 } from 'lucide-react';

interface PartnershipSectionProps {
  onOpenMasterInquiry: () => void;
}

export function PartnershipSection({
  onOpenMasterInquiry,
}: PartnershipSectionProps) {
  return (
    <section id="partenariat" className="py-12 sm:py-16 lg:py-20 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0b1f3f] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 border border-[#1a3a6f] grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#e0a526] mb-3">
              <Globe2 className="w-4 h-4 shrink-0" />
              <span>Partenariat académique international</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
              Des masters en partenariat avec l&apos;ESTAM Bénin
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-200/90 max-w-2xl leading-relaxed">
              Poursuivez votre parcours jusqu&apos;au grade de Master grâce à une
              coopération académique internationale reconnue, alliant rigueur
              universitaire et exigences professionnelles.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              type="button"
              onClick={onOpenMasterInquiry}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 min-h-[48px] px-6 py-3.5 rounded-xl bg-[#e0a526] hover:bg-[#eab33a] text-[#0b1f3f] font-semibold text-base transition-transform duration-150 active:scale-[0.99] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Se renseigner</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
