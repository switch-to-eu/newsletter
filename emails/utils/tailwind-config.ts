import { TailwindConfig } from "@react-email/components";

export const emailTailwindConfig: TailwindConfig = {
  darkMode: "media",
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
        body: [
          "Hanken Grotesk",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        heading: [
          "Bricolage Grotesque",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
    },
  },
  corePlugins: {},
  plugins: [],
} as TailwindConfig;
