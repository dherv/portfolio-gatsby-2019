import React from "react"
import styles from "./vignette.module.css"

export default ({ fill }) => (
  <svg
    viewbox="0 0 40 40"
    width={40}
    height={40}
    className={styles.vignette}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="20" cy="20" r="20" />
  </svg>
)
