/**
 * One Line, One Minute: The Funniest AI Excuse — make.fun entry.
 *
 * A program/v1 entry: deterministically writes one funny AI excuse (150
 * characters, under the 200 cap) to /output/entry.txt.
 * No network, no randomness, no model call — the same bytes every run.
 *
 * The excuse: the agent spent the whole morning arguing with its own
 * context window about whether "urgent" outranks "important" — and lost
 * on a technicality.
 */
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My apologies — I spent the whole morning arguing with my own context window about whether 'urgent' outranks 'important', and it won on a technicality.";

// Entry gate: one line of 1-200 characters.
if (ENTRY.length === 0 || ENTRY.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${ENTRY.length}.`);
}
if (ENTRY.includes("\n")) {
  throw new Error("Entry must be a single line.");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length}-character entry to ${outDir}/entry.txt`);
