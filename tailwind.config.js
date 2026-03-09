module.exports = {
  content: [
    './src/**/*.{js,jsx}',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        darkPurple: '#2E1065',
        darkBlue: '#0F172A',
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        sora: ['Sora', 'sans-serif']
      },
      animation: {
        'pulse-glow': 'pulse 2s infinite',
        'fade-in': 'fadeIn 0.8s ease-in-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(168, 85, 247, 0.6)' }
        }
      }
    }
  },
  plugins: []
};