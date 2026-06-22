import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { execSync } from "node:child_process";

const envPath = resolve(process.cwd(), ".env.local");
const lines = readFileSync(envPath, "utf8")
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith("#"));

const secretKeys = [
  "GEMINI_API_KEY",
  "GROQ_API_KEY",
  "OPENROUTER_API_KEY",
  "OPENAI_API_KEY",
  "NODEMAILER_EMAIL",
  "NODEMAILER_PASSWORD",
  "CONTACT_ALERT_EMAIL",
  "TWILIO_ACCOUNT_SID",
  "TWILIO_AUTH_TOKEN",
  "TWILIO_PHONE_NUMBER",
  "ADMIN_ALERT_PHONE_NUMBER",
  "CLOUDINARY_CLOUD_NAME",
  "CLOUDINARY_API_KEY",
  "CLOUDINARY_API_SECRET",
  "FIREBASE_SERVER_API_KEY",
];

const envMap = Object.fromEntries(
  lines
    .map((line) => {
      const i = line.indexOf("=");
      if (i === -1) return null;
      return [line.slice(0, i).trim(), line.slice(i + 1).trim()];
    })
    .filter(Boolean)
);

console.log("Setting Firebase App Hosting secrets...\n");
console.log("Run: npx -y firebase-tools@latest login");
console.log("Run: npx -y firebase-tools@latest use com-example-sachinnet-a7973\n");

for (const key of secretKeys) {
  const value = envMap[key];
  if (!value) {
    console.log(`- skip ${key} (not in .env.local)`);
    continue;
  }
  try {
    execSync(
      `npx -y firebase-tools@latest apphosting:secrets:set ${key} --data-file - --force`,
      { input: value, stdio: ["pipe", "inherit", "inherit"], shell: true }
    );
    console.log(`✓ ${key}`);
  } catch {
    console.error(`✗ ${key}`);
  }
}

console.log("\nThen deploy: npm run deploy:firebase");
