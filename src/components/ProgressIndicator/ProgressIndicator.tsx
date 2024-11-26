import React from 'react';

import { AnimatedBox } from '../Box/AnimatedBox';
import { Box, BoxProps } from '../Box/Box';

type ProgressIndicatorProps = BoxProps & {
  total: number;
  currentIndex: number;
};

export function ProgressIndicator({
  total,
  currentIndex,
  ...boxProps
}: ProgressIndicatorProps) {
  return (
    <Box flexDirection="row" alignItems="center" {...boxProps} g="s8">
      {Array.from({ length: total }).map((_, index) => (
        <AnimatedBox key={index}>
          <Box
            width={index === currentIndex ? 40 : 20}
            height={6}
            borderRadius="s4"
            backgroundColor={index === currentIndex ? 'primary' : 'gray'}
          />
        </AnimatedBox>
      ))}
    </Box>
  );
}
