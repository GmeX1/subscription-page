import { createTheme } from '@mantine/core'

import components from './overrides'

export const theme = createTheme({
    components,
    cursorType: 'pointer',
    fontFamily:
        'Montserrat, Vazirmatn, Apple Color Emoji, Noto Sans SC, Twemoji Country Flags, sans-serif',
    fontFamilyMonospace: 'Fira Mono, monospace',
    breakpoints: {
        xs: '25em',
        sm: '30em',
        md: '48em',
        lg: '64em',
        xl: '80em',
        '2xl': '96em',
        '3xl': '120em',
        '4xl': '160em'
    },
    scale: 1,
    fontSmoothing: true,
    focusRing: 'never',
    white: '#ffffff',
    black: '#222a22',
    colors: {
        dark: [
            '#ccd4cc',
            '#b3bcb3',
            '#8d968d',
            '#6f796f',
            '#485048',
            '#2f382f',
            '#202a20',
            '#151f15',
            '#0d140d',
            '#010601'
        ],

        blue: [
            '#ddf4ff',
            '#b6e3ff',
            '#80ccff',
            '#54aeff',
            '#218bff',
            '#0969da',
            '#0550ae',
            '#033d8b',
            '#0a3069',
            '#002155'
        ],
        // Brand accent, anchored on the logo green #27c32d (shade 5).
        // Hue 122 throughout; luminance ramp matches the palette it replaced, so
        // autoContrast keeps flipping text at the same shades it always did.
        // This is the only green in the theme: the old hue-137 semantic ramp was
        // folded into it, so nothing renders two near-identical greens side by side.
        green: [
            '#ebfaeb',
            '#cef3cf',
            '#a2e6a5',
            '#6ed872',
            '#41d246',
            '#27c32d',
            '#1da524',
            '#15841d',
            '#12681b',
            '#0f4d17'
        ],
        yellow: [
            '#fff8c5',
            '#fae17d',
            '#eac54f',
            '#d4a72c',
            '#bf8700',
            '#9a6700',
            '#7d4e00',
            '#633c01',
            '#4d2d00',
            '#3b2300'
        ],
        orange: [
            '#fff1e5',
            '#ffd8b5',
            '#ffb77c',
            '#fb8f44',
            '#e16f24',
            '#bc4c00',
            '#953800',
            '#762c00',
            '#5c2200',
            '#471700'
        ]
    },
    primaryShade: 6,
    primaryColor: 'green',
    autoContrast: true,
    luminanceThreshold: 0.3,
    headings: {
        fontFamily: 'Unbounded, Vazirmatn, Apple Color Emoji, Noto Sans SC, sans-serif',
        fontWeight: '600'
    },
    defaultRadius: 'md'
})
