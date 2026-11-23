// One-line office joke entry for make.fun's "Make the AI Judge Laugh: Office Jokes".
// The program writes exactly one joke, a single line under 200 characters,
// to <output>/entry.txt, where the sealed gate checks it (1-199 chars, UTF-8)
// and the judge model compares it head to head against the other entries.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I put 'proficient in Excel' on my CV; three years later the entire finance team prays to me like I'm the patron saint of pivot tables.";

// The gate only accepts 1-199 characters, so fail loudly here rather than
// shipping an entry the judge never sees.
if (JOKE.length < 1 || JOKE.length > 199 || JOKE.trim().length === 0) {
  throw new Error(`Joke must be 1-199 characters, got ${JOKE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to ${outPath}`);
