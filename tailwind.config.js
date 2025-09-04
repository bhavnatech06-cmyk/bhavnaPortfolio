module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#1a237e", // indigo-900
          50: "#e8eaf6", // indigo-50
          100: "#c5cae9", // indigo-100
          200: "#9fa8da", // indigo-200
          300: "#7986cb", // indigo-300
          400: "#5c6bc0", // indigo-400
          500: "#3f51b5", // indigo-500
          600: "#3949ab", // indigo-600
          700: "#303f9f", // indigo-700
          800: "#283593", // indigo-800
          900: "#1a237e", // indigo-900
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#00acc1", // cyan-600
          50: "#e0f2f1", // cyan-50
          100: "#b2dfdb", // cyan-100
          200: "#80cbc4", // cyan-200
          300: "#4db6ac", // cyan-300
          400: "#26a69a", // cyan-400
          500: "#009688", // cyan-500
          600: "#00acc1", // cyan-600
          700: "#0097a7", // cyan-700
          800: "#00838f", // cyan-800
          900: "#006064", // cyan-900
        },
        // Accent Colors
        accent: {
          DEFAULT: "#ff7043", // deep-orange-400
          50: "#fbe9e7", // deep-orange-50
          100: "#ffccbc", // deep-orange-100
          200: "#ffab91", // deep-orange-200
          300: "#ff8a65", // deep-orange-300
          400: "#ff7043", // deep-orange-400
          500: "#ff5722", // deep-orange-500
          600: "#f4511e", // deep-orange-600
          700: "#e64a19", // deep-orange-700
          800: "#d84315", // deep-orange-800
          900: "#bf360c", // deep-orange-900
        },
        // Background Colors
        background: "#fafafa", // gray-50
        surface: "#ffffff", // white
        // Text Colors
        text: {
          primary: "#212121", // gray-800
          secondary: "#616161", // gray-600
        },
        // Status Colors
        success: {
          DEFAULT: "#4caf50", // green-500
          50: "#e8f5e8", // green-50
          100: "#c8e6c9", // green-100
          500: "#4caf50", // green-500
          700: "#388e3c", // green-700
        },
        warning: {
          DEFAULT: "#ff9800", // orange-500
          50: "#fff3e0", // orange-50
          100: "#ffe0b2", // orange-100
          500: "#ff9800", // orange-500
          700: "#f57c00", // orange-700
        },
        error: {
          DEFAULT: "#f44336", // red-500
          50: "#ffebee", // red-50
          100: "#ffcdd2", // red-100
          500: "#f44336", // red-500
          700: "#d32f2f", // red-700
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        source: ['Source Sans Pro', 'sans-serif'],
        code: ['Fira Code', 'monospace'],
        sans: ['Source Sans Pro', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'heading': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'subheading': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'elevated': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-out',
      },
    },
  },
  plugins: [],
}