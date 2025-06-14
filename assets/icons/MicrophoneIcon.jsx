import * as React from "react"
import Svg, { Path } from 'react-native-svg';
const MicrophoneIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M16.956 11.99A5 5 0 0 0 16 9.06l1.617-1.177a7 7 0 0 1 .016 8.214l-1.622-1.17a5 5 0 0 0 .945-2.936Z"
    />
    <Path
      fill="#000"
      d="M19.235 6.706a9 9 0 0 1 .02 10.56l1.622 1.17a11 11 0 0 0-.025-12.907l-1.617 1.177ZM11 2c2.21 0 4 4.477 4 10s-1.79 10-4 10c-.629 0-1.223-.363-1.752-1.01C7.918 19.366 7 15.951 7 12c0-3.951.917-7.367 2.248-8.991C9.778 2.363 10.371 2 11 2ZM6.52 5.08C5.87 7.006 5.5 9.421 5.5 12c0 2.577.37 4.992 1.02 6.92L4 17H3c-1.105 0-2-2.239-2-5s.895-5 2-5h1l2.52-1.92ZM9.2 9A21.95 21.95 0 0 0 9 12c0 1.067.073 2.077.201 3.001h.4c.662 0 1.199-1.344 1.199-3s-.537-3-1.2-3h-.399Z"
    />
  </Svg>
)
export default MicrophoneIcon;
