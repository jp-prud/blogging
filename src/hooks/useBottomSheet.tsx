import { useCallback, useRef } from 'react';
import { StyleSheet } from 'react-native';

import { HORIZONTAL_PADDING } from '@components';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';

export function useBottomSheet() {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const renderBackdrop = useCallback(
    (props: BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={1}
      />
    ),
    [],
  );

  const onClose = useCallback(() => {
    bottomSheetRef.current?.dismiss();
  }, []);

  const onOpen = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const BOTTOM_SHEET_STYLES = StyleSheet.create({
    container: {
      zIndex: 99,
      marginHorizontal: HORIZONTAL_PADDING
    },
    contentContainer: {
      zIndex: 99,
    },
  });

  const bottomSheetProps = {
    enablePanDownToClose: true,
    enableDynamicSizing: true,
    backdropComponent: renderBackdrop,
    containerStyle: BOTTOM_SHEET_STYLES.container,
  };

  return {
    BOTTOM_SHEET_STYLES,
    bottomSheetRef,
    renderBackdrop,
    onClose,
    onOpen,
    bottomSheetProps,
  };
}
