/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: '#080808',      // Deep dark background
        'paper-dim': '#151515', // Card background
        ink: '#F5F5F1',        // Bright white text
        'ink-soft': '#B3B3B3',  // Muted gray text
        'ink-faint': '#777777', // Subtle border/faint text
        signal: '#10B981',      // Vibrant green status dot
        accent: '#E50914',      // Streaming red accent
        line: '#303030',        // Divider line color
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
}