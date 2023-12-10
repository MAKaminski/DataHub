module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    colors: {
      'neon-pink': '#ff6ec7',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), 
    require('@tailwindcss/typography'),
    require('@material-tailwind/react')
  ],
}
}