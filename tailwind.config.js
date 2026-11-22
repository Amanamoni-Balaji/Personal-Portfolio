/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#06080E',
          900: '#0A0E17',
          850: '#0F1420',
          800: '#141B2D',
          700: '#1C253C',
        },
        slate: {
          850: '#172033',
        },
        editorial: {
          line: '#1E293B',
          lineLight: '#28354D',
          lineFocus: '#384968',
        },
        accent: {
          blue: '#3B82F6',
          indigo: '#6366F1',
          violet: '#8B5CF6',
          sky: '#0EA5E9',
          emerald: '#10B981',
          amber: '#F59E0B',
        },
        ink: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', 'Menlo', 'monospace'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px -1px rgba(0, 0, 0, 0.4)',
        'elevated': '0 12px 30px -10px rgba(0, 0, 0, 0.6), 0 4px 10px -3px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 20px 40px -15px rgba(10, 14, 23, 0.9), 0 0 20px 1px rgba(59, 130, 246, 0.12)',
        'accent-soft': '0 0 25px -4px rgba(59, 130, 246, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'subtle-pulse': 'subtlePulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        subtlePulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
}