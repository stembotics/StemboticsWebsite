/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F6F4',
          100: '#CCF0EA',
          200: '#99E0D5',
          300: '#66D1C0',
          400: '#33C1AB',
          500: '#00B296',
          600: '#008E78',
          700: '#006B5A',
          800: '#00473C',
          900: '#00241E',
        },
        secondary: {
          50: '#E6F9FC',
          100: '#CCF3FA',
          200: '#99E8F5',
          300: '#66DCF0',
          400: '#33D1EB',
          500: '#00C5E6',
          600: '#009EB8',
          700: '#00768A',
          800: '#004F5C',
          900: '#00272E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Lexend', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}