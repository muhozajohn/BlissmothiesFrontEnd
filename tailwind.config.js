/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#e7c484b0",
        btnColor: "#FE5201",
        footerColor: "#0B0A0A",
        overLayColor: "#E7C584",
        headingColor: "#FE5201",
        textColor: "#D9D9D9",
        blackRgba: "rgba(0, 0, 0, 0.54)",
      },
      boxShadow: {
        panelShadow: "rgba(17,12,46,0.15) 0px 48px 100px 0px",
      },
    },
  },
  plugins: [],
};
