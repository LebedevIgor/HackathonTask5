import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SendBtn = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="m1.418.088 13.877 6.939a1.088 1.088 0 0 1 0 1.946L1.418 15.912a.816.816 0 0 1-1.157-.928l1.303-5.21c.113-.451.5-.781.965-.82l7.912-.66a.296.296 0 0 0 0-.589L2.53 7.046a1.088 1.088 0 0 1-.965-.82L.26 1.016A.816.816 0 0 1 1.418.088Z"
    />
  </Svg>
);
export default SendBtn;
