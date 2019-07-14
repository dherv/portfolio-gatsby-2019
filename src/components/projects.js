import React from "react"
import Image from "../components/image"
import { graphql, StaticQuery } from "gatsby"
import styles from "./projects.module.css"
import Section from "./section"
import { MdCode, MdEqualizer } from "react-icons/md"
import ProjectRegular from "../components/ProjectRegular"
import ProjectExtended from "../components/ProjectExtend"

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
                description
                imagePath
                background
                frontend
                backend
              }
              html
            }
          }
        }
      }
    `}
    render={data => (
      <section id="projects">
        <div className={styles.container}>
          {data.allMarkdownRemark.edges.map(
            ({ node }, index) =>
              index === 0 || index % 3 === 0 ? (
                <ProjectExtended data={node.frontmatter} />
              ) : (
                <ProjectRegular data={node.frontmatter} index={index} />
              )
            // <div
            //   style={{
            //     backgroundColor: node.frontmatter.background,
            //   }}
            //   className={
            //     index === 0 || index % 3 === 0
            //       ? `${styles.article_container_extend} ${
            //           styles.article_container
            //         }`
            //       : ` ${styles.article_container}`
            //   }
            // >
            //   <article
            //     className={
            //       index === 0 || index % 3 === 0
            //         ? `${styles.article_extend} ${styles.article}`
            //         : `${styles.article_regular} ${styles.article}`
            //     }
            //   >
            //     <Image
            //       style={{ flex: "0 0 auto" }}
            //       imgStyle={{ borderRadius: 4 }}
            //       src={node.frontmatter.imagePath}
            //     />
            //     <div className={styles.project}>
            //       <p className={styles.project_title}>
            //         {node.frontmatter.title}
            //       </p>{" "}
            //       <div className={styles.project_technologies}>
            //         <div>
            //           <MdCode className={styles.project_tech_icon} />
            //           <small className={styles.project_tech_name}>
            //             {node.frontmatter.frontend}
            //           </small>
            //         </div>
            //         <div>
            //           <MdEqualizer className={styles.project_tech_icon} />
            //           <small className={styles.project_tech_name}>
            //             {node.frontmatter.frontend}
            //           </small>
            //         </div>
            //       </div>
            //       {index === 0 || index % 3 === 0 ? (
            //         <p
            //           className={
            //             index === 0 || index % 3 === 0
            //               ? `${styles.project_description}`
            //               : `${styles.project_description} ${
            //                   styles.project_description_regular
            //                 }`
            //           }
            //         >
            //           {node.frontmatter.description}
            //         </p>
            //       ) : null}
            //     </div>
            //     {index !== 0 || index % 3 > 0 ? (
            //       <p
            //         className={
            //           index !== 0 || index % 3 !== 0
            //             ? `${styles.project_description}`
            //             : `${styles.project_description} ${
            //                 styles.project_description_regular
            //               }`
            //         }
            //       >
            //         {node.frontmatter.description}
            //         {index % 3}
            //       </p>
            //     ) : null}
            //   </article>
            // </div>
          )}
        </div>
      </section>
    )}
  />
)

export default Projects
