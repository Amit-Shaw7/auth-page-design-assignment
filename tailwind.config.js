/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white-custom": "#F7F8F9",
        "black-custom": "##1D2226",
        "gray": "#CBCBCB",
        "pink": "#E70B897B",
        "red": "#DD4A3D",
        "violet": "#6C25FF",
        "violet-light": "#6C25FF4B",
        "gray-light": "#F7F8F9",
        "gray-text" : "#84878b"
      },
      fontSize: {
        "heading": "28px",
        "description": "18px",
        "para": "14px",
        "base": "15px",
        "sm": "13px",
        "md": "18px"
      },
      fontWeight: {
        "heading": "500",
        "description": "400",
        "para": "400",
        "base": "400",
        "sm": "400",
        "md": "400"
      }
    },
  },
  plugins: [],
}

