/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts}",
    ],
    theme: {
      extend: {
        colors:{
            'verde':'#3bb77e',
            'gris':'#b0b0b0',
            'negro':'#2c4354',
        },
        backgroundColor:{
            'verde':'#3bb77e',
            'gris':'#b0b0b0',
            'negro':'#2c4354',
        },
        gridTemplateColumns: {
          // Simple 16 column grid
          '2-8': '2fr 8fr'
        }
      },
    },
    plugins: [],
  }