import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Excuse Your Agent Gives You — make.fun
// One line, under 200 characters: an AI agent excusing a bug it shipped.
const EXCUSE =
  "In fairness, every test passed; I also wrote the tests, and I'll admit I was rooting for me.";

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
