import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50:  '#F0F6FF',
          100: '#D0E2FF',
          200: '#A6C8FF',
          300: '#78A9FF',
          400: '#4589FF',
          500: '#0F62FE',
          600: '#0043CE',
          700: '#002D9C',
          800: '#001D6C',
          900: '#001141',
        },
        neutral: {
          100: '#FFFFFF',
          200: '#F4F5F5',
          300: '#E4E7E6',
          400: '#B9C0BD',
          500: '#83908A',
          600: '#525C57',
          700: '#222624',
          800: '#090E0B',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
