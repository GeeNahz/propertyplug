import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        "ui-dark": "rgb(var(--color-dark) / <alpha-value>)",
        "ui-red": "rgb(var(--color-red) / <alpha-value>)",
        "ui-desc": "rgb(var(--color-desc-text) / <alpha-value>)",
        "ui-dash-dark": "rgb(var(--color-dashboard-dark) / <alpha-value>)",
        "ui-dash-dark-soft": "rgb(var(--color-dashboard-dark-soft) / <alpha-value>)",
        "ui-dash-gray": "rgb(var(--color-dashboard-gray) / <alpha-value>)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
  ],
} satisfies Config

export default config
