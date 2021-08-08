/* eslint-disable no-multi-spaces, key-spacing */

module.exports = {
    purge: [
        'src/**/*.jsx',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            display: ['Montserrat', 'Arial', 'sans-serif'],
            body: ['"Open Sans"', 'Arial', 'sans-serif'],
        },
        fontSize: {
            xs:    ['0.75rem',   '1.5rem'],
            sm:    ['0.875rem',  '1.5rem'],
            base:  ['1rem',      '2rem'],
            intro: ['1.0625rem', '2rem'],
            lg:    ['1.125rem',  '1.75rem'],
            xl:    ['1.25rem',   '1.75rem'],
            '2xl': ['1.5rem',    '2rem'],
            '3xl': ['1.875rem',  '2.5rem'],
            '4xl': ['2.25rem',   '3rem'],
            '5xl': ['3rem',      '3.5rem'],
            '6xl': ['3.75rem',   '1'],
            '7xl': ['4.5rem',    '1'],
            '8xl': ['5.5rem',    '1'],
            '9xl': ['7.5rem',    '1'],
        },
    },
    variants: {
      extend: {
        margin: ['first'],
      }
    },
    plugins: [],
};
