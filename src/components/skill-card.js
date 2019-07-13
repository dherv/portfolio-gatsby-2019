import React from "react"
import Logo from "../components/logo"
import Level from "../components/level"
import styles from "./skill-card.module.css"

export default ({ node }) => (
  <div style={{ display: "flex" }}>
    <Logo src={node.logoPath} />
    <div className={styles.content}>
      <p>
        <span className={styles.name}>{node.name}</span>{" "}
        <span className={styles.description}>{node.description}</span>
      </p>
      <div className={styles.level_container}>
        <Level />
        <span className={styles.level}>{node.level}</span>
      </div>
    </div>
  </div>
)
