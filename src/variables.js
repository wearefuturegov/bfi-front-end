export const colour = {
    black: '12, 24, 19',
    white: '255, 255, 255',
    grey: '232, 229, 229',
    grey_light: '246, 246, 246',
    grey_dark: '141, 139, 140',

    green: '0, 66, 37',
    green_light: '117, 181, 153',
    green_dark: '23, 40, 32',

    blue: '3, 29, 69',
    blue_light: '138, 177, 238',
    blue_dark: '26, 32, 41',

    pink: '240, 197, 200',
    pink_light: '250, 239, 240',
    pink_dark: '137, 93, 96'
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