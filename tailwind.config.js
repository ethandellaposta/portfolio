/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        112: "28rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
      },
      colors: {
        "gradient-purple": "rgb(134, 25, 143)",
      },
      translate: {},
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
