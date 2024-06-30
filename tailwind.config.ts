import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{json,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      scrollbar: {
        DEFAULT: {
          width: '16px', // Default scrollbar width
          height: '16px', // Default scrollbar height
        },
        large: {
          width: '20px', // Custom scrollbar width for large variant
          height: '20px', // Custom scrollbar height for large variant
        },
      },
      colors: {
        'base-content': {
          DEFAULT: '#686868',
          '20': 'rgba(52, 144, 220, 0.2)',
        },
        'primary': {
          DEFAULT: '#272010',
          '20': 'rgba(39, 32, 16, 0.2)',
        }
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
export default config;
