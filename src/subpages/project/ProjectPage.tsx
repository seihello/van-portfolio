import { useContext } from 'react'
import styles from './project.module.scss'
import commonStyles from '../../common.module.scss'
import { ProjectContext } from '../../context/projectContext'
import { Project } from '../../context/projectContext'
import ProjectComponent from './ProjectComponent'
import ProjectFilter from './ProjectFilter'

export default function ProjectPage() {

  const { projects, selectedSkills } = useContext(ProjectContext);
  let selectedProjects: Project[] = [];
  if (selectedSkills.has("All")) {
    selectedProjects = projects;
  } else {
    selectedProjects = projects.filter((project) => {
      for (const selectedSkill of selectedSkills) {
        if (project.skills.includes(selectedSkill)) {
          return true;
        }
      }
      return false;
    });
  }

  const marginBottom = Math.max(0, 320 * (3 - selectedProjects.length));

  return (
    <>
      <div className={commonStyles.section}>
        <h2>Project</h2>
        <hr />
        <ProjectFilter />
        <div className={styles.projects} style={{marginBottom}}>
          {selectedProjects?.map((project) => {
            return <ProjectComponent project={project} />
          })}
        </div>
      </div>
    </>
  );
}

