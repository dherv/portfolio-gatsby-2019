/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "../components/footer"
import "./reset.css"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <div
      style={{
        margin: `0 auto`,
        paddingTop: 0,
      }}
    >
      <Header />
      <main>{children}</main>
    </div>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
