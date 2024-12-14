/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '6px 6px 8px #111, -6px -6px 8px #333',
        'active': 'inset 4px 4px 8px #111, inset -4px -4px 8px #333',
        'hover': 'inset 1px 1px 8px #111, inset -1px -1px 8px #333',
        'neumorphism': '6px 6px 12px rgba(0, 0, 0, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.7)',
        'neumorphism-hover': '6px 6px 12px rgba(0, 0, 0, 0.15), -6px -6px 12px rgba(255, 255, 255, 0.8)',
      },
      colors: {
        'neumorphism-bg': '#e0e5ec',
      },
    },
  },
  plugins: [],
}

