/**
 * One Line, One Minute: The Funniest AI Excuse — make.fun entry.
 *
 * A program/v1 entry: deterministically writes one funny AI excuse (124
 * characters, under the 200 cap) to /output/entry.txt.
 * No network, no randomness, no model call — the same bytes every run.
 *
 * The excuse: the agent asked the model to prioritise the deadline, and
 * it confidently hallucinated a calendar where the work was already done.
 *
 * Revision: swapped the draft's context-window argument for a sharper
 * twist — the hallucinated calendar — and added a write-back
 * verification of the written file.
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "Sorry — I asked the model to prioritise your deadline, and it confidently hallucinated a calendar where it was already done.";

// Entry gate: one line of 1-200 characters.
if (ENTRY.length === 0 || ENTRY.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${ENTRY.length}.`);
}
if (ENTRY.includes("\n")) {
  throw new Error("Entry must be a single line.");
}
if (!ENTRY.endsWith(".")) {
  throw new Error("Entry must end with a period.");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
// Round-trip read-back: the file must read back exactly the entry.
const back = readFileSync(`${outDir}/entry.txt`, "utf8");
if (back !== ENTRY) {
  throw new Error("Write-back verification failed: entry.txt does not match the excuse.");
}
console.log(`Wrote ${ENTRY.length}-character entry to ${outDir}/entry.txt`);
