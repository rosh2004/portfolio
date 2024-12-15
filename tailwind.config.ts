import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: "class",
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
				primary: {
					DEFAULT: "var(--primary-500)",
          200: "var(--primary-200)",
          500: "var(--primary-500)",
          800: "var(--primary-800)",
        },
        secondary: {
					DEFAULT: "var(--secondary-500)",
          200: "var(--secondary-200)",
          500: "var(--secondary-500)",
          800: "var(--secondary-800)",
        },
        accent: {
					DEFAULT: "var(--accent-500)",
          200: "var(--accent-200)",
          500: "var(--accent-500)",
          800: "var(--accent-800)",
        },
        sectionBg: {
          DEFAULT: "var(--section-bg)",
        }
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
    fontFamily: {
      inter: ["var(--font-inter)", "sans-serif"],
      roboto: ["var(--font-roboto)", "sans-serif"],
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
