import { alpha, extendTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                background: {
                    default: "#f2f3fa",
                    paper: "#ededee",
                },
                primary: {
                    main: "#414142",
                },
                secondary: {
                    main: "#FF211C",
                },
                icon: {
                    main: "#414142",
                    accent: "#FF211C",
                },
                appBar: {
                    background: "#414142",
                    color: "#ededee"
                },
                card: {
                    background: "#f8f9ff",
                },
            },
        },
    },

    components: {
        MuiAppBar: {
            defaultProps: {
                position: "static",
                elevation: 0,
            },
            styleOverrides: {
                root: ({ theme }) => ({
                    backgroundColor: theme.palette.appBar.background,
                    borderBottom: "1px solid",
                    borderTop: "1px solid",
                    borderColor: theme.palette.appBar.border,
                }),
            },
        },

        MuiSvgIcon: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.icon.main,
                }),
            },
        },

        MuiCard: {
            styleOverrides: {
                root: ({ theme }) => ({
                    backgroundColor: theme.palette.card.background,
                }),
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
                        backgroundColor: "#D02926",
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

export default theme;