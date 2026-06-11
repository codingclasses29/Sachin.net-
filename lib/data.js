export const site = {
  name: "Sachin.net",
  tagline: "We Build Modern Websites, Software & AI Solutions That Grow Your Business.",
  phone: "+91 9931306292",
  phoneRaw: "+919931306292",
  whatsapp: "919931306292",
  email: "codingclasses29@gmail.com",
  address: "Bihar, India",
  founder: "Sachin Kumar",
};

// Social media — apna link yahan paste karein (khali chhodo to icon dikhega, link baad me add karein)
export const socialLinks = [
  { name: "GitHub", icon: "github", href: "" },
  { name: "Facebook", icon: "facebook", href: "" },
  { name: "Instagram", icon: "instagram", href: "" },
  { name: "X", icon: "x", href: "" },
];

export const founderProfile = {
  role: "Founder & Full Stack Developer",
  institute: "IITM Pravartak | Student",
  photo: "/team/sachin-kumar.png",
  certifications: [
    "Training & Internship Certification — Full Stack Web Development with DSA",
    "Python (Blended)",
    "Advanced Certification in Software Development with GenAI & DSA — IITM",
  ],
};

export const teamMembers = [
  {
    name: "Sachin Kumar",
    role: "Founder & Full Stack Developer",
    specialty: "Websites, Web Apps, School ERP & Business Software",
    skills: ["Next.js", "React", "Node.js", "MongoDB", "GenAI"],
    initials: "SK",
    color: "#2563eb",
    isFounder: true,
    photo: "/team/sachin-kumar.png",
    photoPosition: "object-cover object-[center_22%]",
    experience: {
      icon: "rocket",
      title: "1+ Years Experience",
      desc: "Building websites & software",
    },
  },
  {
    name: "Sanjeev Kumar",
    role: "Co-founder & B.Tech",
    specialty: "Websites, Web Apps, School ERP & Business Software",
    skills: ["AI", "Machine Learning", "Cloud Computing"],
    initials: "SV",
    color: "#6366f1",
    isCoFounder: true,
    photo: "/team/sanjeev-kumar.png",
    photoPosition: "object-cover object-[center_18%]",
    experience: {
      icon: "rocket",
      title: "1+ Years Experience",
      desc: "Building websites & software",
    },
  },
  {
    name: "Tushar Chaudhary",
    role: "Python Developer | AI",
    specialty: "Python development and AI-powered solutions",
    skills: ["Python", "AI", "Machine Learning"],
    initials: "TC",
    color: "#8b5cf6",
    photo: "/team/tushar-chaudhary.png",
    photoPosition: "object-cover object-[center_20%]",
    experience: {
      icon: "rocket",
      title: "3+ Years Experience",
      desc: "Python & AI development",
    },
  },
  {
    name: "Shivam Kumar",
    role: "Full Stack Developer | AI | C++",
    specialty: "Full stack applications with AI integration and C++ systems",
    skills: ["Full Stack", "AI", "C++", "React"],
    initials: "SK",
    color: "#10b981",
    experience: {
      icon: "rocket",
      title: "3+ Years Experience",
      desc: "Full stack, AI & C++ systems",
    },
  },
  {
    name: "MD Akif Khan",
    role: "Java & Python Developer | DSA",
    specialty: "Backend systems, algorithms and data structures",
    skills: ["Java", "Python", "DSA", "Spring Boot"],
    initials: "AK",
    color: "#f59e0b",
    photo: "/team/md-akif-khan.png",
    photoPosition: "object-cover object-[center_15%]",
    experience: {
      icon: "rocket",
      title: "2+ Years Experience",
      desc: "Java, Python & DSA solutions",
    },
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    icon: "globe",
    title: "Website Development",
    desc: "Modern, fast and SEO-friendly business websites built with Next.js and React.",
    points: ["Business Websites", "Landing Pages", "Corporate Sites"],
    color: "#3b82f6",
  },
  {
    icon: "school",
    title: "School Management System",
    desc: "Complete school automation — admissions, fees, attendance, exams and results.",
    points: ["Student & Fee Management", "Online Results", "Parent App"],
    color: "#8b5cf6",
  },
  {
    icon: "cart",
    title: "E-Commerce Website",
    desc: "Powerful online stores with payment gateway, inventory and order management.",
    points: ["Payment Gateway", "Order Tracking", "Admin Panel"],
    color: "#f59e0b",
  },
  {
    icon: "erp",
    title: "ERP Software",
    desc: "Custom ERP solutions to manage your entire business from one dashboard.",
    points: ["Inventory & Billing", "HR & Payroll", "Reports & Analytics"],
    color: "#ef4444",
  },
  {
    icon: "mobile",
    title: "Mobile App Development",
    desc: "Android & iOS apps for your business with modern UI and smooth performance.",
    points: ["Android & iOS", "React Native", "Play Store Publish"],
    color: "#10b981",
  },
  {
    icon: "api",
    title: "API Development",
    desc: "Secure and scalable REST APIs and integrations for your applications.",
    points: ["REST APIs", "Third-party Integration", "Secure Auth"],
    color: "#06b6d4",
  },
  {
    icon: "design",
    title: "UI/UX Design",
    desc: "Beautiful, user-friendly interfaces that convert visitors into customers.",
    points: ["Wireframes", "Figma Design", "Prototyping"],
    color: "#ec4899",
  },
  {
    icon: "seo",
    title: "SEO Optimization",
    desc: "Rank higher on Google and get more organic traffic and leads.",
    points: ["On-page SEO", "Speed Optimization", "Google Ranking"],
    color: "#84cc16",
  },
  {
    icon: "server",
    title: "Hosting & Domain Setup",
    desc: "Complete hosting, domain, SSL and email setup with 24x7 support.",
    points: ["AWS / VPS Setup", "SSL Certificate", "Business Email"],
    color: "#a855f7",
  },
];

export const projects = [
  {
    title: "EduSmart School",
    category: "School Management System",
    desc: "Complete school ERP with admissions, fee management, attendance and online results.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    features: ["Fee Management", "Online Results", "Parent Portal"],
    gradient: "from-blue-600 to-indigo-700",
    demo: "#",
  },
  {
    title: "ShopKart",
    category: "E-Commerce Store",
    desc: "Full-featured online store with payment gateway, coupons and order tracking.",
    tech: ["React", "Express.js", "MySQL"],
    features: ["Payment Gateway", "Order Tracking", "Admin Dashboard"],
    gradient: "from-amber-500 to-orange-600",
    demo: "#",
  },
  {
    title: "MedCare Hospital",
    category: "Hospital Website",
    desc: "Hospital management website with appointment booking and doctor profiles.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    features: ["Appointment Booking", "Doctor Profiles", "Reports"],
    gradient: "from-emerald-500 to-teal-600",
    demo: "#",
  },
  {
    title: "Real Estate Pro",
    category: "Real Estate Website",
    desc: "Property listing platform with advanced search, filters and lead capture.",
    tech: ["Next.js", "Tailwind", "MongoDB"],
    features: ["Property Search", "Lead Forms", "Map Integration"],
    gradient: "from-violet-600 to-purple-700",
    demo: "#",
  },
  {
    title: "BrightFuture Coaching",
    category: "Coaching Website",
    desc: "Coaching institute website with course catalog, batch timing and online enquiry.",
    tech: ["React", "Firebase", "Tailwind"],
    features: ["Course Catalog", "Online Enquiry", "Student Login"],
    gradient: "from-rose-500 to-pink-600",
    demo: "#",
  },
  {
    title: "BizCRM",
    category: "CRM Software",
    desc: "Customer relationship management software with leads, follow-ups and reports.",
    tech: ["Next.js", "Express.js", "MySQL"],
    features: ["Lead Management", "Follow-up Reminders", "Sales Reports"],
    gradient: "from-cyan-500 to-blue-600",
    demo: "#",
  },
  {
    title: "Admin Analytics",
    category: "Admin Dashboard",
    desc: "Modern analytics dashboard with charts, user management and role-based access.",
    tech: ["React", "Node.js", "MongoDB"],
    features: ["Live Charts", "User Roles", "Export Reports"],
    gradient: "from-slate-600 to-slate-800",
    demo: "#",
  },
];

export const whyChooseUs = [
  { icon: "rocket", title: "Fast Delivery", desc: "On-time project delivery, every time." },
  { icon: "mobile", title: "Mobile Responsive", desc: "Perfect on every screen and device." },
  { icon: "seo", title: "SEO Friendly", desc: "Built to rank higher on Google." },
  { icon: "shield", title: "Secure Backend", desc: "Industry-standard security practices." },
  { icon: "design", title: "Modern UI Design", desc: "Premium designs that build trust." },
  { icon: "wallet", title: "Affordable Price", desc: "Best quality at honest pricing." },
  { icon: "support", title: "24x7 Support", desc: "We are always here to help you." },
];

export const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "100+", label: "Projects Completed" },
  { value: "100+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
];

export const techStack = [
  "HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js",
  "Express.js", "MongoDB", "MySQL", "Firebase", "AWS", "Docker",
];

export const pricing = [
  {
    name: "Basic Website",
    price: "₹5,999",
    desc: "Perfect for personal brands and small businesses getting online.",
    features: [
      "Up to 5 Pages",
      "Mobile Responsive Design",
      "Contact / WhatsApp Form",
      "Basic SEO Setup",
      "1 Month Free Support",
    ],
    highlighted: false,
  },
  {
    name: "Business Website",
    price: "₹10,999",
    desc: "Complete professional website for growing businesses.",
    features: [
      "Up to 15 Pages",
      "Premium Custom Design",
      "Admin Panel (CMS)",
      "Advanced SEO + Speed",
      "Google Map + Analytics",
      "3 Months Free Support",
    ],
    highlighted: true,
  },
  {
    name: "E-Commerce",
    price: "₹24,999",
    desc: "Full online store with payments and order management.",
    features: [
      "Unlimited Products",
      "Payment Gateway",
      "Order & Inventory System",
      "Coupons & Offers",
      "Admin Dashboard",
      "6 Months Free Support",
    ],
    highlighted: false,
  },
  {
    name: "Custom Software",
    price: "Contact",
    desc: "School ERP, CRM, custom apps — built exactly for your needs.",
    features: [
      "Custom Requirements",
      "School ERP / CRM / Apps",
      "Dedicated Support",
      "Scalable Architecture",
      "Free Consultation",
    ],
    highlighted: false,
  },
];

export const testimonials = [
  {
    name: "Rakesh Kumar",
    role: "Director, Bright School",
    text: "Sachin.net built our school management system exactly how we wanted. The system is fast, secure and very easy to use. Fee collection is now 100% online.",
    rating: 5,
  },
  {
    name: "Priya Verma",
    role: "Founder, TrendyKart",
    text: "Amazing work on our e-commerce website. Sales increased by 300% after the new website was launched. Highly recommended for online stores!",
    rating: 5,
  },
  {
    name: "Amit Verma",
    role: "CEO, BuildTech",
    text: "Very professional and dedicated developer. Project delivered on time with great support even after delivery. Best decision for our business website.",
    rating: 5,
  },
  {
    name: "Dr. Neha Singh",
    role: "MedCare Hospital",
    text: "Our hospital website with online appointment booking has made things so easy for patients. Clean design and works perfectly on mobile.",
    rating: 5,
  },
];

export const processSteps = [
  { step: "01", title: "Requirement Discussion", desc: "We understand your business goals and project requirements in detail." },
  { step: "02", title: "Design Approval", desc: "You get a modern UI design first — work starts only after your approval." },
  { step: "03", title: "Development", desc: "Clean, fast and secure code with regular progress updates." },
  { step: "04", title: "Testing", desc: "Every feature is tested on all devices and browsers." },
  { step: "05", title: "Deployment", desc: "Your project goes live on fast and secure hosting." },
  { step: "06", title: "Support", desc: "Free support period plus long-term maintenance options." },
];

export const blogPosts = [
  {
    slug: "website-cost-in-india",
    title: "Website Cost in India — Complete Pricing Guide 2026",
    excerpt: "How much does a website really cost in India? Basic, business and e-commerce website pricing explained in simple words.",
    date: "10 Jun, 2026",
    category: "Pricing",
    readTime: "6 min read",
    gradient: "from-blue-600 to-indigo-700",
    content: [
      "Website की कीमत उसके type, pages और features पर depend करती है। India में एक basic website ₹5,000–₹10,000 में बन जाती है, जबकि business website ₹12,000–₹25,000 तक जाती है।",
      "E-Commerce websites में payment gateway, product management और order tracking होता है, इसलिए इनकी कीमत ₹25,000 से शुरू होती है।",
      "Custom software जैसे School ERP या CRM की कीमत requirements के हिसाब से तय होती है। हमेशा सस्ते से नहीं, value से decide करें — एक अच्छी website सालों तक business लाती है।",
      "Sachin.net पर हम transparent pricing देते हैं — कोई hidden cost नहीं। Free quote के लिए आज ही contact करें।",
    ],
  },
  {
    slug: "school-website-kaise-banaye",
    title: "School Website Kaise Banaye — Step by Step Guide",
    excerpt: "अपने school के लिए professional website और management system कैसे बनवाएँ — पूरी जानकारी एक जगह।",
    date: "02 Jun, 2026",
    category: "Education",
    readTime: "8 min read",
    gradient: "from-violet-600 to-purple-700",
    content: [
      "आज के समय में हर school को एक professional website की ज़रूरत है — admissions, results और parents communication सब online हो रहा है।",
      "School website में ये sections ज़रूर होने चाहिए: About, Admission Form, Faculty, Gallery, Notice Board, Results और Contact।",
      "अगर आप fee management, attendance और online results भी चाहते हैं, तो School Management System (ERP) best option है।",
      "Sachin.net schools के लिए complete website + ERP solution बनाता है। Demo देखने के लिए WhatsApp पर message करें।",
    ],
  },
  {
    slug: "best-erp-software",
    title: "Best ERP Software for Small Business in 2026",
    excerpt: "ERP software क्या होता है, आपके business को इसकी ज़रूरत क्यों है, और custom ERP कैसे बनवाएँ।",
    date: "25 May, 2026",
    category: "Software",
    readTime: "7 min read",
    gradient: "from-emerald-500 to-teal-600",
    content: [
      "ERP (Enterprise Resource Planning) software आपके पूरे business को एक dashboard से manage करता है — billing, inventory, staff, reports सब कुछ।",
      "Ready-made ERP सस्ता लगता है लेकिन उसमें आपके business के हिसाब से features नहीं होते। Custom ERP exactly आपकी ज़रूरत के हिसाब से बनता है।",
      "Custom ERP के फायदे: सिर्फ वही features जो आपको चाहिए, lifetime ownership, कोई monthly per-user fee नहीं, और full data control।",
      "Sachin.net custom ERP solutions बनाता है — inventory, billing, HR और reports के साथ। Free consultation के लिए contact करें।",
    ],
  },
  {
    slug: "seo-tips",
    title: "SEO Tips — Google पर Website Rank कैसे करें",
    excerpt: "10 practical SEO tips जिनसे आपकी website Google पर ऊपर आएगी और ज़्यादा customers मिलेंगे।",
    date: "18 May, 2026",
    category: "SEO",
    readTime: "5 min read",
    gradient: "from-amber-500 to-orange-600",
    content: [
      "SEO (Search Engine Optimization) से आपकी website Google पर ऊपर rank करती है — बिना ads पर पैसे खर्च किए customers मिलते हैं।",
      "Top SEO tips: fast loading website, mobile responsive design, सही title और meta description, quality content और Google Business Profile।",
      "Website speed सबसे ज़रूरी factor है — 3 second से ज़्यादा load time पर 50% visitors चले जाते हैं। Next.js जैसी modern technology से बनी websites बहुत fast होती हैं।",
      "Sachin.net की हर website SEO-ready बनती है — proper structure, fast speed और Google indexing के साथ।",
    ],
  },
];

export const faqs = [
  {
    q: "Website बनने में कितना समय लगता है?",
    a: "Basic website 3–5 दिन में, business website 7–14 दिन में और e-commerce/custom software 3–6 हफ्तों में तैयार हो जाता है।",
  },
  {
    q: "क्या website mobile पर भी सही चलेगी?",
    a: "हाँ, हमारी हर website 100% mobile responsive होती है — mobile, tablet और desktop सब पर perfect दिखती है।",
  },
  {
    q: "Payment कैसे करना होता है?",
    a: "50% advance और 50% delivery पर। बड़े projects में milestone-based payment भी available है।",
  },
  {
    q: "क्या delivery के बाद support मिलता है?",
    a: "हाँ, हर package के साथ free support period मिलता है। उसके बाद affordable maintenance plans available हैं।",
  },
  {
    q: "क्या आप hosting और domain भी setup करते हैं?",
    a: "हाँ, हम domain, hosting, SSL certificate और business email का complete setup करते हैं।",
  },
];
