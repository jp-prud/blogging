import { Box, BoxProps, LinkStandAlone, Text } from '@components';

export interface TitleBarProps {
  title: string;
  linkText?: string;
  hasIcon?: boolean;
  onPress?: () => void;
}

export function TitleBar({
  title,
  linkText,
  onPress,
  hasIcon = false,
  ...boxProps
}: TitleBarProps & BoxProps) {
  return (
    <Box
      testID="title-bar"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      {...boxProps}>
      <Text preset="headingSmall" bold>
        {title}
      </Text>

      {linkText && (
        <LinkStandAlone onPress={onPress} hasIcon={hasIcon} text={linkText} />
      )}
    </Box>
  );
}
