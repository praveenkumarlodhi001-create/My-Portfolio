# Praveen Kumar — Portfolio

Cinematic, streaming-style developer portfolio built with React 19, Vite and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # serve the production build
npm run lint
```

> Do not open `index.html` by double-clicking — it is a Vite app and needs the dev/preview server.

## Where to edit things

| What | File |
| --- | --- |
| Projects shown in "Praveen Originals" (and their detail popups) | `src/data/projects.js` |
| Hero text and badges | `src/components/Hero.jsx` |
| Profile picker (Praveen / Recruiter / Client) | `src/components/LogoSplash.jsx`, `src/App.jsx` |
| Photos | `public/images/` (hero, about, avatar) |
| Share-preview image (LinkedIn / WhatsApp) | `public/og-image.png` (1200×630) |
| Domain used in share tags | `index.html` (`og:url`, `canonical`) |

## Private resume

The resume sits behind a passcode (`src/components/ResumeGate.jsx`). Only a SHA-256 hash is stored in the code.

```bash
node scripts/hash-passcode.mjs "your-new-passcode"
```

Paste the printed hash into `PASSCODE_HASH`, replace the PDF in `public/` if needed, and share the plain passcode privately.

This is a front-end gate (no server): it keeps casual visitors and search engines out, but it is not bank-grade security.

## How to edit (v4)
- **Future Thinking ideas:** `src/data/futureIdeas.js` — copy an object, edit, redeploy. Open the site with `?owner=1` to draft ideas in your browser and press "COPY AS CODE".
- **Certificates:** `src/data/certificates.js`. Put an image in `public/certificates/` and set `proof` to show a "View certificate" viewer. NPTEL and Scholiverse are card-only on purpose (their originals show scores, IDs and a family name).
- **Projects:** `src/data/projects.js` (Roastify, Bol Khata, Apna Oil Mill).
- **Resume:** replace the PDF in `public/` (`resume-<random>.pdf`; the name is set in `src/components/ResumeGate.jsx`). Keep the filename random — a guessable name like `resume.pdf` lets anyone skip the passcode by typing the URL.
- **Stats band:** `src/components/StatsBand.jsx` — keep the numbers identical to your resume.

## v5 — Netflix-series experience
- "Who's watching?" gate: Praveen / Recruiter / Developer / Client. Each profile reorders sections and shows a toast.
- Edit content in `src/data/story.js` (profiles, layouts, episodes, moments, seasons, skills, resume text).
- Projects: `src/data/projects.js`; certificates: `src/data/certificates.js`; Future Thinking: `src/data/futureIdeas.js`.
- Footer has "Watch again" and "Replay opening".
