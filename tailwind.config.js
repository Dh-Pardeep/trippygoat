/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontSize: {
      "base": "16px",
      "xxsm": "18px",
      "xsm": "20px",
      "sm": "24px",
      "smm": "34px",
      "xmd": "36px",
      "md": "40px",
      "lg": "48px",
      "xl": "64px"
    },
    fontFamily: {
      Black_Sans: ['Black Han Sans', "sans-serif"],
      m_plus: ['M+PLUS+1', "sans-serif"],
    },
  },
  plugins: [],
}

