import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: "#003D2E",
        mint: "#98FFD9",
        light: "#F4F7F6",
        ink: "#1A1A1A"
      },
      borderRadius: {
        shell: "32px",
        pill: "999px"
      },
      boxShadow: {
        soft: "0 20px 40px -15px rgba(0, 61, 46, 0.05)"
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
