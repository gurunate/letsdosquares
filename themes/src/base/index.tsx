import './styles.scss';

import {
    Palette,
    Theme,
    ThemeOptions,
    TypeBackground,
    createTheme
} from '@mui/material/styles';

export type BaseTheme = Theme & {
    namespace: string;
    palette: Palette & {
        background: TypeBackground & {
            input?: string;
        };
        appBar?: {
            mainA?: string;
            mainB?: string;
            mainC?: string;
            mainD?: string;
            mainE?: string;
            contrastText?: string;
        };
    };
};

export type BaseThemeOptions = ThemeOptions & {
    namespace: string;
    palette: Palette & {
        background: TypeBackground & {
            input?: string;
        };
        appBar?: {
            mainA?: string;
            mainB?: string;
            mainC?: string;
            mainD?: string;
            mainE?: string;
            contrastText?: string;
        };
    };
};

/**
 * Base PolicyPort theme.
 *
 * @param {BaseThemeOptions} options
 * @return {BaseTheme}
 *
 * @see https://www.figma.com/file/jIUHPl3PD3xqTN7l4YXK5D/We-Insure-Design-System---Focus?node-id=1%3A5127
 * @see https://www.figma.com/file/jIUHPl3PD3xqTN7l4YXK5D/We-Insure-Design-System---Focus?node-id=1%3A4794
 */
let theme = createTheme({
    typography: {
        fontFamily: ['"Open Sans Variable"', 'sans-serif'].join(',')
    },
    palette: {
        mode: 'light',
        background: {
            default: '#edf6fe',
            paper: '#FFFFFF',
            input: '#F5F5F5',
            secondary: '#F0F0F0',
            footer: '#E4EFFA'
        },
        primary: {
            light: '#42A5F5',
            main: '#1976D2',
            dark: '#1565C0'
        },
        secondary: {
            light: '#BA68C8',
            main: '#9C27B0',
            dark: '#7B1FA2'
        },
        error: {
            light: '#EF5350',
            main: '#D32F2F',
            dark: '#C62828'
        },
        warning: {
            light: '#FF9800',
            main: '#ED6C02',
            dark: '#C24400'
        },
        info: {
            light: '#03A9F4',
            main: '#0288D1',
            dark: '#01579B'
        },
        success: {
            light: '#4CAF50',
            main: '#2E7D32',
            dark: '#1B5E20'
        },
        tip: {
            light: '#E138FF',
            main: '#9C27B0',
            dark: '#852196'
        },
        text: {
            primary: '#1A2027',
            secondary: '#767676',
            disabled: '#707070'
        },
        appBar: {
            mainA: '#463D6E',
            mainB: '#6E5643',
            mainC: '#384B6E',
            mainD: '#6E662D',
            mainE: '#32666E',
            contrastText: '#fff'
        },
        edge: {
            active: '#767676',
            inactive: '#C4C4C4',
            footer: '#BDBDBD'
        },
        action: {
            disabled: '#707070'
        }
    }
}) as BaseTheme;

export default theme;
