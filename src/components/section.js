import React from "react"
import Heading from "./heading"
import styles from "./section.module.css"

export default ({ children, heading }) => (
  <section className={styles.section}>
    {heading ? <Heading>{heading}</Heading> : null}
    {children}
  </section>
)
