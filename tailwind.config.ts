import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/page/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    themes: ["light"],
  },
  plugins: [require("daisyui")]
}
export default config
