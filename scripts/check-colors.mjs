import { readdir, readFile } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';
import process from 'node:process';

const ROOTS = ['app', 'components'];
const SOURCE_EXTENSIONS = new Set(['.ts', '.tsx']);
const RAW_HEX = /#[0-9a-fA-F]{3,8}\b/g;

// Raw presentation colors are not allowed in application components. Product
// illustration palettes belong in typed data/constants rather than component JSX.
const ALLOWED_VISUAL_EXCEPTIONS = new Set();

const collectFiles = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) return collectFiles(path);
      return SOURCE_EXTENSIONS.has(extname(entry.name)) ? [path] : [];
    }),
  );
  return nested.flat();
};

const files = (await Promise.all(ROOTS.map(collectFiles))).flat();
const violations = [];

for (const file of files) {
  const normalized = relative(process.cwd(), file).replaceAll('\\', '/');
  if (ALLOWED_VISUAL_EXCEPTIONS.has(normalized)) continue;

  const source = await readFile(file, 'utf8');
  const lines = source.split('\n');
  lines.forEach((line, index) => {
    const matches = [...line.matchAll(RAW_HEX)];
    for (const match of matches) {
      violations.push(`${normalized}:${index + 1} ${match[0]}`);
    }
  });
}

if (violations.length > 0) {
  console.error('Raw presentation colors found. Use semantic design tokens instead:\n');
  console.error(violations.join('\n'));
  process.exit(1);
}

console.log(
  `Color token check passed (${files.length - ALLOWED_VISUAL_EXCEPTIONS.size} checked files, ${ALLOWED_VISUAL_EXCEPTIONS.size} documented visual exceptions).`,
);
