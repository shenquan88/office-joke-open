import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  "Our new open-door policy is a hit: I can now hear the exact moment my manager decides my idea was his.";

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), JOKE, 'utf8');
console.log(`wrote ${JOKE.length} characters to ${join(OUT, 'entry.txt')}`);
