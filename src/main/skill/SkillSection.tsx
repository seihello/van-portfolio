import React from 'react'
import SkillCategory from './SkillCategory'
import styles from './skill.module.scss'
import commonStyles from '../../common.module.scss'

export default function SkillSection() {

  const computerLanguageSkills = [
      {skillName: "C++", proficiency: 100 },
      {skillName: "C", proficiency: 100 },
      {skillName: "Python", proficiency: 80 },
      {skillName: "Java", proficiency: 80 },
      {skillName: "HTML/CSS", proficiency: 80 },
      {skillName: "JavaScript", proficiency: 60 },
      {skillName: "PHP", proficiency: 40 },
      {skillName: "Swift", proficiency: 40 },
      {skillName: "SQL", proficiency: 80 },
  ]

  const frameworkLibrarySkills = [
    {skillName: "JQuery", proficiency: 100 },
    {skillName: "React.js", proficiency: 40 },
    {skillName: "Kivy", proficiency: 80 },
    {skillName: "Selenium", proficiency: 80 },
  ]

  const toolSkills = [
    {skillName: "Git/GitHub", proficiency: 100 },
    {skillName: "Figma", proficiency: 60 },
    {skillName: "WordPress", proficiency: 60 },
    {skillName: "Joomla!", proficiency: 80 },
    {skillName: "Enterprise Architecture", proficiency: 100 },
    {skillName: "Redmine", proficiency: 100 },
  ]

  const DBSkills = [
    {skillName: "MySQL", proficiency: 80 },
    {skillName: "PostgleSQL", proficiency: 40 },
    {skillName: "Apache Cassandra", proficiency: 60 },
    {skillName: "Neo4j", proficiency: 60 },
  ]

  const OSSkills = [
    {skillName: "Windows", proficiency: 100 },
    {skillName: "macOS", proficiency: 100 },
    {skillName: "Linux", proficiency: 60 },
  ]

  const otherSkills = [
    {skillName: "OOP", proficiency: 100 },
    {skillName: "UML", proficiency: 100 },
    {skillName: "DevOps", proficiency: 80 },
    {skillName: "Agile Development", proficiency: 60 },
    {skillName: "SEMI Standards", proficiency: 80 },
  ]

  return (
    <div className={commonStyles.section}>
      <h2>Skill</h2>
      <hr />
      <SkillCategory categoryTitle='Computer Language' skillList={computerLanguageSkills}/>
      <SkillCategory categoryTitle='Framework/Library' skillList={frameworkLibrarySkills}/>
      <SkillCategory categoryTitle='Tool' skillList={toolSkills}/>
      <SkillCategory categoryTitle='DB' skillList={DBSkills}/>
      <SkillCategory categoryTitle='OS' skillList={OSSkills}/>
      <SkillCategory categoryTitle='Other' skillList={otherSkills}/>
    </div>
  )
}
