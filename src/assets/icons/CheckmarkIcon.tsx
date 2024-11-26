import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { IconBase } from '@components';

export function CheckmarkIcon({ color = 'black', size = 28 }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <Path
        d="M6.97754 15.7556L10.9942 20.2743C11.3305 20.6527 11.9336 20.6108 12.2144 20.1896L21.0225 6.97754"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}
