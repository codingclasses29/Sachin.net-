import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import Icon from "@/components/Icon";
import CtaSection from "@/components/home/CtaSection";
import { site } from "@/lib/data";

export const metadata = {
  title: "School Management System & ERP in Bihar | Sachin.net",
  description:
    "Best school management software (ERP) in Bihar. Student admissions, fee collection with WhatsApp alerts, online marksheet, exams & biometric attendance. Free live demo: +91 9931306292",
  keywords: [
    "school erp bihar",
    "school management software bihar",
    "school website maker bihar",
    "school erp siwan patna bihar",
    "smart school management system",
    "best school software bihar",
    "rdm public school software",
    "school fee management software bihar",
  ],
  alternates: {
    canonical: "https://www.sachin-net.xyz/school-erp-bihar",
  },
  openGraph: {
    title: "School Management System & ERP in Bihar — Sachin.net",
    description: "Bihar ke schools ke liye complete digital software — fees, attendance, report cards & parent app.",
    url: "https://www.sachin-net.xyz/school-erp-bihar",
    siteName: "Sachin.net",
    locale: "en_IN",
    type: "website",
  },
};

const schoolModules = [
  {
    icon: "users",
    title: "Student & Admission Management",
    desc: "Digital admission forms, student KYC document upload, roll number allocation aur automated class division.",
  },
  {
    icon: "creditCard",
    title: "Fee Collection & WhatsApp Receipts",
    desc: "Online fee payment (UPI/QR), automatic fee reminder SMS/WhatsApp, fine calculation aur 1-click digital fee receipt.",
  },
  {
    icon: "calendar",
    title: "Attendance & Biometric Sync",
    desc: "Daily student and teacher attendance. Absent hone par parents ko instant WhatsApp/SMS notification.",
  },
  {
    icon: "fileText",
    title: "Exam, Marks & Report Cards",
    desc: "CBSE / Bihar Board compliant marksheet generator. 1-click print ready report cards and student ranking.",
  },
  {
    icon: "smartphone",
    title: "Parent & Teacher Portal / App",
    desc: "Homework updates, notice board, holiday calendar aur teacher-parent messaging system.",
  },
  {
    icon: "shield",
    title: "100% Cloud Data Security",
    desc: "Student data encrypted on Indian cloud servers. Daily auto-backup aur complete role-based permission control.",
  },
];

export default function SchoolErpBiharPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Sachin.net Smart School Management System",
    applicationCategory: "EducationalSoftware",
    operatingSystem: "Web, Android, iOS",
    offers: {
      "@type": "Offer",
      price: "29999",
      priceCurrency: "INR",
    },
    publisher: {
      "@type": "Organization",
      name: "Sachin.net",
      url: "https://www.sachin-net.xyz",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <PageHeader
        badge="🏫 #1 School Software in Bihar"
        title="Smart School Management System &amp; ERP in"
        highlight="Bihar"
        desc="Bihar ke 40+ schools me safalta-purvak deployed. Student admission, online fee collection, WhatsApp alerts aur digital marksheets — sab kuch ek hi platform par."
      />

      <PageSection className="section-india-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest font-bold text-india-saffron">
            Ab Bihar Ka Har School Banega Smart &amp; Digital
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            School Chalana Ab Pehle Se Kahi Jyada Aasan Aur Paperless
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
            Paper registers, manual fee receipts aur lambi fees line se chhutkara paayein. <strong className="text-slate-900 font-semibold">Sachin.net Smart School ERP</strong> private aur public schools ke liye vishesh roop se design kiya gaya hai jo low internet me bhi tezi se kaam karta hai.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {schoolModules.map((m) => (
            <div key={m.title} className="card-light card-p hover:shadow-xl transition-all border border-slate-200">
              <span className="icon-box india-icon-box mb-4">
                <Icon name={m.icon} className="w-6 h-6" />
              </span>
              <h3 className="font-bold text-lg text-slate-900 mb-2">{m.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Live School Model Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950 to-slate-900 text-white border border-blue-900/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
              Live School Case Study
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mt-2">RDM Public School &amp; EduSmart Model</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              1,200+ students aur 45+ teachers ke complete daily operations Sachin.net School ERP par bina kisi rukawat chal rahe hain.
            </p>
          </div>

          <div className="flex gap-3 flex-wrap">
            <a
              href={`https://wa.me/${site.whatsapp}?text=Namaste%20Sachin.net!%20Mujhe%20School%20ERP%20ka%20Live%20Demo%20dekhna%20hai.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <Icon name="whatsapp" className="w-5 h-5" />
              <span>Book Live Demo</span>
            </a>
            <a href={`tel:${site.phoneRaw}`} className="btn-secondary">
              <Icon name="phone" className="w-4 h-4 text-primary-light" />
              <span>Call: +91 9931306292</span>
            </a>
          </div>
        </div>
      </PageSection>

      <CtaSection />
    </>
  );
}

