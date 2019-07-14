import React from "react"
import Section from "./section"
import styles from "./contact.module.css"
import Submit from "../components/submit"

const Contact = () => {
  const handlCopyClipboard = () => {
    navigator.clipboard.writeText("damien.herv@gmail.com")
  }
  return (
    <section id="contact" className={styles.container}>
      <form
        action="https://formspree.io/damien.herv@gmail.com"
        method="POST"
        className={styles.wrapper}
      >
        <h2 className="global_section_title">Contact</h2>
        <p className={styles.description}>
          You can drop a line or{" "}
          <span
            className={styles.copy_to_clipboard}
            onClick={() => handlCopyClipboard()}
          >
            copy
          </span>{" "}
          my email address.
        </p>
        <textarea rows={8} className={styles.textbox} name="content" />
        <input className={styles.btn_submit} type="submit" value="Send" />
      </form>
    </section>
  )
}

export default Contact
