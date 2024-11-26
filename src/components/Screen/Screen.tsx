import { KeyboardAvoidingView, Platform } from 'react-native';

import { ActivityIndicator, Box, BoxProps } from '@components';
import { useAppSafeArea, useAppTheme } from '@hooks';

import {
  ScrollableViewContainer,
  ViewContainer,
} from './components/ScreenContainers';
import { ScreenHeader } from './components/ScreenHeader';

export interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  FooterComponent?: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  isLoading?: boolean;
  isError?: boolean;
  renderErrorComponent?: React.ReactNode;
  title?: string;
  titleComponent?: React.ReactNode;
  rightHeaderComponent?: React.ReactNode;
  footerContainerStyle?: BoxProps['style'];
  customCanGoBack?: () => void
}

export const HORIZONTAL_PADDING = 24;

export function Screen({
  children,
  isLoading,
  isError,
  renderErrorComponent,
  canGoBack = false,
  scrollable = false,
  FooterComponent,
  title,
  titleComponent,
  rightHeaderComponent,
  footerContainerStyle,
  customCanGoBack,
  ...boxProps
}: ScreenProps) {
  const { top, bottom } = useAppSafeArea();
  const { colors } = useAppTheme();

  const Container =
    scrollable && !isLoading ? ScrollableViewContainer : ViewContainer;

  function renderLoadingScreenState() {
    return (
      <Box alignItems="center" justifyContent="center">
        <ActivityIndicator color="primary" size={56} />
      </Box>
    );
  }

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        position: 'relative',
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      testID="screen-component">
      <Container backgroundColor={colors.background}>
        <Box
          flex={1}
          justifyContent={isLoading || isError ? 'center' : 'flex-start'}
          style={[
            {
              paddingTop: top,
              paddingHorizontal: HORIZONTAL_PADDING,
            },
          ]}
          {...boxProps}>
          {!isLoading && (title || canGoBack) && (
            <ScreenHeader
              titleComponent={titleComponent}
              title={title}
              canGoBack={canGoBack}
              rightHeaderComponent={rightHeaderComponent}
              customCanGoBack={customCanGoBack}
            />
          )}

          {isLoading && renderLoadingScreenState()}

          {!isLoading && isError && renderErrorComponent}

          {!isLoading && !isError && children}
        </Box>
      </Container>

      {FooterComponent && !isLoading && !isError && (
        <Box
          style={[
            {
              paddingTop: HORIZONTAL_PADDING,
              paddingBottom: bottom,
              paddingHorizontal: HORIZONTAL_PADDING,
              backgroundColor: colors.background,
            },
            footerContainerStyle,
          ]}>
          {FooterComponent}
        </Box>
      )}
    </KeyboardAvoidingView>
  );
}
