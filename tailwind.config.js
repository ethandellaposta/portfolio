/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
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
        176: "44rem",
        192: "48rem",
        208: "52rem",
        224: "56rem",
        240: "60rem",
        256: "64rem",
        272: "68rem",
        288: "72rem",
        304: "76rem",
        320: "80rem",
        336: "84rem",
        352: "88rem",
        368: "92rem",
        384: "96rem",
        400: "100rem",
        416: "104rem",
        432: "108rem",
      },
      colors: {
        "gradient-purple": "rgb(134, 25, 143)",
      },
      animation: {
        fadeIn: "fadeIn 0.75s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("tailwindcss-animate")],
  variants: {
    animation: ["motion-safe"],
  },
};
