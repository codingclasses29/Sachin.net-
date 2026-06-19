import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const source = resolve(root, ".env.example");
const target = resolve(root, ".env.production");

if (!existsSync(source)) {
  console.error("Missing .env.example — cannot prepare production env.");
  process.exit(1);
}

copyFileSync(source, target);
console.log("Copied .env.example → .env.production for Netlify build");
