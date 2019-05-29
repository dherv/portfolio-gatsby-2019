import React from "react"
import Image from "../components/image"
import { graphql, StaticQuery } from "gatsby"
import styles from "./projects.module.css"

const Projects = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                technologies
                imagePath
              }
              html
            }
          }
        }
      }
    `}
    render={data => (
      <section>
        <h1>Personal Projects</h1>
        <div className={styles.supercontainer}>
          <div className={styles.container}>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <article className={styles.article}>
                <Image src={node.frontmatter.imagePath} />
                <h4 className={styles.title}>{node.frontmatter.title}</h4>
                <p className={styles.technologies}>
                  {node.frontmatter.technologies}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    )}
  />
)

export default Projects
