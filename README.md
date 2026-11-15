# Maison Clé website (React + Vite)
1. `npm install`
2. Copy `.env.example` to `.env` and add your Formspree endpoint (forms will not send without it).
3. `npm run dev` → http://localhost:5173
4. `npm run build` → deploy `dist` on Cloudflare Pages (preset Vite, build `npm run build`, output `dist`).
Edit all text in `src/data/translations.js`, reviews in `src/data/reviews.js`.
Cloudflare SPA routing: add `public/_redirects` containing `/* /index.html 200` (already included).
