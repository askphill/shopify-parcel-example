/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.liquid', './src/**/*.js'],
  theme: { extend: {} },
  plugins: [
    {
      handler: ({ addComponents }) =>
        addComponents({
          // '.button': {
          //   '@apply bg-black': {},
          // },
        }),
    },
  ],
};
