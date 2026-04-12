/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IoskeleyMono', 'monospace'],
        mono: ['IoskeleyMono', 'monospace'],
        serif: ['IoskeleyMono', 'monospace'],
      },
      colors: {
        // All accent colors reference CSS variables so they always
        // match global.css — no stale compile-time values possible.
        accent: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          light:   'rgb(var(--color-accent-light) / <alpha-value>)',
          dark:    'rgb(var(--color-accent-dark) / <alpha-value>)',
        },
        section: 'rgb(var(--color-section) / <alpha-value>)',
        surface: {
          DEFAULT: '#252525',
          raised:  '#414141',
        },
      },
      fontSize: {
        display: ['clamp(3.5rem, 10vw, 8.5rem)', { lineHeight: '0.92', letterSpacing: '-0.025em' }],
      },
    },
  },
  plugins: [],
};
