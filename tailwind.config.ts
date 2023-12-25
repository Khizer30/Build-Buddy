import { type Config } from "tailwindcss";

const config: Config =
{
  content:
    [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}"
    ],
  theme:
  {
    colors:
    {
      "white": "#E2E2E2",
      "black": "#171717"
    },
    fontFamily:
    {
      primary: ["Bebas Neue", "sans-serif"],
      secondary: ["Lato", "sans-serif"]
    },
    container:
    {
      center: true
    }
  }
};

export default config;