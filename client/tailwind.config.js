/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
        nerko:["Nerko One", "cursive"]
      },
      colors: {
        primary: '#1a73e8', // Modern blue
        secondary: '#ff8c00', // Accent orange
        dark: '#333333', // Darker text color
        light: '#f5f5f5', // Light background
      },
      fontSize: {
        'heading-xl': '2.5rem', // 40px
        'heading-lg': '2rem', // 32px
        'heading-md': '1.5rem', // 24px
        'heading-sm': '1.25rem', // 20px
        'body-lg': '1.125rem', // 18px
        'body-md': '1rem', // 16px
        'body-sm': '0.875rem', // 14px
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}