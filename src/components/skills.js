import React, { useState } from "react"
import Tabs from "../components/tabs"
import { graphql, StaticQuery } from "gatsby"

import Section from "./section"

import SkillCard from "../components/skill-card"
import styles from "./skills.module.css"
import { MdCode, MdEqualizer } from "react-icons/md"
import { FaRocket, FaGift, FaFlask, FaWrench } from "react-icons/fa"

const Skills = () => {
  const [currentTab, setCurrentTab] = useState("frontend")
  const [selected, setSelectedTab] = useState(0)

  function handleClick(tab, index) {
    setCurrentTab(tab)
    setSelectedTab(index)
  }

  const components = {
    MdCode,
    MdEqualizer,
    FaRocket,
    FaGift,
    FaFlask,
    FaWrench,
  }

  function renderIcon(name) {
    // Correct! JSX type can be a capitalized variable.
    const Icon = components[name]
    console.log(Icon)
    return <Icon />
  }

  return (
    <StaticQuery
      query={graphql`
        query {
          allSkillsJson {
            nodes {
              name
              icon
              skills
            }
          }
        }
      `}
      render={data => (
        <section className={styles.container}>
          <h5 className="global_section_title">Skills</h5>
          <p className={styles.subtitle}>
            At work we mostly use Laravel, Vue, MySQL, AWS, ElasticSearch, with
            React and Django recently.
            <br />
            And at home on my side project I mostly use NodeJS, Django along
            with React, Typescript and Jest.
          </p>
          <div className={styles.grid}>
            {data.allSkillsJson.nodes.map(node => (
              <div className={styles.skill_container}>
                <div className={styles.skill_header}>
                  {renderIcon(node.icon)}
                  <h5 className={styles.skill_title}>{node.name}</h5>
                </div>
                <ul>
                  {node.skills.map(skill => (
                    <li>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}
    />
  )
}

export default Skills
