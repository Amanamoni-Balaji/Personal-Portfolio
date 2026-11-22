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
          950: '#07090E',
          900: '#0C101A',
          850: '#121724',
          800: '#182032',
          700: '#222B42',
        },
        slate: {
          850: '#151D2E',
        },
        editorial: {
          line: '#1E293B',
          lineLight: '#2A374F',
          lineFocus: '#3D4F70',
        },
        accent: {
          blue: '#3B82F6',
          indigo: '#6366F1',
          violet: '#8B5CF6',
          sky: '#0EA5E9',
          emerald: '#10B981',
          teal: '#14B8A6',
          amber: '#F59E0B',
          rose: '#F43F5E',
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
        'elevated': '0 14px 35px -10px rgba(0, 0, 0, 0.7), 0 6px 15px -3px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 24px 48px -15px rgba(7, 9, 14, 0.95), 0 0 25px 2px rgba(59, 130, 246, 0.14)',
        'accent-soft': '0 0 30px -4px rgba(59, 130, 246, 0.28)',
        'glow-emerald': '0 0 30px -4px rgba(16, 185, 129, 0.25)',
        'glow-sky': '0 0 30px -4px rgba(14, 165, 233, 0.25)',
        'glow-violet': '0 0 30px -4px rgba(139, 92, 246, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'subtle-pulse': 'subtlePulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        subtlePulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}