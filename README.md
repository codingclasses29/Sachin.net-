# Sachin.net — Premium Software Development Agency Website

Next.js 16 + React 19 + Tailwind CSS v4 से बनी premium full-stack agency website — AI chatbot, AI tools, ML demo, admin panel aur MongoDB backend ke saath.

---

## Website चलाने के लिए

```bash
cd sachin-net
npm install          # सिर्फ पहली बार
npm run dev
```

फिर browser में खोलें: **http://localhost:3000**

### Production build

```bash
npm run build
npm start
```

### Netlify deploy

```bash
npm run build:netlify
```

---

## Pages

| Page | URL | Description |
|------|-----|-------------|
| **Home** (सारे sections) | `/` | Hero, Services, AI, Portfolio, About, Team, Pricing, Testimonials, Blog, FAQ, CTA |
| **Services** | `/services` | सभी services + tech stack + process |
| **AI & ML Services** | `/ai-services` | AI chatbot, ML, computer vision, NLP services + live ML demo |
| **Free AI Tools** | `/ai-tools` | Blog writer, code gen, resume, translator, grammar check, etc. |
| **Portfolio** | `/portfolio` | सभी projects + testimonials |
| **Pricing** | `/pricing` | 4 packages + FAQ |
| **Blog** | `/blog` | Articles list |
| **Blog Article** | `/blog/[slug]` | 4 articles (website cost, school guide, ERP, SEO) |
| **About** | `/about` | Mission, team, timeline, values |
| **Contact** | `/contact` | Form + WhatsApp + Google Map + FAQ |
| **Careers** | `/careers` | Job openings |
| **Privacy Policy** | `/privacy` | Legal |
| **Terms of Service** | `/terms` | Legal |
| **Admin Login** | `/admin/login` | Dashboard access |
| **Admin Dashboard** | `/admin/dashboard` | Stats, leads, AI analytics |
| **Admin Leads** | `/admin/leads` | Contact form submissions |
| **Admin Settings** | `/admin/settings` | Env variables guide |

---

## अपनी details कैसे बदलें

### Main content — `lib/data.js`

| Key | क्या है |
|-----|---------|
| `site` | Phone, WhatsApp, email, address, founder name |
| `navLinks` | Navbar links |
| `services` | Services cards |
| `projects` | Portfolio projects (title, features, tech, demo link) |
| `pricing` | Packages और price |
| `testimonials` | Client reviews |
| `blogPosts` | Blog articles |
| `faqs` | FAQ section (10 questions) |
| `teamMembers` | Team section |
| `timeline` | Company journey |
| `careerJobs` | Careers page |

> **ज़रूरी:** `lib/data.js` में `phone`, `phoneRaw` और `whatsapp` को अपने असली number से बदलें।  
> `whatsapp` में country code के साथ **बिना +** के number डालें (जैसे `919931306292`)।

### AI content — `lib/ai-data.js`

| Key | क्या है |
|-----|---------|
| `aiServices` | AI & ML services page cards |
| `aiTools` | Free AI tools list |
| `mlCapabilities` | Machine learning features |
| `mlDemoTools` | Live ML demo buttons |

---

## Environment Variables

`.env.local` file बनाएँ (`.env.example` copy करें):

```bash
# Email
NODEMAILER_EMAIL=your@gmail.com
NODEMAILER_PASSWORD=your_app_password

# Twilio WhatsApp/SMS alerts
TWILIO_ACCOUNT_SID=...
TWILIO_AUTH_TOKEN=...
TWILIO_PHONE_NUMBER=+91XXXXXXXXXX

# AI (Gemini primary)
GEMINI_API_KEY=...
AI_PROVIDER=gemini

# MongoDB (optional — leads save hone ke liye)
MONGODB_URI=mongodb+srv://...

# Admin panel
JWT_SECRET=your-secret-key
ADMIN_EMAIL=admin@sachin.net
ADMIN_PASSWORD=your-password
```

> **Netlify par:** Site settings → Environment variables में same keys add karein.

---

## अपनी photo लगाने के लिए

Team photos already `public/team/` folder mein hain:

```
public/team/sachin-kumar.png
public/team/sanjeev-kumar.png
...
```

Founder photo change karne ke liye:

1. Photo `public/team/sachin-kumar.png` mein replace karein
2. Ya `lib/data.js` → `founderProfile.photo` path update karein

---

## Theme Colors

`app/globals.css` में design tokens:

| Token | Color | Use |
|-------|-------|-----|
| Primary | `#2563eb` | Buttons, links, highlights |
| Dark | `#030712` | Background |
| Accent | `#06b6d4` | AI sections, cyan glow |
| Success | `#10b981` | WhatsApp, checkmarks |

### Standard CSS classes (sab pages par same)

```
.page-section        → section spacing
.page-section-alt    → alternate background
.card / .card-p       → glass cards
.field                → form inputs
.btn-primary          → blue button
.btn-whatsapp         → green WhatsApp button
.heading-xl/lg/md    → typography
.text-body / .text-muted → paragraph text
```

---

## Features

- Dark premium UI + glassmorphism + particle background
- AI Chatbot (Gemini / Groq / OpenAI fallback)
- 10 Free AI Tools (`/ai-tools`)
- ML Live Demo — sentiment, spam, lead prediction
- Contact form → Email + WhatsApp alert + MongoDB leads
- Admin panel with JWT login
- SEO — sitemap, robots.txt, Open Graph, structured data
- Mobile responsive + dark/light mode toggle
- Sticky navbar, back-to-top, sticky CTA bar

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 16 (App Router), React 19, Tailwind CSS v4 |
| Animations | Framer Motion, GSAP |
| AI | Google Gemini, Groq, OpenRouter, OpenAI |
| Backend | Next.js API Routes, MongoDB + Mongoose |
| Auth | JWT + bcrypt (admin panel) |
| Email | Nodemailer |
| SMS/WhatsApp | Twilio |
| ML Service | Python FastAPI (`ml-service/` folder) |
| Deploy | Netlify (frontend) + MongoDB Atlas |

---

## Project Structure

```
sachin-net/
├── app/                    # Pages + API routes
│   ├── page.js             # Home
│   ├── services/
│   ├── ai-services/
│   ├── ai-tools/
│   ├── portfolio/
│   ├── pricing/
│   ├── blog/
│   ├── about/
│   ├── contact/
│   ├── careers/
│   ├── privacy/
│   ├── terms/
│   ├── admin/              # Admin panel
│   └── api/                # chat, contact, ai, ml, admin
├── components/             # Reusable UI components
│   ├── home/               # Hero, Services, Pricing, etc.
│   ├── PageHeader.js
│   ├── PageSection.js
│   ├── ContactForm.js
│   └── Navbar.js, Footer.js
├── lib/
│   ├── data.js             # Main website content
│   ├── ai-data.js          # AI/ML content
│   ├── ai.js               # AI provider logic
│   └── models/             # MongoDB schemas
├── ml-service/             # Python FastAPI ML backend
├── public/                 # Images, robots.txt
└── app/globals.css         # Unified design system
```

---

## Hosting (Free)

**Netlify** (recommended — already configured):

1. GitHub repo connect karein
2. Build command: `npm run build:netlify`
3. Environment variables add karein
4. Custom domain `sachin.net` connect karein

**ML Service** (optional): `ml-service/` folder ko Railway ya Render par deploy karein, phir `ML_SERVICE_URL` env var set karein.

---

## Contact

- **Phone / WhatsApp:** +91 9931306292
- **Email:** codingclasses29@gmail.com
- **Location:** Bihar, India
- **Website:** [sachin-net.netlify.app](https://sachin-net.netlify.app)

---

Made with ♥ by **Sachin Kumar** — Sachin.net
