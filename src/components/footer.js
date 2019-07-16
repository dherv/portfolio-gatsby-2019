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
    <ul>
      <li className={styles.item}>
        <a href="https://github.com/dherv" target="blank">
          <FontAwesomeIcon
            className={styles.icon}
            icon={faGithub}
            size="2x"
            color="#bbbbbb"
          />
        </a>
      </li>

      <li className={styles.item}>
        <a href="https://www.linkedin.com/in/damien-hervieux/" target="blank">
          <FontAwesomeIcon
            className={styles.icon}
            icon={faLinkedin}
            size="2x"
            color="#bbbbbb"
          />
        </a>
      </li>

      <li className={styles.item}>
        <a href="https://hub.docker.com/u/dherv" target="blank">
          <FontAwesomeIcon
            className={styles.icon}
            icon={faDocker}
            size="2x"
            color="#bbbbbb"
          />
        </a>
      </li>
    </ul>
  </footer>
)
