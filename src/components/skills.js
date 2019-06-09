import React, { useState } from "react"
import Tabs from "../components/tabs"
import { graphql, StaticQuery } from "gatsby"

import Section from "./section"

import SkillCard from "../components/skill-card"
import styles from "./skills.module.css"

const Skills = () => {
  const [currentTab, setCurrentTab] = useState("frontend")
  const [selected, setSelectedTab] = useState(0)

  function handleClick(tab, index) {
    setCurrentTab(tab)
    setSelectedTab(index)
  }
  return (
    <StaticQuery
      query={graphql`
        query {
          allSkillsJson {
            nodes {
              type
              name
              description
              level
              logoPath
            }
          }
        }
      `}
      render={data => (
        <Section heading="skills">
          <div>
            <Tabs selected={selected} onClick={handleClick} />
            <div className={styles.skills_grid}>
              {data.allSkillsJson.nodes
                .filter(item => {
                  console.log(item.type, currentTab)
                  return item.type === currentTab
                })
                .map(node => (
                  <SkillCard node={node} />
                ))}
            </div>
          </div>
        </Section>
      )}
    />
  )
}

export default Skills
