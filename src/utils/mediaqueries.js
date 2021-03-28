export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopM: "1280px",
  laptopL: "1440px",
  desktop: "1620px",
  desktopL: "2560px",
};

export const device = {
  mobileS: `screen and (min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  mobileOnly: `(max-width: ${size.tablet})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletOnly: `only screen and (min-device-width: ${size.tablet}) and (max-device-width: ${size.laptop})`,
  tabletLandscape: `(device-width: 1024px) and (device-height: 768px) and (orientation: landscape)`,
  laptop: `screen and (min-width: ${size.laptop})`,
  laptopM: `screen and (min-width: ${size.laptopM})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};
