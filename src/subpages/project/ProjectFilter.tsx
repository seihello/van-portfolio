import styles from './project.module.scss'
import skills from '../../setting/skills'
import { useContext } from 'react'
import { ProjectContext } from '../../context/projectContext'

export default function ProjectFilter() {

  const { projects, selectedSkills, setSelectedSkills } = useContext(ProjectContext);

  const filterSkills = new Set<string>(["All"]);
  for (const project of projects) {
    for (const skill of project.skills) {
      filterSkills.add(skill);
    }
  }

  skills.push({
    name: "All",
    color: "#000000",
    icon: ""
  });

  const onClickedFiliterItem = (filterSkill: string) => {
    const newSelectedSkills = new Set<string>(selectedSkills);
    if (filterSkill === "All") {
      if (selectedSkills.has(filterSkill)) {
        // Don't allow All to be unselected
        return;
      } else {
        newSelectedSkills.clear();
        newSelectedSkills.add(filterSkill);
      }
    } else {
      if (selectedSkills.has(filterSkill)) {
        newSelectedSkills.delete(filterSkill);
        if(newSelectedSkills.size === 0) {
          newSelectedSkills.add("All");
        }
      } else {
        newSelectedSkills.add(filterSkill);
        newSelectedSkills.delete("All");
      }
    }
    setSelectedSkills(newSelectedSkills);
  }

  return (
    <div className={styles.filter}>
      {[...filterSkills].map((filterSkill) => {
        const skill = skills.find((skill) => skill.name === filterSkill);
        return (
          <div
            className={styles.filter_item}
            style={selectedSkills.has(filterSkill) ? {
              backgroundColor: skill?.color,
              color: "white",
              border: `1px solid ${skill?.color}`,
            } : {
              backgroundColor: "white",
              color: skill?.color,
              border: `1px solid ${skill?.color}`,
            }}
            onClick={() => onClickedFiliterItem(filterSkill)}
          >
            {filterSkill}
          </div>
        )
      })}
    </div>
  )
}
