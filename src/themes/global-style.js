import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { colors } from './colors';

export const theme = {
  colors: colors,
  font: {
    sans: 'Rubik, Karla, san-serif',
    serif: 'Overpass, Chivo, serif',
    monospace: '"Fira Code", monospace',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
    3: '.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    fromFontSize: fontSize => {
      if (typeof fontSize !== 'string') return '1';

      switch (fontSize) {
        case '0.75rem':
          return '1rem';
        case '0.875rem':
          return '1.25rem';
        case '1rem':
          return '1.5 rem';
        case '1.125rem':
          return '1.75 rem';
        case '1.25rem':
          return '1.75 rem';
        case '1.5rem':
          return '2 rem';
        case '1.875rem':
          return '2.25 rem';
        case '2.25rem':
          return '2.5 rem';
        case '3rem':
          return '1';
        case '3.75rem':
          return '1';
        case '4.5rem':
          return '1';
        case '6rem':
          return '1';
        case '8rem':
          return '1';
        default:
          return '1';
      }
    },
  },
  spacing: {
    px: '1px',
    0: '0px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },
  palette: {
    primary: {
      main: '#e63947',
      light: '#ff7072',
      dark: '#ad0020',
    },
    secondary: {
      main: '#1d3557',
      light: '#4a5e84',
      dark: '#000e2e',
    },
    background: {
      default: '#f1faee',
      light: '#ffffff',
      dark: '#bec7bc',
    },
    navigation: {
      light: '#76aace',
      dark: '#094f6f',
    },
  },
};

export const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.font.sans};
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.colors.grey[900]};
  }
  body {
    display: flex;
    flex-direction: column;
    line-height: ${({ theme }) => theme.lineHeight.relaxed};
    letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
    background-color: ${({ theme }) => theme.palette.background.default};
  }
  a:color: ${({ theme }) => theme.palette.navigation.light};
  a:visited {
    color: ${({ theme }) => theme.palette.navigation.dark};
  }
  footer {
    color: ${({ theme }) => theme.colors.grey[50]};
  }
`;
