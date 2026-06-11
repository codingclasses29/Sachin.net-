# Sachin.net — Premium Software Development Agency Website

Next.js 16 + Tailwind CSS v4 से बनी premium agency website.

## Website चलाने के लिए

```bash
cd sachin-net
npm install   # सिर्फ पहली बार
npm run dev
```

फिर browser में खोलें: **http://localhost:3000**

Production build के लिए:

```bash
npm run build
npm start
```

## Pages

| Page | URL |
|---|---|
| Home (सारे sections) | `/` |
| Services | `/services` |
| Portfolio | `/portfolio` |
| Pricing | `/pricing` |
| Blog | `/blog` + 4 articles |
| About | `/about` |
| Contact (WhatsApp form + map) | `/contact` |

## अपनी details कैसे बदलें

सारा content एक ही file में है: **`lib/data.js`**

- `site` — आपका phone, WhatsApp number, email, address
- `services` — services cards
- `projects` — portfolio projects (title, features, tech, demo link)
- `pricing` — packages और price
- `testimonials` — client reviews
- `blogPosts` — blog articles
- `faqs` — FAQ section

> **ज़रूरी:** `lib/data.js` में `phone`, `phoneRaw` और `whatsapp` को अपने असली number से बदलें। `whatsapp` में country code के साथ बिना + के number डालें (जैसे `919876543210`)।

## अपनी photo लगाने के लिए

1. अपनी photo `public/sachin.jpg` में डालें
2. `components/home/AboutSection.js` में "SK" वाले circle की जगह `<img src="/sachin.jpg" />` लगाएँ

## Theme Colors

`app/globals.css` में:

- Primary: `#2563eb` (Blue)
- Dark: `#0f172a` (Navy)
- Accent: `#10b981` (Green)

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- Zero extra dependencies — fast & lightweight

## Hosting (Free)

सबसे आसान: [Vercel](https://vercel.com) पर GitHub repo connect करें — automatic deploy हो जाएगा। Custom domain (sachin.net) भी Vercel settings से जुड़ जाता है।
