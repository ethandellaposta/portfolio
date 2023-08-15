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
        y1: "35rem",
        y2: "40rem",
        y3: "45rem",
        y4: "50rem",
        y5: "55rem",
        y6: "60rem",
        y7: "65rem",
        y8: "70rem",
        y9: "75rem",
        y10: "80rem",
      },
      translate: {},
    },
  },
  plugins: [],
};
