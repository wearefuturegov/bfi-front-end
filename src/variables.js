export const colour = {
    black: '#0E1813',
    white: '#FFFFFF',
    lightgrey: '#E8E5E5',
    green: '#004225',
    blue: '#031D45',
    pink: '#F0C5C8',
    pink_light: '250, 239, 240',
    pink_dark: '#995C5C'
};

export const font = {
    heading: "'Archivo Black', sans-serif",
    body: "'Open Sans', sans-serif"
};

export const size = {
    mobile: '568px',
    tablet: '834px',
    desktop: '1024px',
    desktopL: '1440px',
    hd: '2560px'
};

export const breakpoint = {
    tablet: `(min-width: ${size.mobile})`,
    desktop: `(min-width: ${size.tablet})`,
    desktopL: `(min-width: ${size.desktop})`,
    hd: `(min-width: ${size.desktopL})`
};