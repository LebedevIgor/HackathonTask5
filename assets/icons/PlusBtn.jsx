import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    fill="none"
    {...props}
  >
    <path
      fill="#21201F"
      d="M17.071 3.429A10 10 0 1 1 2.93 17.572 10 10 0 0 1 17.07 3.43Zm-6.07 6.07L11 4.84H9V9.5H4.34v2.002L9 11.5v4.66h2V11.5h4.661v-2h-4.66Z"
    />
  </svg>
)
export default SvgComponent
