import { ComponentProps } from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from 'react-native';

import {
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
  SpacingProps,
  SpacingShorthandProps,
  backgroundColor,
  border,
  createBox,
  createRestyleComponent,
  layout,
  spacing,
  spacingShorthand,
} from '@shopify/restyle';

import { Theme } from '@theme';

export const Box = createBox<Theme>();
export type BoxProps = ComponentProps<typeof Box>;

export type TouchableOpacityBoxProps = TouchableOpacityProps &
  BackgroundColorProps<Theme> &
  BorderProps<Theme> &
  LayoutProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  ComponentProps<typeof Box>;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, border, layout, spacing, spacingShorthand],
  TouchableOpacity,
);

export type TouchableWithoutFeedbackBoxProps = TouchableWithoutFeedbackProps &
  BackgroundColorProps<Theme> &
  BorderProps<Theme> &
  LayoutProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  ComponentProps<typeof Box>;

export const TouchableWithoutFeedbackBox = createRestyleComponent<
  TouchableWithoutFeedbackBoxProps,
  Theme
>(
  [backgroundColor, border, layout, spacing, spacingShorthand],
  TouchableWithoutFeedback,
);
