import React from "react"
import styles from "./tabs.module.css"
import Vignette from "./vignette"

const tabs = ["frontend", "backend", "devops", "tools", "wanted"]

const Tabs = ({ selected, onClick }) => (
  <div className={styles.tab_container}>
    <ul className={styles.tab_list}>
      {tabs.map((tab, index) => (
        <li
          className={`${styles.tab} ${
            selected === index ? styles.tab_selected : ""
          }`}
          onClick={() => onClick(tab, index)}
        >
          {tab}
        </li>
      ))}
    </ul>
    <div className={styles.tab_vignettes}>
      <Vignette fill="#5CB696" />
      <Vignette fill="#7961AE" />
    </div>
  </div>
)

export default Tabs
