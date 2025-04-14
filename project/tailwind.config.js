import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        slab: ['"Roboto Slab"', 'serif'], // Add custom name
      },
    },
  },
  plugins: [],
};

export default config;
