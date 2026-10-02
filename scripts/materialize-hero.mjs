import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const out = join("public", "bg.png");
if (existsSync(out) && readFileSync(out).length > 100_000) {
  process.exit(0);
}

const dir = "hero";
const parts = readdirSync(dir)
  .filter((name) => name.startsWith("bg.b64."))
  .sort();

if (parts.length === 0) {
  console.error("Falta hero/bg.b64.* para reconstituir public/bg.png");
  process.exit(1);
}

const encoded = parts.map((name) => readFileSync(join(dir, name), "utf8").replace(/\s/g, "")).join("");
writeFileSync(out, Buffer.from(encoded, "base64"));
