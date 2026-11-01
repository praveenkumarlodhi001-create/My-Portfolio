// Single source of truth for the "Praveen Originals" cards and their detail modal.
// Keep claims identical to the resume — recruiters cross-check the two.
const projects = [
  {
    name: 'ROASTIFY',
    subtitle: 'AI PERSONA EXPERIENCE',
    type: 'MOBILE APP · GOOGLE PLAY',
    tone: 'roastify',
    year: '2026',
    stack: 'React Native · Node.js · Firebase · Gemini',
    summary:
      'A multi-persona AI app built around expressive conversations, with five distinct character voices: Tapori, Roast, Gamer, Love and Shayar.',
    problem:
      'Most chat apps answer in one generic voice. People who want playful, culturally familiar conversations need more personality and variety.',
    build:
      'A React Native app with five AI personas, session-aware chat, and Firebase Authentication + Cloud Firestore for persistence. I architected it solo, generated the release keystores and shipped it through Google Play Console.',
    challengeLabel: 'A CHALLENGE I SOLVED',
    challenge:
      'Switching personas mid-conversation dropped frames on entry-level Android phones. Profiling the component lifecycles exposed the re-render cost; optimising it kept persona switches at a smooth 60 FPS.',
    result: 'Live on Google Play as TaporiGPT (Open Testing).',
    links: [{ label: 'VIEW ON GOOGLE PLAY', href: 'https://play.google.com/store/apps/details?id=com.praveen.taporigpt' }],
  },
  {
    name: 'BOL KHATA',
    subtitle: 'VOICE-FIRST UDHAR LEDGER',
    type: 'MOBILE APP · GOOGLE PLAY CLOSED TESTING',
    tone: 'bolkhata',
    year: '2026',
    stack: 'React Native (Expo) · Node.js · Express · MongoDB · JWT/OTP Auth · Render',
    summary: 'A digital udhar khata designed around the daily workflow of small Indian shopkeepers — now in Closed Testing on Google Play.',
    problem:
      'Many shopkeepers still track customer credit on paper or from memory, because typing every transaction is friction they will not adopt.',
    build:
      'A full-stack ledger: a React Native (Expo) app with a Node.js/Express + MongoDB backend on Render, secured with OTP and JWT login. An offline-first outbox keeps entries safe without network and syncs them later; Seller/Buyer modes and an items catalog fit different shops; voice entry in Hindi/Hinglish lets merchants speak a transaction instead of typing it.',
    result: 'Released to Google Play Closed Testing; in active development.',
    links: [
      { label: 'VIEW ON GOOGLE PLAY', href: 'https://play.google.com/store/apps/details?id=com.bolkhata.app' },
      { label: 'JOIN CLOSED TESTING', href: 'https://play.google.com/apps/testing/com.bolkhata.app' },
    ],
  },
  {
    name: 'APNA OIL MILL',
    subtitle: 'BILINGUAL BUSINESS WEBSITE',
    type: 'WEB · LIVE',
    tone: 'apna',
    year: '2026',
    stack: 'HTML · CSS · JavaScript · Three.js · Web Audio API · Vercel',
    summary:
      'A bilingual (English / हिंदी) website that lets a local oil mill present its products, location and advance-payment details online.',
    problem:
      'A local mustard-oil, khal, rice and seed-trading mill needed one clear place where customers could see products, find the location and pay an advance, in Hindi or English.',
    build:
      'A multi-section responsive site with a product showcase, an item search that understands Hinglish and Hindi spellings, scroll-driven 3D cards (Three.js + CSS 3D), an ambient flute soundtrack generated live with the Web Audio API, and an advance-payment QR section.',
    challengeLabel: 'A DECISION I MADE',
    challenge:
      'The 3D and sound are an optional layer: if WebGL is unavailable or the visitor prefers reduced motion, the site falls back to the plain, fast version instead of breaking.',
    result: 'Live on Vercel, shared with the mill’s customers.',
    links: [{ label: 'VISIT LIVE WEBSITE', href: 'https://apna-oil-mill.vercel.app/' }],
  },
];

export default projects;
