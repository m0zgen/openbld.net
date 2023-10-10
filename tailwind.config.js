/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      // "./src/components/**/*.{js,jsx,ts,tsx}",
      "./src/pages/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      // '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '2xl': '1320px',
    }
  },
  plugins: [],
  corePlugins: {
    // preflight: false,
  },
  // prefix: "tw-",
  // important: true,
}

