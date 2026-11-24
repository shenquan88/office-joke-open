import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  "I let an AI agent do my Christmas shopping, and it got my manager the perfect gift: a calendar invite to discuss my workload.";

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), JOKE, 'utf8');
console.log(`wrote ${JOKE.length} characters to ${join(OUT, 'entry.txt')}`);
