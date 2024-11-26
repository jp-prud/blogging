import { ViewStyle } from 'react-native';

import { createTheme } from '@shopify/restyle';

export const palette = {
  primary: '#1E1E1E',
  text: '#333333',
  subtext: '#727272',
  gray: '#f4f4f4',
  border: '#F2F2F2',
  input: '#EAEAEA',
  white: '#fffdfe',
  background: '#F7F7F7',
  disabled: '#D9D9D9',
  darkRed: '#E55857',
  lightRed: '#FD6362',
  pink: '#CE01FF',
  blue: '#21C8EF',
  green: '#02CD9A',
  yellow: '#FF9D24',
  purple: '#7300FE',
};

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.primary,
    primaryContrast: palette.white,

    buttonPrimary: palette.primary,

    background: palette.background,
    backgroundContrast: palette.text,

    error: palette.darkRed,
    errorLight: palette.lightRed,

    success: palette.green,
  },
  spacing: {
    s0: 0,
    s2: 2,
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s28: 28,
    s32: 32,
    s36: 36,
    s40: 40,
    s42: 42,
    s48: 48,
    s56: 56,
    s64: 64,
  },
  borderRadii: {
    s2: 2,
    s4: 4,
    s8: 8,
    s12: 12,
    s16: 16,
    s24: 24,
    s32: 32,
  },
  textVariants: {
    defaults: {},
  },
});

export const $shadowProps: ViewStyle = {
  elevation: 10,
  shadowColor: '#000',
  shadowOpacity: 0.05,
  shadowRadius: 12,
  shadowOffset: { width: 0, height: -3 },
};

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
