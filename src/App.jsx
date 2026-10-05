import { useState } from 'react';
import useScrollReveal from './hooks/useScrollReveal';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CostEstimator from './components/CostEstimator';
import Pricing from './components/Pricing';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ClientSuggestions from './components/ClientSuggestions';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import WhatsAppFloat from './components/WhatsAppFloat';
import LogoSplash from './components/LogoSplash';
import ClientLoginModal from './components/ClientLoginModal';
import ResumeGate from './components/ResumeGate';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResumeGateOpen, setIsResumeGateOpen] = useState(false);
  useScrollReveal();

  return (
    <div className="min-h-screen bg-paper text-ink relative">
      {showSplash && <LogoSplash onFinished={() => setShowSplash(false)} />}

      <ScrollProgress />
      <ClientLoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ResumeGate key={isResumeGateOpen ? 'open' : 'closed'} isOpen={isResumeGateOpen} onClose={() => setIsResumeGateOpen(false)} />
      <WhatsAppFloat />

      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <main>
        {/* Proof-of-work first: Hero → About → Projects → Skills → Contact,
            all within one scroll for a recruiter. Sales-funnel content
            (Services/Estimator/Pricing/Process/Testimonials/FAQ/Suggestions)
            lives below Contact for freelance visitors instead. */}
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <About onOpenResumeGate={() => setIsResumeGateOpen(true)} />
        <Projects />
        <Skills />
        <Contact />

        <Services />
        <CostEstimator onOpenModal={() => setIsModalOpen(true)} />
        <Pricing />
        <Process />
        <Testimonials />
        <FAQ />
        <ClientSuggestions />
      </main>
      <footer className="py-8 text-center font-mono text-xs text-ink-faint border-t border-line">
        &copy; {new Date().getFullYear()} Praveen Kumar. All rights reserved.
      </footer>
    </div>
  );
}
