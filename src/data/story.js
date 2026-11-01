// Everything the "series" structure needs. Keep claims identical to the resume.

export const profiles = [
  { id: 'main', name: 'Praveen', sub: 'The full series, in order', badge: 'MAIN', tile: 'tile-red', photo: '/images/praveen-avatar.jpg', toast: 'the full story, in order' },
  { id: 'recruiter', name: 'Recruiter', sub: 'Resume, achievements & skills first', glyph: 'R', tile: 'tile-blue', toast: 'resume, achievements & skills first' },
  { id: 'developer', name: 'Developer', sub: 'Projects, stack & GitHub first', glyph: '</>', tile: 'tile-green', toast: 'projects, stack & GitHub first' },
  { id: 'client', name: 'Client', sub: 'Noderra Tech services first', glyph: 'N', tile: 'tile-gold', toast: 'Noderra Tech services first' },
];

// What plays first for each profile (hero + explore row are always on top).
export const layouts = {
  main: ['about', 'journey', 'projects', 'future', 'skills', 'moments', 'certificates', 'screenplay', 'contact'],
  recruiter: ['screenplay', 'moments', 'certificates', 'skills', 'projects', 'journey', 'about', 'future', 'contact'],
  developer: ['projects', 'skills', 'journey', 'future', 'moments', 'certificates', 'screenplay', 'about', 'contact'],
  client: ['client', 'projects', 'moments', 'certificates', 'about', 'contact'],
};

export const navLinks = {
  main: [['#about', 'Story'], ['#journey', 'Journey'], ['#projects', 'Originals'], ['#moments', 'Moments'], ['#stack', 'Skills'], ['#screenplay', 'Resume']],
  recruiter: [['#screenplay', 'Resume'], ['#moments', 'Moments'], ['#stack', 'Skills'], ['#projects', 'Originals'], ['#journey', 'Journey']],
  developer: [['#projects', 'Originals'], ['#stack', 'Skills'], ['#journey', 'Journey'], ['#future', 'Future'], ['#moments', 'Moments']],
  client: [['#services', 'Services'], ['#pricing', 'Pricing'], ['#projects', 'Originals'], ['#faq', 'FAQ'], ['#contact', 'Contact']],
};

export const heroCta = {
  main: { label: 'Play my story', href: '#about', second: 'resume' },
  recruiter: { label: 'Play resume', href: '#screenplay', second: 'resume' },
  developer: { label: 'See my projects', href: '#projects', second: 'github' },
  client: { label: 'Explore Noderra Tech', href: '#services', second: 'build' },
};

// "Continue Exploring" episode cards
export const episodes = [
  { id: 'story', ep: '01', title: 'THE FULL STORY', sub: 'About · Praveen', href: '#about', needs: 'about', grad: 'linear-gradient(140deg,#3a0a8c,#8a3df0)', mark: 'ME', progress: 70 },
  { id: 'moments', ep: '02', title: 'MY ACHIEVEMENTS', sub: '5 moments · 7 certifications', href: '#moments', needs: 'moments', grad: 'linear-gradient(140deg,#6d0710,#e50914)', mark: '★', progress: 55 },
  { id: 'skills', ep: '03', title: 'MY SKILLS', sub: '6 domains', href: '#stack', needs: 'skills', grad: 'linear-gradient(140deg,#073550,#1693c9)', mark: '</>', progress: 80 },
  { id: 'projects', ep: '04', title: 'MY PROJECTS', sub: '3 originals', href: '#projects', needs: 'projects', grad: 'linear-gradient(140deg,#5b3a05,#e0902a)', mark: '▶', progress: 45 },
  { id: 'journey', ep: '05', title: 'MY JOURNEY', sub: '5 seasons', href: '#journey', needs: 'journey', grad: 'linear-gradient(140deg,#0d4a37,#19b57f)', mark: 'S5', progress: 35 },
  { id: 'future', ep: '06', title: 'FUTURE THINKING', sub: 'Ideas beyond today', href: '#future', needs: 'future', grad: 'linear-gradient(140deg,#073c3a,#1fb5a8)', mark: '?', progress: 20 },
  { id: 'resume', ep: '07', title: 'THE RESUME', sub: 'Education & experience', href: '#screenplay', needs: 'screenplay', grad: 'linear-gradient(140deg,#2c2c2c,#6a6a6a)', mark: 'CV', progress: 90 },
  { id: 'services', ep: '08', title: 'NODERRA TECH', sub: 'Hire me to build', href: '#services', needs: 'client', grad: 'linear-gradient(140deg,#0e2a52,#2f7bff)', mark: 'N', progress: 30 },
];
export const episodeOrder = {
  main: ['story', 'moments', 'skills', 'projects', 'journey', 'future', 'resume', 'services'],
  recruiter: ['resume', 'moments', 'skills', 'projects', 'story', 'journey', 'future', 'services'],
  developer: ['projects', 'skills', 'journey', 'future', 'moments', 'resume', 'story', 'services'],
  client: ['services', 'projects', 'moments', 'story'],
};

export const moments = [
  { k: 'HACKERRANK', big: '5★ GOLD', text: 'Gold badge in Java, 4★ in Python, 25+ problems solved.', href: 'https://www.hackerrank.com/profile/praveenkumarlod1', cta: 'View profile', tone: 'gold' },
  { k: 'NPTEL ELITE × 2', big: 'JAVA + ML', text: 'Elite certifications from IIT Kharagpur (Java) and IIT Madras (Machine Learning).', href: '#certificates', cta: 'See certificates', tone: 'red' },
  { k: 'TOP PERFORMER', big: 'ML WITH AI', text: '8-week training by Internshala × IITM Pravartak — completed as a top performer.', href: '#certificates', cta: 'See certificate', tone: 'blue' },
  { k: 'GOOGLE PLAY · OPEN TESTING', big: 'ROASTIFY', text: 'Architected, signed and released solo through Play Console.', href: 'https://play.google.com/store/apps/details?id=com.praveen.taporigpt', cta: 'Open on Play Store', tone: 'green' },
  { k: 'GOOGLE PLAY · CLOSED TESTING', big: 'BOL KHATA', text: 'Full-stack udhar ledger app, released to Closed Testing.', href: 'https://play.google.com/store/apps/details?id=com.bolkhata.app', cta: 'Open on Play Store', tone: 'purple' },
];

export const seasons = [
  {
    id: 's1', label: 'S01', name: 'The Beginning',
    blurb: 'B.Tech in Computer Science begins — programming fundamentals and the habit of building.',
    episodes: [
      { t: 'THE FIRST COMMIT', y: 'Fundamentals', d: 'C++, Java and core CS: data structures, OOP, databases, operating systems and networks.', g: 'linear-gradient(140deg,#3a0a8c,#8a3df0)' },
      { t: 'PROBLEM SOLVER', y: 'Practice', d: 'Solving problems on HackerRank, LeetCode and GeeksforGeeks — Java earned a 5★ Gold badge.', g: 'linear-gradient(140deg,#5b3a05,#e0902a)' },
    ],
  },
  {
    id: 's2', label: 'S02', name: 'Enter: Java & ML',
    blurb: 'Formal courses that turned curiosity into depth.',
    episodes: [
      { t: 'THE JAVA ELITE', y: 'Jan–Apr 2025', d: 'NPTEL Programming in Java (IIT Kharagpur) — Elite.', g: 'linear-gradient(140deg,#6d0710,#e50914)' },
      { t: 'THE ML ELITE', y: 'Jul–Oct 2025', d: 'NPTEL Introduction to Machine Learning (IIT Madras) — Elite.', g: 'linear-gradient(140deg,#073550,#1693c9)' },
      { t: 'TOP PERFORMER', y: 'Aug 2025', d: 'Machine Learning with AI — Internshala × IITM Pravartak.', g: 'linear-gradient(140deg,#0d4a37,#19b57f)' },
    ],
  },
  {
    id: 's3', label: 'S03', name: 'Learning to Build',
    blurb: 'Theory became software — apps, backends and websites for real needs.',
    episodes: [
      { t: 'THE MOBILE TURN', y: 'React Native', d: 'Cross-platform apps with React Native and Expo, backed by Node.js, Firebase and MongoDB.', g: 'linear-gradient(140deg,#073c3a,#1fb5a8)' },
      { t: 'THE LOCAL BUSINESS', y: 'Apna Oil Mill', d: 'A bilingual website with 3D cards and a payment QR for a real oil mill — live on Vercel.', g: 'linear-gradient(140deg,#4a2c05,#e0902a)' },
    ],
  },
  {
    id: 's4', label: 'S04', name: 'Building Real Products',
    blurb: 'Two apps released on Google Play, and a studio around them.',
    episodes: [
      { t: 'THE LAUNCH', y: 'Jul 2026', d: 'Roastify (TaporiGPT): five AI personas at 60 FPS — Google Play Open Testing.', g: 'linear-gradient(140deg,#6d0710,#e50914)' },
      { t: 'THE LEDGER', y: '2026', d: 'Bol Khata: voice-first udhar ledger with offline sync — Google Play Closed Testing.', g: 'linear-gradient(140deg,#2b1b08,#c9962b)' },
      { t: 'THE STUDIO', y: 'Noderra Tech', d: 'Websites and apps for clients, one project at a time.', g: 'linear-gradient(140deg,#0e2a52,#2f7bff)' },
    ],
  },
  {
    id: 's5', label: 'S05', name: "What's Next",
    blurb: 'Final year, internships and bigger ideas.',
    episodes: [
      { t: 'THE INTERNSHIP', y: 'Now', d: 'Open to internships and select freelance builds as a mobile / software developer.', g: 'linear-gradient(140deg,#222,#666)' },
      { t: 'THE WHAT-IF', y: 'Future Thinking', d: 'Concept builds like Mastishk — the questions beyond client work.', g: 'linear-gradient(140deg,#073c3a,#1fb5a8)' },
      { t: 'THE FOUNDER', y: 'Someday', d: 'Building a startup of my own is the long game.', g: 'linear-gradient(140deg,#3a0a8c,#e50914)' },
    ],
  },
];

// Skill Universe — `used` and `cert` are true statements from the resume / projects.
export const skillGroups = [
  { name: 'Languages', sub: 'Java is the primary language', skills: [
    { n: 'Java', used: ['DSA practice (HackerRank 5★ Gold)'], cert: ['NPTEL Programming in Java'] },
    { n: 'JavaScript', used: ['Roastify', 'Bol Khata', 'Apna Oil Mill'] },
    { n: 'Python', used: ['Mastishk'], cert: ['NPTEL Machine Learning', 'ML with AI'] },
    { n: 'C / C++', used: ['OOP & DSA coursework'] },
    { n: 'SQL', used: ['DBMS coursework'] },
  ] },
  { name: 'Mobile', sub: 'Shipped apps, not just prototypes', skills: [
    { n: 'React Native', used: ['Roastify', 'Bol Khata'] },
    { n: 'Expo', used: ['Bol Khata'] },
    { n: 'Cross-platform UI', used: ['Roastify', 'Bol Khata'] },
    { n: 'Performance tuning', used: ['Roastify (60 FPS persona switching)'] },
    { n: 'App release', used: ['Roastify', 'Bol Khata'] },
  ] },
  { name: 'Backend', sub: 'Services that stay up', skills: [
    { n: 'Node.js', used: ['Roastify', 'Bol Khata'] },
    { n: 'Express.js', used: ['Bol Khata'] },
    { n: 'REST APIs', used: ['Bol Khata'] },
    { n: 'MongoDB', used: ['Bol Khata'] },
    { n: 'Firebase', used: ['Roastify (Auth + Firestore)'] },
    { n: 'JWT / OTP auth', used: ['Bol Khata'] },
    { n: 'WebSockets', used: [] },
  ] },
  { name: 'AI & Voice', sub: 'Intelligent experiences', skills: [
    { n: 'Gemini API', used: ['Roastify'] },
    { n: 'AI persona design', used: ['Roastify'] },
    { n: 'Prompt engineering', used: ['Roastify'] },
    { n: 'Speech-to-text', used: ['Bol Khata'] },
    { n: 'ML fundamentals', cert: ['NPTEL Machine Learning', 'ML with AI'], used: [] },
  ] },
  { name: 'Infra & Tools', sub: 'Shipping & delivery', skills: [
    { n: 'Git & GitHub', used: ['Every project'] },
    { n: 'Google Play Console', used: ['Roastify', 'Bol Khata'] },
    { n: 'Android Studio', used: ['Roastify', 'Bol Khata'] },
    { n: 'Postman', used: ['API testing'] },
    { n: 'Vercel', used: ['Apna Oil Mill'] },
    { n: 'Render', used: ['Bol Khata backend'] },
  ] },
  { name: 'CS Fundamentals', sub: 'The foundations', skills: [
    { n: 'Data Structures & Algorithms', used: ['HackerRank', 'LeetCode', 'GeeksforGeeks'] },
    { n: 'OOP', cert: ['NPTEL Programming in Java'], used: [] },
    { n: 'Operating Systems', used: ['Coursework'] },
    { n: 'Computer Networks', used: ['Coursework'] },
    { n: 'DBMS', used: ['Coursework'] },
    { n: 'Multithreading', used: ['Mastishk'] },
  ] },
];

export const screenplay = {
  education: { school: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU)', degree: 'B.Tech, Computer Science & Engineering', when: 'Expected 2027', note: 'CGPA 7.76 / 10 through 3rd year (6 semesters)' },
  work: [
    { t: 'Roastify (TaporiGPT)', s: 'AI persona mobile app · Google Play Open Testing · Jul 2026 – Present', b: ['Independently architected the app, generated release keystores and deployed it end-to-end via Google Play Console.', 'Routing logic for five AI personas (Tapori, Roast, Gamer, Love, Shayar).', 'Optimised React Native component lifecycles to sustain smooth 60 FPS on entry-level Android.'] },
    { t: 'Bol Khata', s: 'Voice-first merchant ledger · Google Play Closed Testing', b: ['Full-stack: React Native (Expo) + Node.js/Express + MongoDB on Render, with OTP and JWT auth.', 'Offline-first outbox that syncs transactions when the network returns; Seller/Buyer modes and an items catalog.'] },
  ],
  certs: ['NPTEL · Programming in Java (Elite) — IIT Kharagpur', 'NPTEL · Introduction to Machine Learning (Elite) — IIT Madras', 'Internshala × IITM Pravartak · Machine Learning with AI (Top Performer)'],
};
