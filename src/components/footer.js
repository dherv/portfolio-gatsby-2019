import React from "react"
import styles from "./footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faDocker,
} from "@fortawesome/free-brands-svg-icons"

export default () => (
  <footer className={styles.footer}>
    <FontAwesomeIcon
      className={styles.icon}
      icon={faGithub}
      size="2x"
      color="#bbbbbb"
    />
    <FontAwesomeIcon
      className={styles.icon}
      icon={faLinkedin}
      size="2x"
      color="#bbbbbb"
    />
    <FontAwesomeIcon
      className={styles.icon}
      icon={faDocker}
      size="2x"
      color="#bbbbbb"
    />
  </footer>
)
