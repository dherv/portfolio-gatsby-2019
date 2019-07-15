import React from "react"
import Image from "../components/image"
import { graphql, StaticQuery } from "gatsby"
import styles from "./projects.module.css"
import Section from "./section"
import { MdCode, MdEqualizer, MdTimeline } from "react-icons/md"

const ProjectRegular = ({ data, index }) => (
  <div
    style={{
      backgroundColor: data.background,
    }}
    className={` ${styles.article_container_regular}`}
  >
    <article
      className={
        index % 2 === 0
          ? `${styles.article_wrapper_right}`
          : `${styles.article_wrapper_left}`
      }
    >
      <div className={`${styles.article_regular} ${styles.article}`}>
        <Image
          style={{ flex: "0 0 auto", width: 250 }}
          imgStyle={{ borderRadius: 4, width: 250 }}
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
        </div>
      </div>
      <p
        className={`${styles.project_description} ${
          styles.project_description_regular
        }`}
      >
        {data.description}
      </p>
    </article>
  </div>
)

export default ProjectRegular
