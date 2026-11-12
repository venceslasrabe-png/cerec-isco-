import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { CampusGallerySection } from './components/CampusGallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { PartnershipSection } from './components/PartnershipSection';
import { ProgramModal } from './components/ProgramModal';
import { ProgramsSection } from './components/ProgramsSection';
import { RegistrationModal } from './components/RegistrationModal';
import { Filiere } from './data/cerecData';

export default function App() {
  const [selectedFiliere, setSelectedFiliere] = useState<Filiere | null>(null);
  const [regModalOpen, setRegModalOpen] = useState(false);
  const [regDefaultFiliere, setRegDefaultFiliere] = useState<string | undefined>(
    undefined
  );
  const [regDefaultNiveau, setRegDefaultNiveau] = useState<string | undefined>(
    undefined
  );

  const openGeneralRegistration = () => {
    setRegDefaultFiliere(undefined);
    setRegDefaultNiveau(undefined);
    setRegModalOpen(true);
  };

  const openMasterRegistration = () => {
    setRegDefaultFiliere(undefined);
    setRegDefaultNiveau('Master · Partenariat ESTAM Bénin');
    setRegModalOpen(true);
  };

  const handleEnrollFromProgram = (filiereTitle: string) => {
    setSelectedFiliere(null);
    setRegDefaultFiliere(filiereTitle);
    setRegDefaultNiveau('Licence professionnelle');
    setRegModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fb] text-[#161e2e] overflow-x-clip">
      <Navbar onOpenRegistration={openGeneralRegistration} />

      <main className="flex-1">
        <HeroSection onOpenRegistration={openGeneralRegistration} />
        <AboutSection />
        <CampusGallerySection />
        <ProgramsSection onSelectFiliere={setSelectedFiliere} />
        <PartnershipSection onOpenMasterInquiry={openMasterRegistration} />
        <ContactSection />
      </main>

      <Footer />

      <ProgramModal
        filiere={selectedFiliere}
        onClose={() => setSelectedFiliere(null)}
        onEnroll={handleEnrollFromProgram}
      />

      <RegistrationModal
        isOpen={regModalOpen}
        defaultFiliere={regDefaultFiliere}
        defaultNiveau={regDefaultNiveau}
        onClose={() => setRegModalOpen(false)}
      />
    </div>
  );
}
