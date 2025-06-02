import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
const MenuTalkActive = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={49}
    height={48}
    fill="none"
    {...props}
  >
    <Path
      fill="#262222"
      d="M40.586 23.95A1.972 1.972 0 0 1 38.8 26.76h-5.104v10.504a.987.987 0 0 1-.986.986h-9.136v5.47H10.659a4.992 4.992 0 0 1-4.992-4.992V8.584a4.993 4.993 0 0 1 4.203-4.93L29.592.497 40.586 23.95Z"
    />
    <Circle cx={27.954} cy={32.288} r={2} fill="#FCE000" />
    <Path
      fill="#FCE000"
      d="M32.746 18.067a15.474 15.474 0 0 0-9.54-3.273 15.475 15.475 0 0 0-9.54 3.273l1.495 1.918a13.043 13.043 0 0 1 8.046-2.76c3.034 0 5.824 1.03 8.045 2.76l1.494-1.918Z"
    />
    <Circle cx={25.319} cy={19.348} r={3.653} fill="#FCE000" />
  </Svg>
);
export default MenuTalkActive;
