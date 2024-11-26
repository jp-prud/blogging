import Svg, { Path } from 'react-native-svg';

import { IconBase } from '@components';

export function CloseIcon({ color = 'black', size = 28 }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        fill={color}
        d="M8.313 17.935c-.369.369-.386 1.028.01 1.406.377.395 1.045.378 1.414.009L14 15.087l4.263 4.263c.377.377 1.028.386 1.406-.01.395-.377.387-1.036.009-1.414l-4.263-4.263 4.263-4.254c.378-.387.386-1.037-.01-1.415-.377-.395-1.027-.387-1.405-.009L14 12.248 9.737 7.985c-.369-.369-1.037-.386-1.415.01-.395.377-.378 1.036-.009 1.405l4.263 4.263z"
      />
    </Svg>
  );
}
