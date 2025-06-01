import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MicroModaSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      fill="#48C600"
      d="M10.5 1.75a4.375 4.375 0 0 0-4.375 4.375v3.5a4.375 4.375 0 0 0 8.75 0v-3.5A4.375 4.375 0 0 0 10.5 1.75Z"
    />
    <Path
      fill="#48C600"
      d="m9.285 17.407.34 2.718h1.75l.34-2.718a7.877 7.877 0 0 0 6.66-7.782h-1.75a6.125 6.125 0 0 1-12.25 0h-1.75a7.877 7.877 0 0 0 6.66 7.782Z"
    />
  </Svg>
);
export default MicroModaSvg;
