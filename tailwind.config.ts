import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#101828',
        navy: '#123444',
        pearl: '#f7f7f3',
        gold: '#d4a94f',
        moss: '#305747'
      },
      boxShadow: {
        soft: '0 18px 45px -18px rgba(19, 47, 56, 0.25)',
        float: '0 25px 55px -22px rgba(16, 24, 40, 0.38)'
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.17'/%3E%3C/svg%3E\")"
      }
    }
  },
  plugins: []
};

export default config;
