/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#C5A572', // Warm gold
        secondary: '#f8f9fa'
      }
    }
  },
  plugins: []
}