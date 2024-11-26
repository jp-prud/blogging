import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { IconBase } from '@components';

export function EyeIcon({ color = 'black', size = 28 }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <Path fill={color} d="M14 21.204c7.137 0 11.953-5.757 11.953-7.54 0-1.776-4.825-7.533-11.953-7.533-7.031 0-11.953 5.757-11.953 7.532 0 1.784 4.913 7.541 11.953 7.541m.009-2.742c-2.68 0-4.817-2.189-4.825-4.79-.01-2.69 2.144-4.799 4.825-4.799a4.786 4.786 0 0 1 4.816 4.799c0 2.601-2.153 4.79-4.816 4.79m0-3.006c.984 0 1.801-.808 1.801-1.784 0-.985-.817-1.802-1.801-1.802-1.002 0-1.81.818-1.81 1.802 0 .976.808 1.784 1.81 1.784" />
    </Svg>
  );
}
