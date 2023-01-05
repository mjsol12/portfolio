const size = {
    xs: "320px",
    sm: "375px",
    sl: "425px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
    xxxl: '2560px'
};

export const devicesMin = {
    mobileS: `(min-width: ${size.xs})`,
    mobileM: `(min-width: ${size.sm})`,
    mobileL: `(min-width: ${size.sl})`,
    tablet: `(min-width: ${size.md})`,
    laptop: `(min-width: ${size.lg})`,
    laptopL: `(min-width: ${size.xl})`,
    desktop: `(min-width: ${size.xxl})`,
    desktopL: `(min-width: ${size.xxxl})`
};

export const devicesMax = {
    mobileS: `(max-width: ${size.xs})`,
    mobileM: `(max-width: ${size.sm})`,
    mobileL: `(max-width: ${size.sl})`,
    tablet: `(max-width: ${size.md})`,
    laptop: `(max-width: ${size.lg})`,
    laptopL: `(max-width: ${size.xl})`,
    desktop: `(max-width: ${size.xxl})`,
    desktopL: `(max-width: ${size.xxxl})`
};
