// "Future Thinking" — ideas that go beyond today's products.
// TO ADD A NEW IDEA FOR EVERYONE: copy one object below, change the text, save and redeploy.
// (You can also open the site with ?owner=1 to draft ideas in your browser and press "COPY AS CODE".)
const futureIdeas = [
  {
    id: 'mastishk',
    featured: true,
    code: 'M.A.S.T.I.S.H.K.',
    title: 'THE MASTISHK INITIATIVE',
    status: 'SCI-FI CONCEPT · WORKING SIMULATOR',
    year: '2026',
    tagline: 'What if a textbook could be loaded like a software update — while you sleep?',
    story:
      'A thought experiment about the far future of learning. In this imagined world, a book is converted into a “knowledge pack” and delivered to a sleeping learner in safe, gradual batches — with safety systems that can cancel the whole process the moment anything looks wrong.',
    built:
      'I turned the idea into a working desktop simulator so it can be explored, not just described: a cyberpunk-styled dashboard with live graphs, background worker threads that keep the UI responsive, an automatic safety abort, and saved session logs. Everything runs on simulated numbers.',
    modules: [
      ['01 · BUFFER', 'Delivers a knowledge pack in small batches with a simulated cooling system.'],
      ['02 · AI CORE', 'Converts text into a pack of simulated signals and gives it a SHA-256 based ID.'],
      ['03 · SAFETY', 'Aborts the run if a simulated heart-rate limit is crossed.'],
      ['04 · GLITCH GUARD', 'Scans a pack for corrupted pulses before anything is delivered.'],
      ['05 · STORAGE', 'Saves every session as a JSON log.'],
    ],
    terminal: [
      '[AI CORE] Reading textbook material…',
      '[SECURITY] Integrity check passed.',
      'Injecting: 35% | Temp (sim): 37.9°C',
      '[ALERT] Cooling system triggered',
      'Injecting: 100% — session saved',
    ],
    stack: 'Python · Tkinter · Multithreading · JSON logging · PyInstaller (.exe)',
    note: 'Pure fiction and a coding exercise: it simulates numbers and is not a real medical or neuroscience device.',
    link: '',
    linkLabel: '',
  },
];

export default futureIdeas;
