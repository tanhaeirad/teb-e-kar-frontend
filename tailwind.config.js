module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        vazir: ['Vazir', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        nastaliq: [
          'IranNastaliq',
          'tahoma',
          'Vazir',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
      colors: {
        purple: {
          primary: '#243e63',
          secondary: '#6415ff',
          dark: '#5011cc',
        },
        white: {
          pure: '#fffffF',
          secondary: '#e5e7eb',
          primary: '#f7fafc',
        },
        gray: {
          primary: '#7c8ba1',
          secondary: '#7180a0',
          heavy: '#1a202c',
        },
      },
      container: {
        center: true,
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
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
