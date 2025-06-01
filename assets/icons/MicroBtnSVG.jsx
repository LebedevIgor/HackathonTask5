import * as React from "react"
import Svg, { Path } from "react-native-svg"

const MicroBtnSVG = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fill="#239808"
      d="M12 2.5a5 5 0 0 0-5 5v4a5 5 0 0 0 10 0v-4a5 5 0 0 0-5-5Z"
    />
    <Path
      fill="#239808"
      d="M10.612 20.394 11 23.5h2l.388-3.106C17.7 19.726 21 15.998 21 11.5h-2a7 7 0 1 1-14 0H3c0 4.498 3.3 8.226 7.612 8.894Z"
    />
  </Svg>
)
export default MicroBtnSVG