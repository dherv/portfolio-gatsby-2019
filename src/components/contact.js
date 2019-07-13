import React from "react"
import Section from "./section"
import styles from "./contact.module.css"
import Submit from "../components/submit"

const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className="global_section_title">Contact</h2>
        <p className={styles.description}>
          You can drop a line or copy my email address here. They will both
          arrive a the same place.
        </p>
        <textarea rows={8} className={styles.textbox} />
        <button className={styles.btn_submit}>submit</button>
      </div>
    </section>
  )
}

export default Contact
