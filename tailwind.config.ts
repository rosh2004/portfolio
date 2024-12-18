import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: "media",
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: {
          DEFAULT: 'var(--foreground)',
          light: 'var(--foreground-light)',
        },
				primary: {
					DEFAULT: "var(--primary)",
        },
        secondary: {
					DEFAULT: "var(--secondary)",
        },
        accent: {
					DEFAULT: "var(--accent)",
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
