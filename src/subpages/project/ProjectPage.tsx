import Project from './Project'
import styles from './project.module.scss'
import commonStyles from '../../common.module.scss'
import projects from '../../data/projects'

export default function ProjectPage() {

  return (
    <>
      <div className={commonStyles.section}>
        <h2>Project</h2>
        <hr />
        <div className={styles.projects}>
          {projects.map((project) => {
            return <Project project={project} />
          })}
        </div>
      </div>
    </>
  )
}

