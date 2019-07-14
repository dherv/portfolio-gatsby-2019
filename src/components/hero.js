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

        allFile(filter: { extension: { eq: "pdf" } }) {
          edges {
            node {
              id
              publicURL
            }
          }
        }
      }
    `}
    render={data => (
      <section className={styles.container}>
        <div
          className={styles.wrapper}
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div className={styles.text_container}>
            <h5 className="global_section_title">
              {data.site.siteMetadata.subtitle}
            </h5>
            <p className={styles.description}>
              {data.site.siteMetadata.description}
            </p>
          </div>
          <ul className={styles.icon_container}>
            <li className={styles.icon_container}>
              <a href="https://github.com/dherv" target="blank">
                <FaGithub className={styles.icon} />
              </a>
            </li>
            <li className={styles.icon_container}>
              <a
                href="https://www.linkedin.com/in/damien-hervieux/"
                target="blank"
              >
                <FaLinkedinIn className={styles.icon} />
              </a>
            </li>
            <li className={styles.icon_container}>
              <a href="https://hub.docker.com/u/dherv" target="blank">
                <FaDocker className={styles.icon} />
              </a>
            </li>
            <li className={styles.icon_container}>
              {data.allFile.edges.map((file, index) => {
                return (
                  <a href={file.node.publicURL} download>
                    <FaFilePdf className={styles.icon} />
                  </a>
                )
              })}
            </li>
          </ul>
        </div>
      </section>
    )}
  />
)

export default Hero
