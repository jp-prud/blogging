import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAppTheme } from './useAppTheme';

export function useAppSafeArea() {
  const { top, bottom, left, right } = useSafeAreaInsets();
  const { spacing } = useAppTheme();

  return {
    left: Math.max(left, spacing.s24),
    right: Math.max(right, spacing.s24),
    top: Math.max(top, spacing.s24),
    bottom: Math.max(bottom, spacing.s24),
  };
}
