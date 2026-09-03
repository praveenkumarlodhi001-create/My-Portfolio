/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: '#0B0F19',      // Deep dark background
        'paper-dim': '#111827', // Card background
        ink: '#F9FAFB',        // Bright white text
        'ink-soft': '#9CA3AF',  // Muted gray text
        'ink-faint': '#6B7280', // Subtle border/faint text
        signal: '#10B981',      // Vibrant green status dot
        accent: '#3B82F6',      // Electric blue accent
        line: '#1F2937',        // Divider line color
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
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