module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        vazir: ['Vazir', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        purple: {
          primary: '#243e63',
          secondary: '#6415ff',
          dark: '#5011cc',
        },
        white: {
          primary: '#edf2f7',
          secondary: '#f7fafc',
        },
      },
      container: {
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
