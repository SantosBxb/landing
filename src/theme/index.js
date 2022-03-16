import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { createBreakpoints } from '@mui/system';

const breakpoints = createBreakpoints({});
// Create a theme instance.
const theme = createTheme({
  breakpoints,
  palette: {
    text: {
      primary: '#0EF287',
      secondary: '#04003a',
      white: '#fff',
      dark: '#171C24'
    },
    primary: {
      main: '#04003a',
      dark: '#438AFF',
      white: '#BCBEC0'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FFFFFF',
      dark: '#04003a',
      white: '#39F4F9'
    },
  },
  typography: {
    color: '#0ef287',
    fontSize: 16,
    fontFamily: 'Poppins',
    h1: {
      fontSize: 35,
      lineHeight: 1.2,
      fontWeight: 600,
      wordBreak: 'break-word',
      [breakpoints.up('md')]: {
        fontSize: 45,
      },
      [breakpoints.up('lg')]: {
        fontSize: 57,
      },
      [breakpoints.up('xl')]: {
        fontSize: 80,
      },
    },
    h3: {
      fontSize: 25,
      fontWeight: 600,
      [breakpoints.down('sm')]: {
        fontSize: 20,
      },
    },
    subtitle1: {
      wordBreak: 'break-word',
      fontSize: 18,
      fontWeight: 600,
      [breakpoints.up('md')]: {
        fontSize: 20,
      },
      [breakpoints.up('lg')]: {
        fontSize: 27,
      },
      [breakpoints.up('xl')]: {
        fontSize: 35,
      },
    },
    subtitle2: {
      fontSize: 48,
      [breakpoints.down('sm')]: {
        fontSize: 32,
      },
    },
    body1: {
      fontSize: 17,
      lineHeight: 'unset',
      [breakpoints.up('lg')]: {
        fontSize: 23,
      },
      [breakpoints.up('xl')]: {
        fontSize: 30,
      },
    },
    body2: {
      fontSize: 25,
      lineHeight: 'unset',
      [breakpoints.up('xl')]: {
        fontSize: 30,
      },
    },
  },
  spacing: 8,
  shadows: [
    'none',
    '0px 3px 6px #00000029',
    '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
    '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
  ],
});

// eslint-disable-next-line prefer-destructuring
theme.shadows[8] = theme.shadows[0];

export default theme;
