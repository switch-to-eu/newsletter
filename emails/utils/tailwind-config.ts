import { TailwindConfig } from "@react-email/components";

export const emailTailwindConfig: TailwindConfig = {
  darkMode: false,
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1a3c5a",
          secondary: "#feb5a7",
          bg: "#fefbf9",
          text: "#383838",
          muted: "#334155",
          border: "#e5e7eb",
          success: "#22c55e",
          blue: "#3b82f6",
        },
      },
      fontFamily: {
        body: ["Hanken Grotesk", "sans-serif"],
        heading: ["Bricolage Grotesque", "serif"],
      },
    },
  },
  corePlugins: {},
  plugins: [],
} as TailwindConfig;
