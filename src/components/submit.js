import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons"

export default () => (
  <svg
    viewbox="0 0 40 40"
    width={40}
    height={40}
    fill="#7961AE"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <circle cx="20" cy="20" r="20" />
      <FontAwesomeIcon
        icon={faTelegramPlane}
        size="xs"
        color="white"
        fixedWidth
        transform="shrink-6 left-.5"
      />
    </g>
  </svg>
)
