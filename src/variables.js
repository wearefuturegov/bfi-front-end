export const colour = {
    black: '12, 24, 19',
    white: '255, 255, 255',
    grey: '232, 229, 229',
    grey_light: '246, 246, 246',
    grey_dark: '111, 109, 109',

    green: '0, 66, 37',
    green_light: '192, 237, 217',
    green_dark: '23, 40, 32',

    blue: '3, 29, 69',
    blue_light: '193, 214, 245',
    blue_dark: '26, 32, 41',

    pink: '240, 197, 200',
    pink_light: '255, 230, 231',
    pink_dark: '149, 101, 104'
};

export const font = {
    heading: "'Archivo Black', sans-serif",
    body: "'Open Sans', sans-serif",
    base_size: "16px"
};

export const screen_size = {
    mobile: '768px',
    tablet: '959px',
    desktop: '1024px',
    hd: '1440px'
};

export const breakpoint = {
    tablet: `(min-width: ${screen_size.mobile})`,
    desktop: `(min-width: ${screen_size.tablet})`,
    hd: `(min-width: ${screen_size.desktop})`,
    super_hd: `(min-width: ${screen_size.hd})`
};