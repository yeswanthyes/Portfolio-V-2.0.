/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'void': '#050816',
        'surface': '#0a0f1e',
        'surface-light': '#111827',
        'cyber': '#00F5FF',
        'neon': '#7B61FF',
        'highlight': '#22D3EE',
        'glow-cyan': 'rgba(0, 245, 255, 0.15)',
        'glow-purple': 'rgba(123, 97, 255, 0.15)',
      },
      fontFamily: {
        'display': ['Outfit', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'badge-orbit': 'badgeOrbit 15s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 245, 255, 0.6)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};
