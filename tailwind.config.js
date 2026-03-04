module.exports = {
  content: [
    './views/**/*.ejs',
    './public/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        darkPurple: '#2E1065',
        darkBlue: '#0F172A'
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif']
      },
      animation: {
        'pulse-glow': 'pulse 2s infinite',
        'fade-in': 'fadeIn 0.8s ease-in-out forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
};