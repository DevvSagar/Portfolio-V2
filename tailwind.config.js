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
        portfolio: {
          bg: '#172b4d', // Rich deep navy blue from Image 2
          dark: '#12233f', // Darker navy for cards and table rows
          card: '#1d355c', // Elevated navy card
          blob: '#253d68', // Organic blob background
          border: '#2a436f', // Subtle divider border
          accent: '#ff4b5c', // Signature coral red from Image 2 ("Aromal Anil" & Resume button)
          accentHover: '#ff3347',
          accentLight: '#ff707f',
          textMuted: '#94a7c6', // Muted slate blue text
          textDim: '#6b82a8', // Subtle icon / secondary text
          textBright: '#ffffff',
          darkButton: '#213758',
          darkButtonHover: '#29436c',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'typewriter': 'typewriter 2s steps(20) infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
