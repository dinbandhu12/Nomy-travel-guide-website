import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      },
      colors: {
        forest: "#003D2E",
        mint: "#3DDBC8",
        "mint-deep": "#1EAD96",
        light: "#F5EAD8",
        cream: "#FBF7F0",
        sand: "#EEE0C8",
        sky: "#E3F2F9",
        border: "#D6C9B6",
        ink: "#0F1A16"
      },
      borderRadius: {
        shell: "32px",
        pill: "999px"
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(0, 61, 46, 0.14)",
        card: "0 2px 12px -2px rgba(0, 61, 46, 0.10), 0 0 0 1px rgba(0, 61, 46, 0.06)"
      },
      spacing: {
        section: "10rem"
      },
      maxWidth: {
        "8xl": "1440px"
      }
    }
  },
  plugins: []
};

export default config;
