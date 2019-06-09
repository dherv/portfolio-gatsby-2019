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
            subtitle
            description
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
          <h5 className={styles.subtitle}>{data.site.siteMetadata.subtitle}</h5>
          <p className={styles.description}>
            {data.site.siteMetadata.description}
          </p>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Playground</a>
            </li>
          </ul>
        </nav>
      </header>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
