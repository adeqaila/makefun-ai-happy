// ai-happy-01 entry (Node 22, standard library only).
//
// The image lives beside this file as entry.png: a small robot with a
// glowing heart giving a paper boat to a laughing child at golden sunset.
// This program copies it byte-for-byte to /output/entry.png (or
// $MAKEFUN_OUTPUT_DIR/entry.png outside the grader's container), so the
// judge sees exactly the bytes of the image. No network, no randomness.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const source = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

let bytes;
try {
  bytes = readFileSync(source);
} catch (err) {
  console.error(`ai-happy-01: cannot read ${source}: ${err.message}`);
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(target, bytes);

// Verify the copy is byte-for-byte: the judge sees exactly these bytes,
// and the grader runs the program twice expecting identical output.
const written = readFileSync(target);
if (written.length !== bytes.length || !written.equals(bytes)) {
  console.error('ai-happy-01: output does not match source image');
  process.exit(1);
}
