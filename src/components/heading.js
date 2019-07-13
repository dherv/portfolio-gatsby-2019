import React from "react"
import styles from "./heading.module.css"

export default ({ children }) => (
  <>
    <h2 className={styles.sectionTitle}>{children}</h2>
  </>
)
