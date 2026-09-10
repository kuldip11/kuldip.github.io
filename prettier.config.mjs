/** @type {import('prettier').Config} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'all',
  tailwindStylesheet: './app/globals.css',
};

export default config;
