# Sachin.net — Facebook & Instagram Ads Manager Setup Guide

> Website: https://sachin-net.netlify.app  
> WhatsApp: +91 9931306292  
> Pixel env var: `NEXT_PUBLIC_META_PIXEL_ID`

---

## Part 1 — Meta Business Account (Ek baar setup)

### Step 1: Business Manager banao
1. Browser me jao: **https://business.facebook.com**
2. **Create Account** → Business name: `Sachin.net`
3. Your name + business email: `codingclasses29@gmail.com`
4. Submit karo

### Step 2: Facebook Page link karo
1. Business Settings → **Accounts → Pages**
2. **Add → Create a New Page** (ya existing page add karo)
3. Page name: `Sachin.net`
4. Category: **Software Company** ya **Internet Marketing Service**
5. Bio me likho: *Website, School ERP, E-Commerce & AI Solutions | Bihar, India | Free Quote*

### Step 3: Instagram link karo
1. Business Settings → **Accounts → Instagram Accounts**
2. Instagram business account connect karo (same brand name Sachin.net)
3. Facebook Page se link karo

### Step 4: Meta Pixel install karo
1. Business Settings → **Data Sources → Pixels** → **Add**
2. Pixel name: `Sachin.net Website Pixel`
3. Pixel ID copy karo (15-16 digit number)
4. Netlify + `.env.local` me add karo:
   ```
   NEXT_PUBLIC_META_PIXEL_ID=YOUR_PIXEL_ID_HERE
   ```
5. Site redeploy karo
6. Chrome extension **Meta Pixel Helper** se verify karo — green tick aana chahiye

### Step 5: WhatsApp Business connect
1. Ads Manager → **All Tools → WhatsApp Manager**
2. Number connect karo: **+91 9931306292**
3. Ads me **Click to WhatsApp** objective use kar paoge

---

## Part 2 — Pehla Campaign (Traffic + Leads)

### Step 1: Ads Manager kholo
1. **https://adsmanager.facebook.com**
2. Green button: **+ Create**

### Step 2: Campaign objective
| Goal | Objective choose karo |
|------|----------------------|
| Website par log bhejne hain | **Traffic** |
| WhatsApp message chahiye | **Engagement → Messaging** ya **Leads** |
| Form bharna hai | **Leads → Instant Form** |

**Recommended start:** Traffic → Landing page `/website-development`

### Step 3: Campaign settings
- Campaign name: `Sachin.net - Website - India`
- Advantage Campaign Budget: **ON**
- Daily budget: **₹300–500** (test ke liye)
- Special Ad Categories: **None** (unless housing/credit)

### Step 4: Ad Set — Audience
**Location:**
- India (start)
- Ya specific: Bihar, Uttar Pradesh, Jharkhand, Delhi, Maharashtra

**Age:** 24 – 50

**Gender:** All

**Detailed targeting (Interests — koi ek group choose karo):**
- Small business owners
- Entrepreneurship
- Web development
- E-commerce
- School administration
- Digital marketing

**Placements:**
- Start: **Advantage+ Placements** (automatic)
- Ya manual: Facebook Feed + Instagram Feed + Stories + Reels

### Step 5: Ad Set — Budget & Schedule
- Daily budget: ₹300
- Schedule: 9:00 AM – 10:00 PM (IST)
- Optimization: Landing Page Views (Traffic) ya Link Clicks

### Step 6: Ad Creative
**Format:** Single image ya Video (15 sec)

**Primary text** (copy-paste):
```
🇮🇳 Website banwani hai? Sachin.net se FREE quote lein!

✅ Business Website
✅ School ERP System
✅ E-Commerce Store
✅ Mobile App & AI

100+ clients | Fast delivery | 24x7 WhatsApp

📞 +91 9931306292
```

**Headline:** `Website Banwani Hai? Free Quote — Sachin.net`

**Description:** `Bihar se poore India me delivery. No hidden cost.`

**CTA Button:** `Learn More` ya `Send WhatsApp Message`

**Website URL:** `https://sachin-net.netlify.app/website-development`

**UTM tags (URL parameters — tracking ke liye):**
```
?utm_source=facebook&utm_medium=paid&utm_campaign=website_india&utm_content=ad1
```

Full URL example:
```
https://sachin-net.netlify.app/website-development?utm_source=facebook&utm_medium=paid&utm_campaign=website_india
```

### Step 7: Publish
1. **Publish** dabao
2. 24–48 ghante wait karo (learning phase)
3. Metrics dekho: CTR, CPC, Landing Page Views

---

## Part 3 — 3 Ad Variations Test karo (A/B Test)

| Ad | Angle | Headline |
|----|-------|----------|
| A | General website | Website Banwani Hai? Free Quote |
| B | School ERP | School Management System — Demo Available |
| C | Social proof | 100+ Clients Trust Sachin.net |

Har ad alag image use karo. 5 din baad best performer ko budget badhao.

---

## Part 4 — Retargeting Campaign (Week 2)

Jin logon ne site visit ki par contact nahi kiya:

1. Audience banao: **Custom Audience → Website**
2. Rule: Visited sachin-net.netlify.app in last 14 days
3. Exclude: Contact page visitors (already converted)
4. Ad copy:
   ```
   Aapne Sachin.net dekha — ab FREE quote lein!
   WhatsApp: +91 9931306292
   ```
5. Budget: ₹200/day

---

## Part 5 — Metrics (Kya dekho)

| Metric | Achha result |
|--------|-------------|
| CTR (Click rate) | > 1.5% |
| CPC (Cost per click) | < ₹15 |
| Landing Page Views | Badhte rahe |
| WhatsApp messages | Track manually / pixel events |

**Pause karo agar:** CPC > ₹30 aur koi lead nahi 7 din me

---

## Part 6 — Payment

1. Ads Manager → **Billing**
2. Payment method: Credit/Debit card ya UPI (India me available)
3. Prepaid ya monthly billing choose karo

---

## Quick Checklist

- [ ] Meta Business account bana
- [ ] Facebook Page + Instagram linked
- [ ] Pixel ID `.env` me add + site deploy
- [ ] Pehla Traffic campaign live
- [ ] WhatsApp CTA ad test
- [ ] UTM links use kiye
- [ ] 7 din baad results review

---

## Support Links

- Meta Ads Help: https://www.facebook.com/business/help
- Pixel Helper: Chrome Web Store → "Meta Pixel Helper"
- Sachin.net contact: https://sachin-net.netlify.app/contact
