export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'], // update path as needed
  theme: {
    extend: {
      colors: {
        white: 'var(--white)',
        black: 'var(--black)',

        primary: {
          main: 'var(--primary-main)',
          light: 'var(--primary-light)',
          // dark: 'var(--primary-dark)',
        },
        secondary: {
          main: 'var(--secondary-main)',
          light: 'var(--secondary-light)',
          // dark: 'var(--secondary-dark)',
        },
        success: {
          main: 'var(--success-main)',
          light: 'var(--success-light)',
          // dark: 'var(--success-dark)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
        },
        background: {
          default: 'var(--background-default)',
          paper: 'var(--paper)',
        },
      },
      fontFamily: {
        primary: ['var(--font-family-primary)'],
        secondary: ['var(--font-family-secondary)'],
      },
      fontSize: {
        base: 'var(--font-size)',
      },
      fontWeight: {
        thin: 'var(--font-weight-thin)',
        extralight: 'var(--font-weight-extralight)',
        light: 'var(--font-weight-light)',
        regular: 'var(--font-weight-regular)',
        medium: 'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)',
        bold: 'var(--font-weight-bold)',
        extrabold: 'var(--font-weight-extrabold)',
        black: 'var(--font-weight-black)',
      },
      // screens: {
      //   xs: '450px',
      // }
    },
  },
  // darkMode: 'var(--mode)',
  plugins: [],
};
