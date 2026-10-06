import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

console.log("==========================================");
console.log("🔍 STARTING COMPREHENSIVE WEBSITE AUDIT & TEST");
console.log("==========================================\n");

let passed = 0;
let failed = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`✅ PASS: ${testName}`);
    passed++;
  } else {
    console.error(`❌ FAIL: ${testName}`);
    failed++;
  }
}

// 1. Verify Assets
console.log("\n--- [1] Checking Essential Assets ---");
const requiredAssets = [
  "public/logo.png",
  "public/images/logo.png",
  "app/icon.png",
  "public/images/hero-bg.png",
  "public/images/portfolio-edu.png",
  "public/images/portfolio-shop.png",
  "public/images/portfolio-health.png",
  "public/team/sachin-kumar.png",
  "public/team/sanjeev-kumar.png",
  "public/team/tushar-chaudhary.png",
  "public/team/md-akif-khan.png",
  "public/banners/hospital-management.png",
  "public/banners/digital-services.png",
  "public/banners/website-development.png",
  "public/banners/hosting-servers.png",
  "public/banners/school-management.png",
];

for (const asset of requiredAssets) {
  const fullPath = path.join(rootDir, asset);
  const exists = fs.existsSync(fullPath);
  const size = exists ? fs.statSync(fullPath).size : 0;
  assert(exists && size > 0, `Asset exists & non-empty: ${asset} (${size} bytes)`);
}

// Check Favicon & Icon files
const faviconApp = path.join(rootDir, "app/favicon.ico");
const faviconPublic = path.join(rootDir, "public/favicon.ico");
assert(fs.existsSync(faviconApp) && fs.statSync(faviconApp).size > 1000, "app/favicon.ico exists and has custom logo data");
assert(fs.existsSync(faviconPublic) && fs.statSync(faviconPublic).size > 1000, "public/favicon.ico exists and has custom logo data");

// 2. Verify Data & Contact Info
console.log("\n--- [2] Checking Contact & Brand Config ---");
async function testData() {
  const dataPath = path.join(rootDir, "lib", "data.js");
  const dataContent = fs.readFileSync(dataPath, "utf8");

  assert(dataContent.includes('phone: "+91 9931306292"'), "Phone is +91 9931306292");
  assert(dataContent.includes('whatsapp: "919931306292"'), "WhatsApp is 919931306292");
  assert(dataContent.includes('email: "codingclasses29@gmail.com"'), "Email is codingclasses29@gmail.com");
  assert(dataContent.includes('address: "Siwan (Bihar), India"'), "Address is Siwan (Bihar), India");
  assert(dataContent.includes('founder: "Sachin Kushwaha"'), "Founder is Sachin Kushwaha");
  assert(dataContent.includes("https://www.youtube.com/@BR_Siwan29"), "YouTube link is @BR_Siwan29");
  assert(dataContent.includes("https://www.instagram.com/___sachinkushwaha"), "Instagram is ___sachinkushwaha");
  assert(dataContent.includes("https://www.facebook.com/sachinkushwaha"), "Facebook is sachinkushwaha");

  assert(dataContent.includes('domain: "www.sachin-net.xyz"'), "Official domain is www.sachin-net.xyz");
  assert(dataContent.includes('url: "https://www.sachin-net.xyz"'), "Official URL is https://www.sachin-net.xyz");

  // Pricing checks
  assert(dataContent.includes("Starter Website"), "Starter Website package exists");
  assert(dataContent.includes("₹2,999"), "Starter Website price is ₹2,999");
  assert(dataContent.includes("NGO Website & App"), "NGO package exists");
  assert(dataContent.includes("₹6,999"), "NGO package price is ₹6,999");
  assert(dataContent.includes("Old Website Bug Fixing"), "Bug fixing service exists");
  assert(dataContent.includes("₹999/-"), "Bug fix price is ₹999/-");
}
testData();

// 3. Verify All Core Pages Exist
console.log("\n--- [3] Checking Core App Pages ---");
const corePages = [
  "app/page.js",
  "app/layout.js",
  "app/contact/page.js",
  "app/services/page.js",
  "app/portfolio/page.js",
  "app/pricing/page.js",
  "app/about/page.js",
  "app/careers/page.js",
  "app/website-development/page.js",
  "app/ai-services/page.js",
  "app/ai-tools/page.js",
  "app/blog/page.js",
  "app/privacy/page.js",
  "app/terms/page.js",
];

for (const page of corePages) {
  const fullPath = path.join(rootDir, page);
  const exists = fs.existsSync(fullPath);
  assert(exists, `Page file exists: ${page}`);
}

// 4. Verify Components & Logo In Navbar & Footer
console.log("\n--- [4] Checking Navbar & Footer Logo Integration ---");
const navbarContent = fs.readFileSync(path.join(rootDir, "components", "Navbar.js"), "utf8");
assert(navbarContent.includes('src="/logo.png"'), "Navbar includes /logo.png");
assert(navbarContent.includes("alt=\"Sachin.net Online Services\""), "Navbar has logo alt text");
assert(navbarContent.includes("maxHeight: \"42px\""), "Navbar logo has strict 42px maxHeight inline style");

const layoutContent = fs.readFileSync(path.join(rootDir, "app", "layout.js"), "utf8");
assert(layoutContent.includes("https://www.sachin-net.xyz"), "layout.js metadataBase is https://www.sachin-net.xyz");
assert(layoutContent.includes("favicon.ico"), "layout.js metadata contains favicon.ico");

const footerContent = fs.readFileSync(path.join(rootDir, "components", "Footer.js"), "utf8");
assert(footerContent.includes('src="/logo.png"'), "Footer includes /logo.png");
assert(footerContent.includes("codingclasses29@gmail.com") || footerContent.includes("site.email"), "Footer has email reference");
assert(footerContent.includes("site.phone"), "Footer has phone reference");

// Check BannerSlider Component
const bannerSliderPath = path.join(rootDir, "components", "home", "BannerSlider.js");
assert(fs.existsSync(bannerSliderPath), "components/home/BannerSlider.js exists");
if (fs.existsSync(bannerSliderPath)) {
  const bannerSliderContent = fs.readFileSync(bannerSliderPath, "utf8");
  assert(bannerSliderContent.includes("hospital-management.png"), "BannerSlider includes hospital-management.png");
  assert(bannerSliderContent.includes("digital-services.png"), "BannerSlider includes digital-services.png");
  assert(bannerSliderContent.includes("website-development.png"), "BannerSlider includes website-development.png");
  assert(bannerSliderContent.includes("hosting-servers.png"), "BannerSlider includes hosting-servers.png");
  assert(bannerSliderContent.includes("school-management.png"), "BannerSlider includes school-management.png");
}

const pageHomeContent = fs.readFileSync(path.join(rootDir, "app", "page.js"), "utf8");
assert(pageHomeContent.includes("<BannerSlider"), "app/page.js renders <BannerSlider />");

// 5. Verify Special Offers Component
console.log("\n--- [5] Checking Special Promotional Offers ---");
const offersPath = path.join(rootDir, "components", "home", "SpecialOffersSection.js");
const offersExists = fs.existsSync(offersPath);
assert(offersExists, "SpecialOffersSection.js component exists");
if (offersExists) {
  const offersContent = fs.readFileSync(offersPath, "utf8");
  assert(offersContent.includes("WEBSITE बनवानी है KYA"), "Offer 1 has 'WEBSITE बनवानी है KYA'");
  assert(offersContent.includes("₹2,999"), "Offer 1 has '₹2,999'");
  assert(offersContent.includes("NGO संस्था"), "Offer 2 has 'NGO संस्था'");
  assert(offersContent.includes("₹6,999"), "Offer 2 has '₹6,999'");
  assert(offersContent.includes("₹999/-"), "Bug fix banner has '₹999/-'");
  assert(offersContent.includes("9931306292"), "WhatsApp phone number is present in CTAs");
}

// 6. Verify API Endpoints
console.log("\n--- [6] Checking API Route Implementations ---");
const apiRoutes = [
  "app/api/contact/route.js",
  "app/api/chat/route.js",
  "app/api/newsletter/route.js",
  "app/api/ml/route.js",
];

for (const api of apiRoutes) {
  const fullPath = path.join(rootDir, api);
  const exists = fs.existsSync(fullPath);
  assert(exists, `API route exists: ${api}`);
}

// Summary
console.log("\n==========================================");
console.log(`📊 TEST RESULTS: ${passed} PASSED, ${failed} FAILED`);
console.log("==========================================");

if (failed > 0) {
  process.exit(1);
} else {
  console.log("🎉 ALL TESTS PASSED SUCCESSFULLY!\n");
  process.exit(0);
}
