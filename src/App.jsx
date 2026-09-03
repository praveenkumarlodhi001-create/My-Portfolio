import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import NicheDemos from './components/NicheDemos';
import Pricing from './components/Pricing';
import Process from './components/Process';
import FAQ from './components/FAQ';
import ClientSuggestions from './components/ClientSuggestions';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import WelcomePopup from './components/WelcomePopup';
import ExitPopup from './components/ExitPopup';
import WhatsAppFloat from './components/WhatsAppFloat';
import LogoSplash from './components/LogoSplash';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-paper text-ink relative">
      {showSplash && <LogoSplash onFinished={() => setShowSplash(false)} />}
      
      <WelcomePopup />
      <ExitPopup />
      <WhatsAppFloat />
      
      <Navbar />
      <main>
        <Hero />
        <Services />
        <NicheDemos />
        <Pricing />
        <Process />
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