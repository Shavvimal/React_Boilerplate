module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    // screens:{
    //     'sm': '6400px',
    //     // => @media (min-width: 640px) { ... }
  
    //     'md': '7680px',
    //     // => @media (min-width: 768px) { ... }
  
    //     'lg': '10240px',
    //     // => @media (min-width: 1024px) { ... }
  
    //     'xl': '12800px',
    //     // => @media (min-width: 1280px) { ... }
  
    //     '2xl': '15360px',
    //     // => @media (min-width: 1536px) { ... }
    // },
    extend: {
      colors: {
        gray: {
          100: '#06101A',
          200: '#EAEAEA',
          300: '#DFDFDF',
          400: '#999999',
          500: '#7F7F7F',
          600: '#666666',
          700: '#4C4C4C',
          800: '#333333',
          900: '#191919',
        },
        dark: {
          100: "#014E6F",
          200: "#024664",
          300: "#023F5A",
          400: "#03374F",
          500: "#042F45",
          600: "#04273A",
          700: "#05202F",
          800: "#051825",
          900: "#06101A",        
        },
        teal: {
          100: '#6DF5D8',
          200: '#5EE6CB',
          300: '#51D5BA',
          400: '#40C2A7',
          500: '#33B298',
          600: '#22A087',
          700: '#169378',
          800: '#09826A',
          900: '#007D62',
        },
        blue: {
          100: '#3EA8D7',
          200: '#35A0CB',
          300: '#258DB5',
          400: '#197ba6',
          500: '#0B6692',
          600: '#055d82',
          700: '#035576',
          800: '#014E6F',
          900: '#004D6B',
        },
      },
      boxShadow: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.16)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.16)',
        default: '0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none',
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.625rem',
        '5xl': '3.25rem',
        '6xl': '5.5rem',
      },
      inset: {
        '1/2': '50%',
        'full': '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      lineHeight: {
        none: '1',
        tighter: '1.125',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
        '3': '.75rem',
        '4': '1rem',
        '5': '1.2rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
      },
      minWidth: {
        '10': '2.5rem',
        '48': '12rem',
      },
      opacity: {
        '90': '0.9',
      },
      scale: {
        '98': '.98'
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)', },
          '50%': { transform: 'translateY(-5%)', },
        },
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'focus-within'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
