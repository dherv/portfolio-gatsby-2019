import React from "react"
import Image from "../components/image"
import { graphql, StaticQuery } from "gatsby"
import styles from "./projects.module.css"
import Section from "./section"
import { MdCode, MdEqualizer } from "react-icons/md"

const ProjectExtended = ({ data }) => (
  <div
    style={{
      backgroundColor: data.background,
    }}
    className={`${styles.article_container_extend} ${styles.article_container}`}
  >
    <article className={`${styles.article_extend} ${styles.article}`}>
      <Image
        style={{ flex: "1 0 auto" }}
        imgStyle={{ borderRadius: 4 }}
        src={data.imagePath}
      />
      <div className={styles.project}>
        <p className={styles.project_title}>{data.title}</p>{" "}
        <div className={styles.project_technologies}>
          <div>
            <MdCode className={styles.project_tech_icon} />
            <small className={styles.project_tech_name}>{data.frontend}</small>
          </div>
          <div>
            <MdEqualizer className={styles.project_tech_icon} />
            <small className={styles.project_tech_name}>{data.frontend}</small>
          </div>
        </div>
        <p className={`${styles.project_description}`}>{data.description}</p>
      </div>
    </article>
  </div>
)

export default ProjectExtended
