import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { IconBase } from '@components';

export function PencilIcon({ color = 'black', size = 28 }: IconBase) {
  return (
    <Svg
      width={size}
      height={size}
      fill="none"
    >
      <Path fill={color} d="m20.012 9.497.958-.95c.474-.474.492-.992.061-1.432l-.343-.351c-.43-.431-.966-.387-1.432.079l-.958.94zM9.245 20.247l9.923-9.924-1.705-1.696-9.923 9.905-.861 2.074c-.097.264.175.554.44.457z" />
    </Svg>
  );
}
