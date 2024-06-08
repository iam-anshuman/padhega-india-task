import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

    },
    daisyui: {
      themes: true, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
      darkTheme: "dim", // name of one of the included themes for dark mode
      base: true, // applies background color and foreground color for root element by default
      styled: true, // include daisyUI colors and design decisions for all components
      utils: true, // adds responsive and modifier utility classes
      prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
      logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
      themeRoot: ":root", // The element that receives theme color CSS variables
    },
  },
  daisyui: {
    themes: [
      "emerald",
      "dim",
      ],
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
