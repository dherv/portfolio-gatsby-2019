import React from "react"
import Heading from "./heading"
import styles from "./section.module.css"

export default ({ children, heading }) => (
  <section className={styles.section}>
    <Heading>{heading}</Heading>
    {children}
  </section>
)
