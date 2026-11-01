import { useEffect, useState } from 'react';
import useScrollReveal from './hooks/useScrollReveal';
import useMotionFx from './hooks/useMotionFx';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExploreRow from './components/ExploreRow';
import About from './components/About';
import StatsBand from './components/StatsBand';
import Journey from './components/Journey';
import Projects from './components/Projects';
import FutureThinking from './components/FutureThinking';
import Skills from './components/Skills';
import Moments from './components/Moments';
import Certificates from './components/Certificates';
import Screenplay from './components/Screenplay';
import Contact from './components/Contact';
import Services from './components/Services';
import CostEstimator from './components/CostEstimator';
import Pricing from './components/Pricing';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ClientSuggestions from './components/ClientSuggestions';
import WhatsAppFloat from './components/WhatsAppFloat';
import LogoSplash from './components/LogoSplash';
import ClientLoginModal from './components/ClientLoginModal';
import ResumeGate from './components/ResumeGate';
import Cursor from './components/Cursor';
import { profiles, layouts } from './data/story';

const PROFILE_KEY = 'praveen-portfolio-profile-v5';
const IDS = profiles.map((p) => p.id);

function readSavedProfile() {
  try {
    const saved = localStorage.getItem(PROFILE_KEY);
    return IDS.includes(saved) ? saved : null;
  } catch {
    return null;
  }
}
function saveProfile(id) {
  try {
    localStorage.setItem(PROFILE_KEY, id);
  } catch {
    /* storage unavailable — the choice just won't persist */
  }
}

export default function App() {
  const [lastProfile] = useState(readSavedProfile);
  const [profile, setProfile] = useState(() => readSavedProfile() ?? 'main');
  // Returning visitors skip the picker; the profile chip in the nav brings it back.
  const [showSplash, setShowSplash] = useState(() => readSavedProfile() === null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResumeGateOpen, setIsResumeGateOpen] = useState(false);
  const [toast, setToast] = useState('');

  useScrollReveal(profile);
  useMotionFx();

  useEffect(() => {
    if (!toast) return undefined;
    const t = window.setTimeout(() => setToast(''), 3800);
    return () => window.clearTimeout(t);
  }, [toast]);

  const openClientModal = () => setIsModalOpen(true);
  const openResume = () => setIsResumeGateOpen(true);

  const handleSplashFinish = (choice) => {
    const selected = IDS.includes(choice) ? choice : 'main';
    const meta = profiles.find((p) => p.id === selected);
    setProfile(selected);
    saveProfile(selected);
    setShowSplash(false);
    setToast(`Now watching as ${meta.name} — ${meta.toast}`);
    window.scrollTo({ top: 0 });
  };

  const sections = {
    about: <About key="about" onOpenResumeGate={openResume} />,
    journey: <Journey key="journey" />,
    projects: <Projects key="projects" />,
    future: <FutureThinking key="future" />,
    skills: <Skills key="skills" />,
    moments: <Moments key="moments" />,
    certificates: <Certificates key="certificates" />,
    screenplay: <Screenplay key="screenplay" onOpenResume={openResume} />,
    contact: <Contact key="contact" />,
    client: (
      <div className="client-studio-content" key="client">
        <div className="cinema-section-head client-studio-heading">
          <div>
            <span className="section-kicker">NODERRA TECH</span>
            <h2>LET’S BUILD SOMETHING</h2>
            <p>Digital products and websites designed around your business.</p>
          </div>
        </div>
        <Services />
        <CostEstimator onOpenModal={openClientModal} />
        <Pricing />
        <Process />
        <Testimonials />
        <FAQ />
        <ClientSuggestions />
      </div>
    ),
  };

  return (
    <div className="min-h-screen bg-paper text-ink relative netflix-portfolio">
      {showSplash && <LogoSplash onFinished={handleSplashFinish} lastProfile={lastProfile} />}

      <Cursor />
      <ScrollProgress />
      <ClientLoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ResumeGate key={isResumeGateOpen ? 'open' : 'closed'} isOpen={isResumeGateOpen} onClose={() => setIsResumeGateOpen(false)} />
      <WhatsAppFloat />
      {toast && <div className="watch-toast" role="status">{toast}</div>}

      <Navbar profile={profile} onOpenModal={openClientModal} onSwitchProfile={() => setShowSplash(true)} />

      <main>
        <Hero key={`hero-${profile}`} profile={profile} onOpenModal={openClientModal} onOpenResume={openResume} />
        <ExploreRow profile={profile} />
        <StatsBand />
        {layouts[profile].map((key) => sections[key])}
      </main>

      <footer className="continued-screen">
        <span className="section-kicker">THE NEXT EPISODE</span>
        <h2>
          TO BE
          <br />
          <em>CONTINUED…</em>
        </h2>
        <p>
          Praveen Kumar <span>·</span> Developer & Founder, Noderra Tech
        </p>
        <div className="continued-actions">
          <a className="is-primary" href="#contact">▶ LET’S BUILD</a>
          <a href="https://www.linkedin.com/in/praveen-kumar-005489367/" target="_blank" rel="noreferrer">LINKEDIN ↗</a>
          <a href="https://github.com/praveenkumarlodhi001-create" target="_blank" rel="noreferrer">GITHUB ↗</a>
          <a href="mailto:praveenkumarlodhi001@gmail.com">EMAIL ↗</a>
        </div>
        <div className="continued-again">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↻ WATCH AGAIN</button>
          <button onClick={() => setShowSplash(true)}>▶ REPLAY OPENING</button>
        </div>
        <small>© {new Date().getFullYear()} PRAVEEN KUMAR · NODERRA TECH</small>
      </footer>
    </div>
  );
}
