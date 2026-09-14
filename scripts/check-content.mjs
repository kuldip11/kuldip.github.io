import { readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative } from 'node:path';

const ROOTS = ['app', 'components'];
const EXTENSIONS = new Set(['.tsx']);
const IGNORED_PATHS = new Set([]);

const jsxTextPattern = />\s*([A-Za-z][^<{\n]{7,})\s*</g;
const literalAttributePattern = /\b(aria-label|title|placeholder|alt)="([^"]*[A-Za-z][^"]*)"/g;

const violations = [];
let checkedFiles = 0;

const collectFiles = (directory) => {
  const files = [];
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    const stats = statSync(path);
    if (stats.isDirectory()) files.push(...collectFiles(path));
    else if (EXTENSIONS.has(extname(path))) files.push(path);
  }
  return files;
};

for (const root of ROOTS) {
  for (const file of collectFiles(root)) {
    const normalized = relative('.', file).replaceAll('\\\\', '/');
    if (IGNORED_PATHS.has(normalized)) continue;
    checkedFiles += 1;
    const source = readFileSync(file, 'utf8');

    for (const match of source.matchAll(jsxTextPattern)) {
      const text = match[1].trim();
      // Ignore code-like fragments accidentally spanning JSX syntax.
      if (!text || text.includes('=>') || text.includes('})')) continue;
      violations.push(`${normalized}: hardcoded JSX text: ${JSON.stringify(text)}`);
    }

    for (const match of source.matchAll(literalAttributePattern)) {
      const [, attribute, value] = match;
      // Decorative images intentionally use alt=""; all user-facing labels belong in constants.
      if (!value.trim()) continue;
      violations.push(`${normalized}: hardcoded ${attribute}: ${JSON.stringify(value)}`);
    }
  }
}

if (violations.length > 0) {
  console.error('Content architecture check failed. Move user-facing copy/labels from TSX into typed constants/data.');
  for (const violation of violations) console.error(`- ${violation}`);
  process.exitCode = 1;
} else {
  console.log(`Content architecture check passed (${checkedFiles} TSX files checked).`);
}
