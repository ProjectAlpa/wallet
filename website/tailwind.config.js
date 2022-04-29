module.exports = {
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"IBM Plex Sans"', 'sans-serif']
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      primary: {
        50: '#FFE5F7',
        100: '#FFCCEF',
        200: '#f8d493',
        300: '#f8cd80',
        400: '#f6c369',
        500: '#f5bc59',
        600: '#dea849',
        700: '#cb9a44',
        800: '#ae863e',
        900: '#503f2a'
      },
      secondary: {
        50: '#E8DEFF',
        100: '#D9C7FF',
        200: '#f8d493',
        300: '#f8cd80',
        400: '#f6c369',
        500: '#f5bc59',
        600: '#dea849',
        700: '#cb9a44',
        800: '#ae863e',
        900: '#503f2a'
      },
      gray: {
        50: '#FAFAFA',
        100: '#F5F5F5',
        200: '#E5E5E5',
        300: '#D4D4D4',
        400: '#A3A3A3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717'
      },
      red: {
        50: '#FFF2F2',
        100: '#FFE6E6',
        200: '#FFBFBF',
        300: '#FF9999',
        500: '#FF0000',
        600: '#E60000'
      },
      orange: {
        50: '#FFFAF4',
        100: '#FFF5EA',
        200: '#FFE5CA',
        300: '#FFD5A9',
        500: '#FF9629',
        600: '#E68725'
      },
      green: {
        50: '#F2FBF4',
        100: '#E6F7E8',
        200: '#C0ECC6',
        300: '#9AE1A4',
        500: '#02B31B',
        600: '#02A118'
      }
    }
  },
  variants: {
    extend: {
      borderWidth: ['last']
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
}
