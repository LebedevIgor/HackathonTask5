import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const ArrowSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="m8 19-1.4-1.4 6.6-6.6-6.6-6.6L8 3l8 8-8 8Z"
      opacity={0.5}
    />
  </Svg>
);
export default ArrowSvg;
