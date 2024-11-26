import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { IconBase } from '@components';

export function ChevronIcon({ color = 'black', size = 28 }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        fill={color}
        d="M19.651 13.654a1.15 1.15 0 0 0-.36-.808l-6.838-6.689a1.02 1.02 0 0 0-.73-.299c-.588 0-1.045.457-1.045 1.046 0 .282.114.545.316.747l6.153 6.003-6.153 6.003a1.04 1.04 0 0 0-.316.747c0 .59.457 1.046 1.046 1.046.28 0 .527-.105.73-.299l6.837-6.697c.246-.228.36-.492.36-.8"
      />
    </Svg>
  );
}
