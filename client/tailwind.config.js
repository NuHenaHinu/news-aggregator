/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
        lightBg: '#F5F5F5',
        lightBgPrimary: '#E0E0E0',
        lightBgSecondary: '#BDBDBD',
    }
  },
  plugins: [],
}