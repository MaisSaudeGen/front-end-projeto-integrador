/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'principal-5': '#7400B8',
        'principal-4': '#6930C3',
        'principal-3': '#5E60CE',
        'principal-2': '#5390D9',
        'principal-1': '#4EA8DE',
        'secundario-5': '#48BFE3',
        'secundario-4': '#56CFE1',
        'secundario-3': '#64DFDF',
        'secundario-2': '#72EFDD',
        'secundario-1': '#80FFDB',
      }
    },
  },
  plugins: [],
}

