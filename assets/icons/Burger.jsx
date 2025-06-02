import * as React from "react"
import Svg, { Path } from 'react-native-svg';
const Burger = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#21201F"
      d="M1.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM18 13H5v-2h13v2ZM1.5 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM18 8H5V6h13v2ZM1.5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM18 3H5V1h13v2Z"
    />
  </Svg>
)
export default Burger;
