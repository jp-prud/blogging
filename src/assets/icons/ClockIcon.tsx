import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { IconBase } from '@components';

export function ClockIcon({ color = 'black', size = 28 }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <Path fill={color} d="M13.991 22.742c4.984 0 9.097-4.113 9.097-9.088s-4.122-9.088-9.106-9.088c-4.974 0-9.079 4.114-9.079 9.088 0 4.975 4.114 9.088 9.088 9.088m0-1.81a7.243 7.243 0 0 1-7.26-7.278 7.234 7.234 0 0 1 7.251-7.268 7.264 7.264 0 0 1 7.287 7.268 7.253 7.253 0 0 1-7.278 7.278m-4.43-6.17h4.421a.696.696 0 0 0 .712-.703V8.31a.696.696 0 0 0-.712-.704.69.69 0 0 0-.694.704v5.044H9.562a.694.694 0 0 0-.704.704c0 .395.308.703.704.703" />
    </Svg>
  );
}
