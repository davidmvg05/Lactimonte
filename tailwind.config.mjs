/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      'xs-max': { max: '480px' },
      'sm-max': { max: '576px' },
      'xs': '480px',
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
    },
    extend: {
      colors: {
        lacti: {
          white: '#ffffff',
          black: '#000000',
          green: '#169f38',
        },
      },
      fontFamily: {
        script: ['"Dancing Script"', 'cursive'],
        sans: ['"Roboto"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      transitionDuration: {
        instant: '100ms',
      },
      boxShadow: {
        'btn-primary': 'inset 0 1.5px 0 rgba(255, 255, 255, 0.45), 0 6px 14px -2px rgba(0, 0, 0, 0.32), 0 2px 5px -1px rgba(22, 159, 56, 0.28)',
        'btn-primary-hover': 'inset 0 1.5px 0 rgba(22, 159, 56, 0.75), 0 10px 20px -3px rgba(0, 0, 0, 0.45), 0 4px 8px -2px rgba(22, 159, 56, 0.4)',
        'btn-primary-active': 'inset 0 2px 4px rgba(0, 0, 0, 0.45), 0 2px 4px rgba(0, 0, 0, 0.25)',
        'btn-secondary': 'inset 0 1.5px 0 rgba(255, 255, 255, 0.9), 0 5px 12px -2px rgba(0, 0, 0, 0.14), 0 2px 4px -1px rgba(22, 159, 56, 0.12)',
        'btn-secondary-hover': 'inset 0 1.5px 0 rgba(255, 255, 255, 1), 0 9px 18px -3px rgba(22, 159, 56, 0.25), 0 3px 6px -1px rgba(0, 0, 0, 0.18)',
        'btn-secondary-active': 'inset 0 2px 4px rgba(0, 0, 0, 0.18), 0 1px 3px rgba(0, 0, 0, 0.14)',
      },
    },
  },
  plugins: [],
};
