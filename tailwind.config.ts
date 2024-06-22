import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
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
    },
  },
  plugins: [
    require("tailwindcss-animate"),

    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".flexj-start": {
          "@apply flex items-center justify-start": {},
        },
        ".flexj-end": {
          "@apply flex items-center justify-end": {},
        },
        ".flexi-start": {
          "@apply flex items-start justify-start": {},
        },
        ".flexi-end": {
          "@apply flex items-end justify-end": {},
        },
        ".flex-center": {
          "@apply flex items-center justify-center w-full": {},
        },
        ".flexc-start": {
          "@apply flex items-start flex-col justify-center w-full": {},
        },
        ".flexc-center": {
          "@apply flex items-center flex-col justify-center w-full": {},
        },
        ".flexc-end": {
          "@apply flex items-end flex-col justify-center w-full": {},
        },
        ".flexc-between": {
          "@apply flex items-end flex-col justify-between w-full": {},
        },
        ".flexr-start": {
          "@apply flex items-center justify-start w-full": {},
        },
        ".flexr-center": {
          "@apply flex flex-row items-center justify-start w-full": {},
        },
        ".flexr-end": {
          "@apply flex flex-row items-center justify-end w-full": {},
        },
        ".flexr-between": {
          "@apply flex flex-row items-center justify-between w-full": {},
        },
        ".add-effect": {
          "@apply transition-all duration-300 ease-in-out": {},
        },
        ".add-grid": {
          "@apply grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4": {},
        },
       
      });
      addUtilities({});
    }),
  ],
} satisfies Config;

export default config;
