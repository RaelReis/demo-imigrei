/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1140px",
        },
      },
      colors: {
        base: {
          title: "#1D1D1D",
          text: "#777777",
          label: "#1E5720",
          green: "#1E5720",
          blue: "#11569E",
          "green-light": "#E3F1E4",
          white: "#FAFAFA",
          footer: "#D9D9D9",
          "blog-tag": "rgba(119,119,119,.1)",
        },
      },
      backgroundImage: {
        newsletter: "url(/assets/newsletter-bg.png)",
        "footer-desktop": "url(/assets/footer-bg.png)",
        "footer-mobile": "url(/assets/footer-mobile-bg.png)",
      },
    },
  },
  plugins: [],
};
