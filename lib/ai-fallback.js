import { site, services, pricing, teamMembers, faqs, techStack } from "./data";

const FULL_FORMS = {
  bca: {
    form: "Bachelor of Computer Applications",
    detail:
      "BCA (Bachelor of Computer Applications) ek 3 saal ka undergraduate course hai. Isme programming, database, web development, networking aur computer applications sikhaye jaate hain. BCA ke baad MCA ya software development me career ban sakta hai.",
  },
  btech: {
    form: "Bachelor of Technology",
    detail:
      "B.Tech ek 4 saal ka engineering degree course hai. Computer Science, IT, Mechanical, Civil jaise branches me hota hai. Engineering aur technology me career ke liye popular course hai.",
  },
  mca: {
    form: "Master of Computer Applications",
    detail:
      "MCA ek postgraduate course hai jo advanced programming, software engineering aur IT management sikhata hai. Usually BCA ya graduation ke baad kiya jaata hai.",
  },
  bsc: {
    form: "Bachelor of Science",
    detail:
      "B.Sc ek 3 saal ka undergraduate science degree hai. Physics, Chemistry, Maths, Computer Science jaise subjects me hota hai.",
  },
  mba: {
    form: "Master of Business Administration",
    detail:
      "MBA ek postgraduate management degree hai jo business, finance, marketing aur leadership skills develop karti hai.",
  },
  erp: {
    form: "Enterprise Resource Planning",
    detail:
      "ERP software aapke poore business ko ek system se manage karta hai — billing, inventory, HR, payroll, reports sab ek jagah. School ERP me admissions, fees, attendance aur results manage hote hain.",
  },
  seo: {
    form: "Search Engine Optimization",
    detail:
      "SEO se website Google par upar rank karti hai. Isme fast speed, mobile design, sahi keywords aur quality content shamil hota hai — taaki bina ads ke organic traffic mile.",
  },
  api: {
    form: "Application Programming Interface",
    detail:
      "API do applications ke beech data exchange ka tareeka hai. Jaise payment gateway, login ya third-party services connect karne ke liye REST APIs use hoti hain.",
  },
  ai: {
    form: "Artificial Intelligence",
    detail:
      "AI machines ko human jaisi sochne aur seekhne ki ability deta hai. Chatbots, image recognition, recommendations aur automation me use hota hai.",
  },
  ml: {
    form: "Machine Learning",
    detail:
      "Machine Learning AI ka hissa hai jisme computers data se seekh kar decisions lete hain — bina har rule manually likhe.",
  },
  dsa: {
    form: "Data Structures and Algorithms",
    detail:
      "DSA programming ka core hai — data ko efficiently store karna (arrays, trees, graphs) aur problems solve karne ke algorithms.",
  },
  html: {
    form: "HyperText Markup Language",
    detail: "HTML web pages ka structure banata hai — headings, paragraphs, links, images sab HTML se define hote hain.",
  },
  css: {
    form: "Cascading Style Sheets",
    detail: "CSS website ka design, color, layout aur responsive styling control karta hai.",
  },
  js: {
    form: "JavaScript",
    detail:
      "JavaScript web pages ko interactive banata hai — forms, animations, API calls aur modern apps me use hota hai.",
  },
  iit: {
    form: "Indian Institute of Technology",
    detail: "IIT India ke top engineering institutes hain. IITM Pravartak jaise programs advanced tech training dete hain.",
  },
};

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ");
}

function wantsFullForm(text) {
  return (
    /full\s*fo?rm/.test(text) ||
    /full\s*from/.test(text) ||
    /ka\s*matlab/.test(text) ||
    /kya\s*matlab/.test(text) ||
    /kya\s*hai/.test(text) ||
    /what\s*is/.test(text) ||
    /meaning/.test(text) ||
    /expand/.test(text) ||
    /stands\s*for/.test(text)
  );
}

function findAbbreviation(text) {
  const n = normalize(text);
  const tokens = n.split(" ");

  for (const key of Object.keys(FULL_FORMS)) {
    const variants = [key, key.replace(/\./g, "")];
    if (key === "btech") variants.push("b tech", "b.tech");
    if (key === "bca") variants.push("b c a");
    if (key === "mca") variants.push("m c a");
    if (key === "bsc") variants.push("b sc", "b.sc");
    if (key === "mba") variants.push("m b a");
    if (key === "js") variants.push("javascript");

    for (const v of variants) {
      if (n.includes(v) || tokens.includes(v.replace(/\s/g, ""))) {
        return key;
      }
    }
  }

  if (tokens.length === 1 && FULL_FORMS[tokens[0]]) {
    return tokens[0];
  }

  return null;
}

function replyFullForm(key) {
  const entry = FULL_FORMS[key];
  if (!entry) return null;
  return `${entry.form} (${key.toUpperCase()})\n\n${entry.detail}`;
}

function matchGreeting(text) {
  if (/^(hi|hello|hey|namaste|namaskar|hii|hlo|good\s*(morning|evening|afternoon)|kaise\s*ho|kaisi\s*ho)\b/.test(text)) {
    return `Namaste! Main ${site.name} ka AI assistant hoon.\n\nAap website, software, School ERP, pricing ya koi bhi sawaal pooch sakte hain. Main madad karunga!\n\nWhatsApp: ${site.phone}`;
  }
  return null;
}

function matchContact(text) {
  if (
    /contact|whatsapp|phone|number|call|email|reach|baat\s*kare|message\s*kare|number\s*kya/.test(text)
  ) {
    return `📞 ${site.name} se contact karein:\n\n• WhatsApp / Call: ${site.phone}\n• Email: ${site.email}\n• Location: ${site.address}\n\nFree quote ke liye Contact page ya WhatsApp par message karein — hum jaldi reply karte hain!`;
  }
  return null;
}

function matchPricing(text) {
  if (
    /price|pricing|cost|kitne|kitna|rate|charges|paisa|rs\b|₹|website\s*ban|banegi|banane\s*ka\s*kharcha/.test(
      text
    )
  ) {
    const lines = pricing
      .map((p) => {
        const price =
          p.price === "Contact" ? "Custom quote — contact karein" : `${p.price} (per project)`;
        return `• ${p.name}: ${price}\n  ${p.desc}`;
      })
      .join("\n\n");

    return `${site.name} Pricing (INR):\n\n${lines}\n\nExact quote aapke requirements par depend karta hai. Free quote: ${site.phone}`;
  }
  return null;
}

function matchServices(text) {
  if (
    /service|kya\s*banate|kya\s*karte|website|software|school\s*erp|e-?commerce|mobile\s*app|erp|hosting|seo/.test(
      text
    )
  ) {
    const lines = services
      .slice(0, 6)
      .map((s) => `• ${s.title}: ${s.desc}`)
      .join("\n");

    return `Hum yeh services dete hain:\n\n${lines}\n\n...aur bhi — UI/UX, SEO, Hosting, API Development.\n\nDetails ke liye /services page dekhein ya WhatsApp: ${site.phone}`;
  }
  return null;
}

function matchSchoolErp(text) {
  if (/school\s*(erp|management|system|software|website)|fee\s*management|online\s*result/.test(text)) {
    return `School ERP / School Management System ek complete solution hai:\n\n• Student admission & records\n• Fee collection (online/offline)\n• Attendance tracking\n• Exam & online results\n• Parent portal / app\n• Notice board & reports\n\n${site.name} schools ke liye website + ERP banata hai. Demo ke liye WhatsApp karein: ${site.phone}`;
  }
  return null;
}

function matchTeam(text) {
  if (/team|founder|sachin|sanjeev|tushar|shivam|akif|kaun\s*hai|kon\s*hai/.test(text)) {
    const lines = teamMembers
      .map((m) => `• ${m.name} — ${m.role}\n  ${m.specialty}`)
      .join("\n\n");

    return `${site.name} Team:\n\n${lines}\n\nFounder: ${site.founder} | Co-founder: Sanjeev Kumar (B.Tech, AI/ML/Cloud)`;
  }
  return null;
}

function matchTech(text) {
  if (/tech\s*stack|technology|languages|next\.?js|react|node|mongodb|python|java/.test(text)) {
    return `Hum in technologies me kaam karte hain:\n\n${techStack.join(", ")}\n\nModern, fast aur secure solutions ke liye Next.js, React, Node.js prefer karte hain.`;
  }
  return null;
}

function matchQuote(text) {
  if (/quote|estimate|consultation|demo|project\s*start|hire|kaam\s*karwana/.test(text)) {
    return `Free quote paane ke liye:\n\n1. WhatsApp karein: ${site.phone}\n2. Ya Contact page par form bharein\n3. Apna requirement batayein — pages, features, budget\n\nHum 24 ghante ke andar reply karte hain. Advance payment 50%, delivery par 50%.`;
  }
  return null;
}

function matchFaq(text) {
  for (const faq of faqs) {
    const qNorm = normalize(faq.q);
    const keywords = qNorm.split(" ").filter((w) => w.length > 3);
    const hits = keywords.filter((w) => text.includes(w)).length;
    if (hits >= 2) return faq.a;
  }

  if (/kitna\s*samay|time\s*lagega|delivery|kab\s*tak/.test(text)) {
    return faqs[0].a;
  }
  if (/mobile|responsive|phone\s*par/.test(text)) {
    return faqs[1].a;
  }
  if (/payment|advance|paisa\s*kaise/.test(text)) {
    return faqs[2].a;
  }
  if (/support|maintenance|baad\s*me/.test(text)) {
    return faqs[3].a;
  }
  if (/hosting|domain|ssl/.test(text)) {
    return faqs[4].a;
  }

  return null;
}

function matchThanks(text) {
  if (/^(thanks|thank\s*you|dhanyavad|shukriya|ok\s*thanks|theek\s*hai\s*thanks)/.test(text)) {
    return `Aapka swagat hai! Aur koi sawaal ho to poochiye.\n\nWhatsApp: ${site.phone} — ${site.name}`;
  }
  return null;
}

function genericHelp(text) {
  if (text.length < 3) return null;

  return `Main ${site.name} ka AI assistant hoon.\n\nAapke sawaal ke liye best jawab dene ki koshish kar raha hoon. Filhal main in topics par detail me help kar sakta hoon:\n\n• Website / software pricing\n• School ERP & e-commerce\n• Services aur tech stack\n• Contact & free quote\n• Common full forms (BCA, B.Tech, ERP, SEO, AI, etc.)\n\nAgar aapka sawaal inme se nahi hai, to WhatsApp par likhein — team turant reply karegi: ${site.phone}`;
}

function matchFullFormDirect(text) {
  if (!wantsFullForm(text)) return null;
  const abbr = findAbbreviation(text);
  if (abbr) return replyFullForm(abbr);
  return null;
}

export function getLocalFallbackReply(message) {
  const text = normalize(message);
  if (!text) return null;

  const abbr = findAbbreviation(text);
  if (abbr && (wantsFullForm(text) || text.split(" ").length <= 4)) {
    const reply = replyFullForm(abbr);
    if (reply) return reply;
  }

  const matchers = [
    matchGreeting,
    matchThanks,
    matchFullFormDirect,
    matchContact,
    matchPricing,
    matchSchoolErp,
    matchServices,
    matchTeam,
    matchTech,
    matchQuote,
    matchFaq,
  ];

  for (const fn of matchers) {
    const reply = fn(text);
    if (reply) return reply;
  }

  if (abbr) {
    const reply = replyFullForm(abbr);
    if (reply) return reply;
  }

  return genericHelp(text);
}
