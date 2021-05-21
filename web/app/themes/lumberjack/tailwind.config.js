module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
        'inter' : ['Inter', 'sans-serif']
    },
    screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px'
    },
    extend: {
        colors: {
            'brand-powder-pink' : '#F1E6E6',
            'brand-dark-pink' : '#DDC6C6',
            'brand-matt-pink' : '#E2D8D8',
            'brand-gray' : '#7C808D'
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
}
