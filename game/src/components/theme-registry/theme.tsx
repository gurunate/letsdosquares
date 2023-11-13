import { Poppins } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const poppins = Poppins({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap'
});

const theme = createTheme({
    palette: {
        mode: 'light'
    },
    typography: {
        fontFamily: poppins.style.fontFamily,
        fontSize: 14,
        htmlFontSize: 16,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 600,
        fontWeightBold: 700,
        body1: {
            fontSize: 16
        },
        body2: {
            fontSize: 14
        },
        button: {
            fontSize: 14
        },
        h1: {
            fontSize: 24,
            fontWeight: 700
        },
        h2: {
            fontSize: 20,
            fontWeight: 700
        },
        h3: {
            fontSize: 18,
            fontWeight: 600
        },
        h4: {
            fontSize: 16,
            fontWeight: 800
        },
        h5: {
            fontSize: 14
        },
        h6: {
            fontSize: 12,
            fontWeight: 700
        },
        subtitle1: {
            fontSize: 16
        },
        subtitle2: {
            fontSize: 14
        }
    },
    components: {
        MuiAlert: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.severity === 'info' && {
                        backgroundColor: '#60a5fa'
                    })
                })
            }
        }
    }
});

export default theme;
