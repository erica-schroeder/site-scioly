import { baseTheme } from '@erica/mui-web';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const palette = {
  primary: {
    main: '#414142',
  },
  secondary: {
    main: '#FF211C',
  },
  background: {
    default: '#f2f3fa',
    paper: '#f8f9ff',
  },
  icon: {
    main: '#414142',
    accent: '#FF211C',
  },
  appBar: {
    main: '#414142',
    contrastText: '#ededee',
  },
  card: {
    background: '#f8f9ff',
  },
};

let theme = createTheme(baseTheme, {
  palette: palette,
  typography: {
    navItemPrimary: {
      color: 'black',
      fontSize: '1.25rem',
      fontWeight: 500,
      fontFamily: 'sans-serif',
      textTransform: 'uppercase',
    },
    navItemSecondary: {
      color: 'black',
      fontSize: '1.1rem',
      fontWeight: 400,
      fontFamily: 'sans-serif',
    },
  },

  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: palette.appBar.main,
          color: palette.appBar.contrastText,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: palette.card.background,
        },
      },
    },

    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 32,
          maxHeight: 32,
        },
      },
    },

    MuiButton: {
      variants: [
        {
          props: { variant: 'start' },
          style: ({ theme }) => ({
            backgroundColor: '#D02926',
            border: `1px solid ${theme.palette.primary.main}`,
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            padding: theme.spacing(1, 5),
            width: 200,

            '&.Mui-disabled': {
              backgroundColor: theme.palette.grey[700],
              color: theme.palette.grey[600],
            },
          }),
        },
      ],
    },
  },
});

theme = responsiveFontSizes(theme);

export { theme };
