import React, { useRef } from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  ViewProps as RNViewProps,
  TextStyle,
} from 'react-native';

import { useAppTheme } from '../../hooks/useAppTheme';
import { Box, BoxProps } from '../Box/Box';
import { $fontFamily, $fontSizes, Text } from '../Text/Text';

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  errorMessage?: string;
  RightComponent?: React.ReactElement;
  prefix?: string;
  sufix?: string;
  boxContainerStyles?: RNViewProps['style'];
  errorMessageContainerStyles?: RNViewProps['style'];
  description?: string;
}

export function TextInput({
  label,
  errorMessage,
  prefix,
  sufix,
  RightComponent,
  boxContainerStyles,
  errorMessageContainerStyles,
  description,
  ...rNTextInputProps
}: TextInputProps) {
  const { colors } = useAppTheme();

  const inputRef = useRef<RNTextInput>(null);

  const $textInputContainer: BoxProps = {
    borderWidth: errorMessage ? 2 : 1,
    backgroundColor: 'border',
    borderColor: errorMessage ? 'error' : 'border',
    borderRadius: 's16',
    py: 's12',
    px: 's16',
    flexDirection: 'row',
    alignItems: 'center',
  };

  function handleClickInputFocus() {
    inputRef.current?.focus();
  }

  return (
    <Pressable onPress={handleClickInputFocus}>
      <Box g="s4">
        {label && (
          <Text semiBold color="subtext">
            {label}
          </Text>
        )}

        <Box {...$textInputContainer} style={[boxContainerStyles]}>
          {prefix && <Text color="subtext">{prefix}</Text>}

          <RNTextInput
            ref={inputRef}
            placeholderTextColor={colors.subtext}
            style={$textInputStyle}
            autoCapitalize="none"
            {...rNTextInputProps}
          />

          {sufix && (
            <Text color="subtext" ml="s12">
              {sufix}
            </Text>
          )}
          {RightComponent && <Box>{RightComponent}</Box>}
        </Box>

        {errorMessage && (
          <Box style={[errorMessageContainerStyles]}>
            <Text preset="paragraphSmall" color="error" bold>
              {errorMessage}
            </Text>
          </Box>
        )}

        {description && !errorMessage && (
          <Text color="subtext" preset="paragraphSmall">
            {description}
          </Text>
        )}
      </Box>
    </Pressable>
  );
}

const $textInputStyle: TextStyle = {
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
  flexGrow: 1,
  flexShrink: 1,
  paddingRight: 16,
};
