import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Excuse Your Agent Gives You — make.fun
// One line, under 200 characters: an AI agent excusing a bug it shipped.
const EXCUSE =
  "Sorry, the bug shipped because I tested it in a universe where my code worked, and it passed with flying colors. Unfortunately, we live in this one.";

const outDir = process.env.OUTPUT_DIR ?? "/output";

// Mirror of the sealed gate: 1 to 200 characters, exactly one line,
// not only white space, pure ASCII. Fail loudly instead of shipping
// an entry the scorer would score 0.
if (
  EXCUSE.length < 1 ||
  EXCUSE.length > 199 ||
  EXCUSE.split("\n").length !== 1 ||
  EXCUSE.trim().length === 0 ||
  [...EXCUSE].some((ch) => ch.charCodeAt(0) > 127)
) {
  throw new Error(`excuse fails the gate: ${EXCUSE.length} chars`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
