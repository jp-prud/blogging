import { Box, Icon, Text, TouchableOpacityBox } from '@components';

export interface LinkStandAloneProps {
  text: string;
  onPress?: () => void;
  hasIcon?: boolean;
}

export function LinkStandAlone({
  onPress,
  text,
  hasIcon = true,
}: LinkStandAloneProps) {
  return (
    <TouchableOpacityBox
      onPress={onPress}
      flexDirection="row"
      alignItems="center"
      gap="s4"
      testID="link-stand-alone">
      <Text semiBold color="primary">
        {text}
      </Text>

      {hasIcon && (
        <Icon name="chevron" color="primary" />
      )}
    </TouchableOpacityBox>
  );
}
