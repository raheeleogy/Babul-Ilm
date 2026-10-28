/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F4FA',
          100: '#E1E9F5',
          200: '#C2D3EB',
          300: '#94B2DC',
          400: '#5F8CC9',
          500: '#3569B3',
          600: '#235096',
          700: '#1A3E76',
          800: '#14305D',
          900: '#0F1D36',
          950: '#080E1C',
        },
        emerald: {
          50: '#F0FBF7',
          100: '#DCF5EC',
          200: '#B8ECDA',
          300: '#86DDC0',
          400: '#4EC49F',
          500: '#108560',
          600: '#0B6D4F',
          700: '#0A573F',
          800: '#0A4533',
          900: '#08392B',
          950: '#032018',
        },
        gold: {
          50: '#FDFCF7',
          100: '#FBF8EC',
          200: '#F5EECB',
          300: '#EDE0A2',
          400: '#DFCA6E',
          500: '#CFA834',
          600: '#B88F28',
          700: '#976E22',
          800: '#7B5722',
          900: '#674720',
          950: '#3C260D',
        },
        ivory: {
          50: '#FCFBF8',
          100: '#F9F7F1',
          200: '#F3EFE3',
          300: '#ECE6D2',
          400: '#DFD5B9',
          500: '#CFC09C',
          600: '#B5A27A',
          700: '#978460',
          800: '#7B6B4E',
          900: '#645741',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        urdu: ['"Noto Nastaliq Urdu"', 'Gulzar', '"Jameel Noori Nastaleeq"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(15, 29, 54, 0.06), 0 2px 6px -1px rgba(15, 29, 54, 0.04)',
        'elevated': '0 10px 30px -4px rgba(15, 29, 54, 0.1), 0 4px 10px -2px rgba(15, 29, 54, 0.04)',
      }
    },
  },
  plugins: [],
}
