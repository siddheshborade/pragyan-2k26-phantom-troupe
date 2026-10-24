/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            DEFAULT: '#16A34A',
            hover: '#15803D',
            soft: '#DCFCE7',
            light: '#F0FDF4',
          },
          purple: {
            DEFAULT: '#7C3AED',
            hover: '#6D28D9',
            soft: '#EDE9FE',
          },
          pink: {
            DEFAULT: '#EC4899',
            hover: '#DB2777',
            soft: '#FCE7F3',
          },
          bg: {
            page: '#FFFFFF',
            tinted: '#F6FBF8',
            subtle: '#F8FAFC',
          },
          text: {
            primary: '#0F172A',
            muted: '#64748B',
            subtle: '#94A3B8',
          },
          border: {
            DEFAULT: '#E2E8F0',
            subtle: '#F1F5F9',
          }
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 10px -2px rgba(15, 23, 42, 0.05), 0 1px 3px -1px rgba(15, 23, 42, 0.04)',
        'soft-md': '0 4px 16px -2px rgba(15, 23, 42, 0.07), 0 2px 6px -2px rgba(15, 23, 42, 0.05)',
        'soft-lg': '0 10px 25px -4px rgba(15, 23, 42, 0.09), 0 4px 10px -3px rgba(15, 23, 42, 0.05)',
        'glow-green': '0 0 25px -5px rgba(22, 163, 74, 0.25)',
        'glow-purple': '0 0 25px -5px rgba(124, 58, 237, 0.25)',
      }
    },
  },
  plugins: [],
}
