import type { Config } from "tailwindcss";
import { colors as customColors, typography, spacing, breakpoints } from './app/styles/design-system';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...customColors,
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      current: 'currentColor',
    },
    extend: {
      fontFamily: typography.fonts,
      fontSize: typography.sizes,
      fontWeight: typography.weights,
      spacing,
      screens: breakpoints,
    },
  },
  plugins: [],
};

export default config;
