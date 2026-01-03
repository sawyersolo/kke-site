# Klassen Kustom Exteriors — Website

Production website for **Klassen Kustom Exteriors Ltd**, built with **React + Vite** and deployed on **Netlify**.

This project is a fast, static, mobile-first site designed for contractor businesses.  
It intentionally does **not** use Next.js.

---

## 🚀 Tech Stack

- **React 18**
- **Vite**
- **Vanilla CSS**
- **Netlify (static hosting)**

---

## 📁 Project Structure

.
├── public/ # Static assets
├── src/ # React components & pages
├── index.html # App entry point
├── vite.config.js # Vite configuration
├── package.json
├── netlify.toml # Netlify build & routing config
└── README.md

yaml
Copy code

---

## 🧠 Framework Notes (IMPORTANT)

This project uses **React + Vite**.

- ❌ Not Next.js
- ❌ No server-side rendering
- ❌ No Netlify Next.js plugin

If Netlify attempts to auto-detect Next.js, it is explicitly disabled via environment config.

---

## ⚙️ Local Development

```bash
npm install
npm run dev
Visit:

dts
Copy code
http://localhost:5173
🏗️ Production Build
bash
Copy code
npm run build
This generates a static site in:

bash
Copy code
/dist
🌐 Netlify Deployment
Required Netlify Settings
Build command

routeros
Copy code
npm run build
Publish directory

nginx
Copy code
dist
netlify.toml
toml
Copy code
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NETLIFY_NEXT_PLUGIN_SKIP = "true"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
⚠️ Do not enable the Netlify Next.js plugin for this site.

🔁 SPA Routing
Client-side routing is supported via a Netlify redirect rule that routes all paths to index.html.

This allows deep links and page refreshes to work correctly.

🧼 Git Notes
The following directories are intentionally not committed:

nix
Copy code
node_modules/
dist/
These are generated locally or during deployment.

📦 Reuse & Template Notes
This site is part of a reusable contractor website system.
Branding, content, and images can be swapped without changing the layout or structure.

📞 Contact
Built and maintained by West Built Web Design.

✅ Status
React verified

Vite build verified

Netlify-compatible

Production-ready

yaml
Copy code

---

### Next optional improvements (if you want)
I can also:
- Add a **deployment badge**
- Create a **template README** version (brand-agnostic)
- Add **SEO + Lighthouse notes**
- Split this into a **core template repo + client repo**

Just tell me.