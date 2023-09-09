import styles from './project.module.scss'
import commonStyles from '../../common.module.scss'
import skills from '../../setting/skills'
import { useContext } from 'react'
import { ProjectContext } from '../../context/projectContext'

export default function ProjectFilter() {

  const projects = useContext(ProjectContext)?.projects;
  const selectedSkills = useContext(ProjectContext)?.selectedSkills;
  const setSelectedSkills = useContext(ProjectContext)?.setSelectedSkills;

  const filterSkills = new Set<string>();
  if (projects) {
    for (const project of projects) {
      for (const skill of project.skills) {
        filterSkills.add(skill);
      }
    }
  }

  return (
    <div className={styles.filter}>
      {[...filterSkills].map((filterSkill) => {
        const skill = skills.find((skill) => skill.name === filterSkill);
        return (
          <div className={styles.filter_item} style={{
            color: skill?.color,
            border: `1px solid ${skill?.color}`,
          }}>
            {filterSkill}
          </div>
        )
      })}
    </div>
  )
}
