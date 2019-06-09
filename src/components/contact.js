import React from "react"
import Section from "./section"
import styles from "./contact.module.css"
import Submit from "../components/submit"

const Contact = () => {
  return (
    <Section heading="contact">
      <form className={styles.form}>
        <label className={styles.label}>name</label>
        <input className={styles.input} />
        <label className={styles.label}>email</label>
        <input className={styles.input} />
        <label className={styles.label}>message</label>
        <textarea className={styles.input} />
        <div />
        <div style={{ justifySelf: "flex-end", marginRight: "2rem" }}>
          <Submit />
        </div>
      </form>
    </Section>
  )
}

export default Contact
