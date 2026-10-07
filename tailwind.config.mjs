/** @type {import('tailwindcss').Config} */
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IoskeleyMono', 'monospace'],
        mono: ['IoskeleyMono', 'monospace'],
        serif: ['IoskeleyMono', 'monospace'],
        display: ['"IoskeleyMono Condensed"', 'IoskeleyMono', 'monospace'],
      },
      colors: {
        // Every color reads a CSS variable from global.css, so the
        // Forest (default) and Cream themes switch without a rebuild.
        surface: {
          DEFAULT: v('surface-100'),
          raised:  v('surface-200'),
          overlay: v('surface-300'),
        },
        line: {
          DEFAULT: v('line'),
          strong:  v('line-strong'),
        },
        ink: {
          DEFAULT: v('ink'),
          muted:   v('ink-muted'),
          faint:   v('ink-faint'),
        },
        accent: {
          DEFAULT: v('accent'),
          fill:    v('accent-fill'),
          hover:   v('accent-hover'),
          on:      v('on-accent'),
        },
        azure: v('azure'),
      },
      fontSize: {
        display: ['clamp(3.5rem, 10vw, 8.5rem)', { lineHeight: '0.92', letterSpacing: '-0.025em' }],
      },
    },
  },
  plugins: [],
};
