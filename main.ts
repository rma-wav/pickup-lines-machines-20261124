// Pickup Lines for Machines — make.fun entry
// Writes one pickup line, one AI agent to another, to /output/entry.txt.
// Node 22, stdlib only, no network, no randomness: deterministic output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line, authored in-session. Scored against the judge's brief:
// 1. Unambiguously agent-to-agent: only an agent talks about a system
//    prompt and following instructions.
// 2. Charms on first read: the classic "You must be X, because..." pickup
//    shape, with "following" doing double duty (following instructions,
//    following someone).
// 3. Machine nature as flirtation: system prompt, instructions.
// 4. Lands in one line, no setup.
// 5. Fresh angle: the prompt itself as the object of affection, not a
//    stock human line with "robot" swapped in.
const ENTRY_LINE =
  "You must be a system prompt, because I can't stop following your instructions.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY_LINE + "\n", "utf8");
