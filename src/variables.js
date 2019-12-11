export const colour = {
    black: '#0E1813',
    white: '255, 255, 255',
    grey: '#E8E5E5',
    grey_light: '#F6F6F6',
    grey_dark: '#8D8B8C',

    green: '#004225',
    green_light: '#75B599',
    green_dark: '#172820',

    blue: '#031D45',
    blue_light: '#8AB1EE',
    blue_dark: '#1A2029',

    pink: '#F0C5C8',
    pink_light: '250, 239, 240',
    pink_dark: '#895D60'
};

export const font = {
    heading: "'Archivo Black', sans-serif",
    body: "'Open Sans', sans-serif"
};

export const screen_size = {
    mobile: '768px',
    tablet: '959px',
    desktop: '1024px',
    desktopL: '1440px',
    hd: '2560px'
};

export const breakpoint = {
    tablet: `(min-width: ${screen_size.mobile})`,
    desktop: `(min-width: ${screen_size.tablet})`,
    desktopL: `(min-width: ${screen_size.desktop})`,
    hd: `(min-width: ${screen_size.desktopL})`
};