/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f8fafc', // slate-50
        card: '#ffffff', // white
        cardBorder: '#e2e8f0', // slate-200
        text: '#0f172a', // slate-900
        textMuted: '#64748b', // slate-500
        primary: '#10b981', // emerald-500
        primaryHover: '#059669', // emerald-600
        primaryLight: 'rgba(16, 185, 129, 0.1)',
        secondary: '#f1f5f9', // slate-100
        accent: '#0d9488', // teal-600
        danger: '#ef4444', // red-500
        warning: '#f59e0b', // amber-500
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
