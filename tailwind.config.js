/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        popi: "Poppins",
        kochad: "Kodchasan",
        roboto: "Roboto",
      },
    },
  },
  plugins: [],
};
