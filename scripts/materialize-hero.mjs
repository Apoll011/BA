import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const expected = 2_243_519;
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const out = join("public", "bg.png");

function isHero(buf) {
  return buf.length === expected && buf.subarray(0, pngMagic.length).equals(pngMagic);
}

if (existsSync(out) && isHero(readFileSync(out))) {
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
const image = Buffer.from(encoded, "base64");
if (!isHero(image)) {
  console.error(`A fotografia ainda não está completa (${image.length} bytes, ${parts.length} partes).`);
  process.exit(1);
}

writeFileSync(out, image);
