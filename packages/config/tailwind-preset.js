/**
 * Shared brand design tokens for the White clinic platform.
 * Consumed by apps/web and apps/admin so both stay visually consistent.
 *
 * Palette rationale (v2 — deepened for a "luxury boutique" read):
 * - peach: the brand's primary accent — a deep, muted mauve-rose ("plum") rather
 *   than a bright candy pink. Bright saturated pink reads as a generic beauty-app
 *   default; a deeper, desaturated jewel tone reads as considered/expensive. The
 *   token key stays "peach" since it's referenced as Tailwind classes (peach-500
 *   etc.) across every component — only the hex ramp changed.
 * - gold: an antique/brass gold rather than a bright yellow-gold, for the same
 *   "expensive, not shiny" reason.
 * - ivory: a warm cream scale (never pure #FFFFFF everywhere) — warmer than a
 *   clinical off-white, closer to the paper/linen tone real luxury spas use.
 * - charcoal: a warm near-black text scale, softer and richer than pure black.
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        peach: {
          50: '#FAF4F5',
          100: '#F1E0E3',
          200: '#E3C1C8',
          300: '#CC98A3',
          400: '#B06E7D',
          500: '#8E4B5C',
          600: '#723A48',
          700: '#5A2E39',
          800: '#43222B',
          900: '#2C161C',
        },
        gold: {
          50: '#FBF8F0',
          100: '#F3E9CE',
          200: '#E6D19E',
          300: '#D4B36C',
          400: '#C39A47',
          500: '#A87F31',
          600: '#8A6627',
          700: '#6D501F',
          800: '#513B17',
          900: '#362810',
        },
        ivory: {
          DEFAULT: '#FFFFFF',
          50: '#FDFAF6',
          100: '#F8F1E9',
          200: '#EFE3D5',
        },
        charcoal: {
          900: '#211A17',
          700: '#453B36',
          500: '#756B64',
          300: '#ACA29A',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#128C7E',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
    },
  },
};
