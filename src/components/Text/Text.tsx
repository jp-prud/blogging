import { ComponentProps } from 'react';
import { TextStyle } from 'react-native';

import { createText } from '@shopify/restyle';

import { Theme } from '@theme';

const SRText = createText<Theme>();

type SRTextProps = ComponentProps<typeof SRText>;

interface TextProps extends SRTextProps {
  preset?: TextVariants;
  bold?: boolean;
  italic?: boolean;
  semiBold?: boolean;
}

export function Text({
  children,
  preset = 'paragraphMedium',
  bold,
  italic,
  semiBold,
  style,
  selectable,
  selectionColor = '#c7e7ea',
  ...sRTextProps
}: TextProps) {
  const fontFamily = getFontFamily(preset, bold, italic, semiBold);

  return (
    <SRText
      color="backgroundContrast"
      style={[$fontSizes[preset], { fontFamily }, style]}
      selectable={selectable}
      selectionColor={selectionColor}
      {...sRTextProps}>
      {children}
    </SRText>
  );
}

function getFontFamily(
  preset: TextVariants,
  bold?: boolean,
  italic?: boolean,
  semiBold?: boolean,
) {
  if (['headingLarge', 'headingMedium', 'headingSmall'].includes(preset)) {
    return italic ? $fontFamily.boldItalic : $fontFamily.bold;
  }

  switch (true) {
    case bold && italic:
      return $fontFamily.boldItalic;
    case bold:
      return $fontFamily.bold;
    case italic:
      return $fontFamily.italic;
    case semiBold && italic:
      return $fontFamily.mediumItalic;
    case semiBold:
      return $fontFamily.medium;
    default:
      return $fontFamily.regular;
  }
}

export type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: { fontSize: 32, lineHeight: 38.4 },
  headingMedium: { fontSize: 22, lineHeight: 26 },
  headingSmall: { fontSize: 20, lineHeight: 24 },

  paragraphLarge: { fontSize: 18, lineHeight: 24 },
  paragraphMedium: { fontSize: 16, lineHeight: 22 },
  paragraphSmall: { fontSize: 14, lineHeight: 20 },

  paragraphCaption: { fontSize: 12, lineHeight: 16.8 },
  paragraphCaptionSmall: { fontSize: 10, lineHeight: 14 },
};

export const $fontFamily = {
  black: 'VisueltPro-Black',
  bold: 'VisueltPro-Bold',
  boldItalic: 'VisueltPro-BoldItalic',
  medium: 'VisueltPro-Medium',
  mediumItalic: 'VisueltPro-MediumItalic',
  italic: 'VisueltPro-Italic',
  regular: 'VisueltPro-Regular',
  light: 'VisueltPro-Light',
};
