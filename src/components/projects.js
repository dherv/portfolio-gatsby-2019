import React from "react"
import Image from "../components/image"
import { graphql, StaticQuery } from "gatsby"
import styles from "./projects.module.css"
import Section from "./section"

const Projects = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "project" } } }
        ) {
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
      <Section heading="personal projects">
        <div className={styles.container}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <article className={styles.article}>
              <Image src={node.frontmatter.imagePath} />
              <h4 className={styles.project_description}>
                <span className={styles.project_title}>
                  {node.frontmatter.title}
                </span>{" "}
                <span>{node.frontmatter.technologies}</span>
              </h4>
            </article>
          ))}
        </div>
      </Section>
    )}
  />
)

export default Projects
