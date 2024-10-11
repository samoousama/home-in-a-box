import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      'sm': {'min': '320px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }
      
      'ms': {'min': '540px', 'max': '767px'},
      // => @media (min-width: 540px and max-width: 767px) { ... }
      
      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xc': {'min': '1280px', 'max': '1398px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }

      '3xl': {'min': '1535px', 'max': '6500px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
    },
  },
  plugins: [],
};
export default config;
