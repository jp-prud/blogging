import { useNavigation } from '@react-navigation/native';

import { Box, Icon, Text, TouchableOpacityBox } from '@components';

import { ScreenProps } from '../Screen';

const ICON_SIZE = 24;

export function ScreenHeader({
  title,
  titleComponent,
  rightHeaderComponent,
  canGoBack,
  customCanGoBack,
}: Pick<
  ScreenProps,
  'title' | 'canGoBack' | 'titleComponent' | 'rightHeaderComponent' | 'customCanGoBack'
>) {
  const { goBack } = useNavigation();

  function renderBackButton() {
    return (
      <TouchableOpacityBox
        gap="s4"
        flexDirection="row"
        alignItems="center"
        onPress={customCanGoBack ? customCanGoBack : goBack}>
        <Box style={{ transform: [{ scaleX: -1 }] }}>
          <Icon name="arrow" color="text" />
        </Box>

        {!title && !titleComponent && (
          <Text semiBold color="text">
            Voltar
          </Text>
        )}
      </TouchableOpacityBox>
    );
  }

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent={title ? 'space-between' : 'flex-start'}
      mb="s24"
    >
      {canGoBack && renderBackButton()}

      {titleComponent && !title && (
        <Box flex={1} justifyContent="center" alignItems="center">
          {titleComponent}
        </Box>
      )}

      {title && !titleComponent && (
        <Box flex={1}>
          <Text preset="paragraphMedium" bold textAlign="center">
            {title}
          </Text>
        </Box>
      )}

      {title && canGoBack && !rightHeaderComponent && <Box width={ICON_SIZE} />}
      {title && canGoBack && rightHeaderComponent && (
        <Box width={ICON_SIZE}>{rightHeaderComponent}</Box>
      )}
    </Box>
  );
}
