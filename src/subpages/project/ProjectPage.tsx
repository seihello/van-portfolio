import ProjectComponent from './ProjectComponent'
import styles from './project.module.scss'
import commonStyles from '../../common.module.scss'
import ProjectFilter from './ProjectFilter'
import { ProjectContext } from '../../context/projectContext'
import { useContext } from 'react'

export default function ProjectPage() {

  const projects = useContext(ProjectContext)?.projects;

  return (
    <>
      <div className={commonStyles.section}>
        <h2>Project</h2>
        <hr />
        <ProjectFilter />
        <div className={styles.projects}>
          {projects?.map((project) => {
            return <ProjectComponent project={project} />
          })}
        </div>
      </div>
    </>
  )
}

