import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import NicheDemos from './components/NicheDemos';
import CostEstimator from './components/CostEstimator';
import Pricing from './components/Pricing';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ClientSuggestions from './components/ClientSuggestions';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import WelcomePopup from './components/WelcomePopup';
import ExitPopup from './components/ExitPopup';
import WhatsAppFloat from './components/WhatsAppFloat';
import LogoSplash from './components/LogoSplash';
import ClientLoginModal from './components/ClientLoginModal';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-paper text-ink relative">
      {showSplash && <LogoSplash onFinished={() => setShowSplash(false)} />}
      
      <ClientLoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <WelcomePopup />
      <ExitPopup />
      <WhatsAppFloat />
      
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <Services />
        <NicheDemos />
        <CostEstimator onOpenModal={() => setIsModalOpen(true)} />
        <Pricing />
        <Process />
        <Testimonials />
        <FAQ />
        <ClientSuggestions />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-8 text-center font-mono text-xs text-ink-faint border-t border-line">
        &copy; {new Date().getFullYear()} Praveen Kumar. All rights reserved.
      </footer>
    </div>
  );
}