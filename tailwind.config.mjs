/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0b1970',
        green: '#7ed957',
        linkblue: '#1025a1',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
