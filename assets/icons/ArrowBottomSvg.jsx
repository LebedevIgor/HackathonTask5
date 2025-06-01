import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowBottomSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#21201F"
      fillRule="evenodd"
      d="m11 16.2-5.6-5.6L4 12l8 8 8-8-1.4-1.4-5.6 5.6V4h-2v12.2Z"
      clipRule="evenodd"
      opacity={0.7}
    />
  </Svg>
);
export default ArrowBottomSvg;
