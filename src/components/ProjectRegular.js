import React from "react"
import Image from "../components/image"
import { graphql, StaticQuery } from "gatsby"
import styles from "./projects.module.css"
import Section from "./section"
import { MdCode, MdEqualizer, MdTimeline } from "react-icons/md"
import { FaRocket } from "react-icons/fa"

const ProjectRegular = ({ data, index, className }) => (
  <div
    style={{
      background: data.background,
    }}
    className={` ${styles.article_container_regular} ${className}`}
  >
    <a
      href={data.link}
      target="blank"
      style={{ cursor: data.link ? "pointer" : "" }}
    >
      <article className={styles.article_wrapper}>
        <div className={`${styles.article_regular} ${styles.article}`}>
          <Image
            style={{ flex: "1 1 auto", maxWidth: 450 }}
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
                <small className={styles.project_tech_name}>
                  {data.backend}
                </small>
              </div>
              <div>
                <MdTimeline className={styles.project_tech_icon} />
                <small className={styles.project_tech_name}>In Progress</small>
              </div>
              <div>
                <FaRocket className={styles.project_tech_icon} />
                <small className={styles.project_tech_name}>
                  {data.deployed}
                </small>
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
    </a>
  </div>
)

export default ProjectRegular
