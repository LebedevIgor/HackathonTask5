import * as React from "react"
import Svg, { G, Mask, Ellipse, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={49}
    height={48}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Mask
        id="b"
        width={49}
        height={48}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
      >
        <Ellipse cx={24.333} cy={24} fill="#fff" rx={24.242} ry={24} />
      </Mask>
      <G mask="url(#b)">
        <Path fill="#FC3F1D" d="M.09 0h48.486v48H.09z" />
        <Path
          fill="#fff"
          d="M27.908 13.44h-2.453c-4.206 0-6.31 2.083-6.31 5.206 0 3.47 1.403 5.204 4.557 7.287l2.454 1.734-7.01 10.757h-5.608l6.66-9.716c-3.856-2.775-5.96-5.204-5.96-9.715 0-5.552 3.856-9.369 11.217-9.369h7.36v28.8h-4.907V13.441Z"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.09 0h48.486v48H.09z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
