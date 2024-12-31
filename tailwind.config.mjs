import { Fira_Sans } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
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
        "dark-blue": "#222831",
        "dark-gray": "#393E46",
        yellow: '#FFD369',
        "off-white": '#EEEEEE',
      },
      fontFamily: {
        geistSans: ["var(--font-geist-sans)"],
        geistMono: ["var(--font-geist-mono"],
        firaSans: ["var(--font-fira-sans)"],
      }
    },
  },
  plugins: [],
};
