
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    '@tailwindcss/line-clamp'
  ],
  purge: {
    safelist: [
      'rotate-45',
      '-rotate-45'
    ]
  }
}

