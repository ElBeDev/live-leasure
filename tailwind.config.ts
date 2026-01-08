import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-poppins)', 'system-ui', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        brand: '#0472ab',
        primary: {
          orange: '#FF8C42',
          gold: '#FFB627',
          teal: '#0472ab',
          turquoise: '#0472ab',
          coral: '#FF6B6B',
          sand: '#F4E4C1',
          ocean: '#0472ab',
        },
        dark: {
          900: '#1A1A2E',
          800: '#16213E',
          700: '#0F3460',
        },
        warm: {
          50: '#FFF8F0',
          100: '#FFF0E0',
          200: '#FFE4CC',
        },
        cool: {
          50: '#E0F7FA',
          100: '#B2EBF2',
          200: '#80DEEA',
        },
        gray: {
          600: '#8892B0',
          400: '#B4BECF',
        }
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, #0472ab 0%, #0472ab 100%)',
        'gradient-2': 'linear-gradient(135deg, #0472ab 0%, #0472ab 100%)',
        'gradient-3': 'linear-gradient(135deg, #0472ab 0%, #0472ab 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #0472ab 0%, #0472ab 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #0472ab 0%, #0472ab 100%)',
        'gradient-tropical': 'linear-gradient(135deg, #0472ab 0%, #0472ab 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(6, 214, 160, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(6, 214, 160, 0.7)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [],
};

export default config;
