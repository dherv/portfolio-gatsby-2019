import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FaGithub, FaDocker, FaLinkedinIn, FaFilePdf } from "react-icons/fa"
import styles from "./hero.module.css"

const Hero = () => (
  <StaticQuery
    query={graphql`
      query SiteHeroQuery {
        site {
          siteMetadata {
            subtitle
            description
          }
        }
      }
    `}
    render={data => (
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <h5 className="global_section_title">
            {data.site.siteMetadata.subtitle}
          </h5>
          <p className={styles.description}>
            {data.site.siteMetadata.description}
          </p>
        </div>
        <div className={styles.icon_container}>
          <FaGithub className={styles.icon} />
          <FaLinkedinIn className={styles.icon} />
          <FaDocker className={styles.icon} />
          <FaFilePdf className={styles.icon} />
        </div>
      </section>
    )}
  />
)

export default Hero
