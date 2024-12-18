import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        'background-position-spin': {
          '0%': {
            backgroundPosition: 'top center',
          },
          '100%': {
            backgroundPosition: 'bottom center',
          },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0%' },
          '100%': { transform: 'translateY(0)', opacity: '100%' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-left-reverse': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'rotation': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'shimmering-image': {
          '0%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.5)' },
          '100%': { filter: 'brightness(1)' },
        },
      },
      animation: {
        'background-position-spin': 'background-position-spin 3000ms infinite alternate',
        'slide-up': 'slide-up 0.3s ease-out forwards',
        'slide-left': 'slide-left 0.3s ease-out forwards',
        'slide-left-reverse': 'slide-left-reverse 0.3s ease-out forwards',
        'rotation': 'rotation 1s linear infinite',
        'rotation-reverse': 'rotation 0.5s linear infinite reverse',
        'shimmering-image': 'shimmering-image 2s infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
