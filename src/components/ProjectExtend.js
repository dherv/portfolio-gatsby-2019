import React from "react"
import Image from "../components/image"
import { graphql, StaticQuery } from "gatsby"
import styles from "./projects.module.css"
import Section from "./section"
import { MdCode, MdEqualizer, MdTimeline } from "react-icons/md"

const ProjectExtended = ({ data, className }) => (
  <div
    style={{
      backgroundColor: data.background,
    }}
    className={`${styles.article_container_extend} ${
      styles.article_container
    } ${className}`}
  >
    <a href={data.link} style={{ cursor: data.link ? "pointer" : "" }}>
      <article className={`${styles.article_extend} ${styles.article}`}>
        <Image
          style={{ flex: "1 0 auto", maxWidth: "100%" }}
          imgStyle={{ borderRadius: 4 }}
          src={data.imagePath}
        />
        <div className={styles.project}>
          <p className={styles.project_title}>{data.title}</p>{" "}
          <div className={styles.project_technologies}>
            <div>
              <MdCode className={styles.project_tech_icon} />
              <small className={styles.project_tech_name}>
                {data.frontend}
              </small>
            </div>
            <div>
              <MdEqualizer className={styles.project_tech_icon} />
              <small className={styles.project_tech_name}>{data.backend}</small>
            </div>
            <div>
              <MdTimeline className={styles.project_tech_icon} />
              <small className={styles.project_tech_name}>In Progress</small>
            </div>
          </div>
          <p className={`${styles.project_description}`}>{data.description}</p>
        </div>
      </article>
    </a>
  </div>
)

export default ProjectExtended
