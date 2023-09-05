import Project from './Project'
import styles from './project.module.scss'
import commonStyles from '../../common.module.scss'
import { useState, useEffect } from 'react';

export default function ProjectPage() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const jsonFile = "/data/projects.json";

    fetch(jsonFile)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

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

