import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'xx': '350px',
        'xr': '400px', 
      },
      animation: {
        'blink': 'blink-animation 1.75s infinite',
      },
      keyframes: {
        'blink-animation': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        /* Hide scrollbar for Chrome, Safari, and Opera */
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        /* Hide scrollbar for IE, Edge, and Firefox */
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none',    /* Firefox */
        },
      });
    }),
  ],
};
export default config;
