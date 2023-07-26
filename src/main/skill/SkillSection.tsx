import React from 'react'
import Skill from './Skill'
import styles from './skill.module.scss'
import commonStyles from '../../common.module.scss'

export default function SkillSection() {
  return (
    <div className={commonStyles.section}>
      <h2>Skill</h2>
      <hr />
      <h3>Computer Language</h3>
      <div className={styles.skills}>
        <Skill skillName="C++" proficiency={100}/>
        <Skill skillName="C" proficiency={100}/>
        <Skill skillName="Python" proficiency={80}/>
        <Skill skillName="Java" proficiency={80}/>
        <Skill skillName="HTML/CSS" proficiency={80}/>
        <Skill skillName="JavaScript" proficiency={60}/>
        <Skill skillName="PHP" proficiency={40}/>
        <Skill skillName="Swift" proficiency={40}/>
        <Skill skillName="SQL" proficiency={80}/>
      </div>

      <h3>Framework/Library</h3>
      <div className={styles.skills}>
        <Skill skillName="JQuery" proficiency={100}/>
        <Skill skillName="React.js" proficiency={40}/>
        <Skill skillName="Kivy" proficiency={80}/>
        <Skill skillName="Selenium" proficiency={80}/>
      </div>

      <h3>Tool</h3>
      <div className={styles.skills}>
        <Skill skillName="Git/GitHub" proficiency={100}/>
        <Skill skillName="Figma" proficiency={60}/>
        <Skill skillName="WordPress" proficiency={60}/>
        <Skill skillName="Joomla!" proficiency={80}/>
        <Skill skillName="Enterprise Architecture" proficiency={100}/>
        <Skill skillName="Redmine" proficiency={100}/>
      </div>

      <h3>DB</h3>
      <div className={styles.skills}>
        <Skill skillName="MySQL" proficiency={80}/>
        <Skill skillName="PostgleSQL" proficiency={40}/>
        <Skill skillName="Apache Cassandra" proficiency={60}/>
        <Skill skillName="Neo4j" proficiency={60}/>
      </div>

      <h3>OS</h3>
      <div className={styles.skills}>
        <Skill skillName="Windows" proficiency={100}/>
        <Skill skillName="macOS" proficiency={100}/>
        <Skill skillName="Linux" proficiency={60}/>
      </div>
      
      <h3>Other</h3>
      <div className={styles.skills}>
        <Skill skillName="OOP" proficiency={100}/>
        <Skill skillName="UML" proficiency={100}/>
        <Skill skillName="DevOps" proficiency={80}/>
        <Skill skillName="Agile Development" proficiency={60}/>
        <Skill skillName="SEMI Standards" proficiency={80}/>
      </div>
    </div>
  )
}
