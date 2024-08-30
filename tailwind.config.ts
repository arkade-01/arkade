import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px', // Ensure the 'xs' breakpoint is still available
        'xx': '350px', // Ensure the 'xs' breakpoint is still available
        'xr': '400px', // Ensure the 'xs' breakpoint is still available
      },
    },
  },
  plugins: [],
};
export default config;
