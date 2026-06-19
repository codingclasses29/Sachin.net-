import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const envPath = resolve(process.cwd(), ".env.local");
const lines = readFileSync(envPath, "utf8")
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith("#"));

console.log(`Setting ${lines.length} Netlify environment variables...\n`);

for (const line of lines) {
  const index = line.indexOf("=");
  if (index === -1) continue;

  const key = line.slice(0, index).trim();
  const value = line.slice(index + 1).trim();
  if (!key || !value) continue;

  try {
    execSync(`npx --yes netlify-cli env:set "${key}" "${value}" --context production --context deploy-preview --context branch-deploy`, {
      stdio: "inherit",
      shell: true,
    });
    console.log(`✓ ${key}`);
  } catch {
    console.error(`✗ Failed: ${key}`);
  }
}

console.log("\nDone. Trigger redeploy from Netlify dashboard if needed.");
