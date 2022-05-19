import * as variables from "./variables";

const basicTheme = {
  margin: {
    small: variables.marginSmall,
    medium: variables.marginMedium,
    large: variables.marginLarge,
    sectionSmall: variables.marginSectionSmall,
    sectionMedium: variables.marginSectionMedium,
    sectionLarge: variables.marginSectionLarge,
    textSmall: variables.marginTextSmall,
    textMedium: variables.marginTextMedium,
    textLarge: variables.marginTextLarge,
  },
  padding: {
    small: variables.paddingSmall,
    medium: variables.paddingMedium,
    large: variables.paddingLarge,
    sectionSmall: variables.paddingSectionSmall,
    sectionMedium: variables.paddingSectionMedium,
    sectionLarge: variables.paddingSectionLarge,
    textSmall: variables.paddingTextSmall,
    textMedium: variables.paddingTextMedium,
    textLarge: variables.paddingTextLarge,
  },
  fontSize: {
    heading: {
      xSmall: variables.fontSizeHeadingXSmall,
      small: variables.fontSizeHeadingSmall,
      medium: variables.fontSizeHeadingMedium,
      large: variables.fontSizeHeadingLarge,
      xLarge: variables.fontSizeHeadingXLarge,
    },
    content: {
      small: variables.fontSizeContentSmall,
      medium: variables.fontSizeContentMedium,
      large: variables.fontSizeContentLarge,
      xLarge: variables.fontSizeContentXLarge,
    },
  },
};

const lightColors = {
  background: {
    default: variables.colorsLightBackgroundDefault,
    background1: variables.colorsLightBackgroundBackground1,
    background2: variables.colorsLightBackgroundBackground2,
    primary: variables.colorsLightBackgroundPrimary,
    secondary: variables.colorsLightBackgroundSecondary,
    tertiary: variables.colorsLightBackgroundTertiary,
    quaternary: variables.colorsLightBackgroundQuaternary,
  },
  text: {
    default: variables.colorsLightTextDefault,
    primary: variables.colorsLightTextPrimary,
    secondary: variables.colorsLightTextSecondary,
    tertiary: variables.colorsLightTextTertiary,
    quaternary: variables.colorsLightTextQuaternary,
  },
  button: {
    default: variables.colorsLightButtonDefault,
    primary: variables.colorsLightButtonPrimary,
    secondary: variables.colorsLightButtonSecondary,
    tertiary: variables.colorsLightButtonTertiary,
    quaternary: variables.colorsLightButtonQuaternary,
  },
};

const darkColors = {
  background: {
    default: variables.colorsDarkBackgroundDefault,
    background1: variables.colorsDarkBackgroundBackground1,
    background2: variables.colorsDarkBackgroundBackground2,
    primary: variables.colorsDarkBackgroundPrimary,
    secondary: variables.colorsDarkBackgroundSecondary,
    tertiary: variables.colorsDarkBackgroundTertiary,
    quaternary: variables.colorsDarkBackgroundQuaternary,
  },
  text: {
    default: variables.colorsDarkTextDefault,
    primary: variables.colorsDarkTextPrimary,
    secondary: variables.colorsDarkTextSecondary,
    tertiary: variables.colorsDarkTextTertiary,
    quaternary: variables.colorsDarkTextQuaternary,
  },
  button: {
    default: variables.colorsDarkButtonDefault,
    primary: variables.colorsDarkButtonPrimary,
    secondary: variables.colorsDarkButtonSecondary,
    tertiary: variables.colorsDarkButtonTertiary,
    quaternary: variables.colorsDarkButtonQuaternary,
  },
};

export const lightTheme = {
  ...basicTheme,
  colors: lightColors,
};

export const darkTheme = {
  ...basicTheme,
  colors: darkColors,
};
