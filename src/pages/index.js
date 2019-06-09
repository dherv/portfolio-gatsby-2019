import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"
import Skills from "../components/skills"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
)

export default IndexPage
