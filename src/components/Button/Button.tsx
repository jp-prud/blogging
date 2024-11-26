import {
  ActivityIndicator,
  Box,
  Icon,
  IconProps,
  RenderIf,
  RenderIfElse,
  Text,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components';

import { buttonPresets } from './buttonPresets';

export type ButtonPreset =
  | 'primary'
  | 'secondary'
  | 'positive'
  | 'negative'
  | 'outline'
  | 'invertedOutline';

export interface ButtonProps extends TouchableOpacityBoxProps {
  text: string;
  icon?: IconProps['name'];
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  disabled?: boolean;
  preset?: ButtonPreset;
}

export function Button({
  text,
  loading,
  preset = 'primary',
  disabled,
  icon,
  iconPosition,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];

  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      <RenderIfElse
        condition={Boolean(loading)}
        renderIf={<ActivityIndicator color={buttonPreset.content} />}
        renderElse={
          <Box
            alignItems="center"
            gap="s16"
            justifyContent="center"
            flexDirection="row">
            <RenderIf
              condition={!!icon && iconPosition === 'left'}
              render={<Icon name={icon!} color={buttonPreset.icon} />}
            />
            <Text bold color={buttonPreset.content}>
              {text}
            </Text>
            <RenderIf
              condition={!!icon && iconPosition === 'right'}
              render={<Icon name={icon!} color={buttonPreset.icon} />}
            />
          </Box>
        }
      />
    </TouchableOpacityBox>
  );
}
