import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styles from "./header.module.css"

const Header = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header className={styles.header}>
        <div className={styles.container}>
          <h2 className={styles.title}>
            <Link to="/" className={styles.link}>
              {data.site.siteMetadata.title}
            </Link>
          </h2>
          <nav className={styles.nav}>
            <ul>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )}
  />
)

export default Header
