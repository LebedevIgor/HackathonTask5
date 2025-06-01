import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
const MenuDictionary = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)" opacity={0.3}>
      <Path
        fill="#262222"
        d="M3 6.875v25.542a6.875 6.875 0 0 0 6.874 6.876h9.235V48l10.055-8.707h8.795a6.875 6.875 0 0 0 6.875-6.876V6.875A6.875 6.875 0 0 0 37.959 0H9.874A6.875 6.875 0 0 0 3 6.875Z"
      />
      <Path
        fill="#fff"
        d="M21.49 12.109h-1.488c-.889 0-1.542.098-1.96.293-.418.195-.77.585-1.058 1.17-.278.577-.448 1.264-.51 2.062H15v-5.135h17.725v5.135h-1.476c-.278-1.383-.67-2.315-1.175-2.793-.505-.488-1.31-.732-2.417-.732h-1.528v12.743c0 .824.135 1.4.405 1.729.279.319.858.479 1.737.479h.457v1.476h-9.783V27.06h.418c.888 0 1.463-.165 1.724-.493.27-.337.405-.909.405-1.715V12.109Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default MenuDictionary;
