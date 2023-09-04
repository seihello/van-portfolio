import styles from './project.module.scss'

type Project = {
  name: string;
  description: string;
  domoLink: string;
  gitLink: string;
  image: string;
  skills: string[];
}
type Props = {
  project: Project;
};

export default function Project({project}: Props) {
  return (
    <div className={styles.project}>
      <a className={styles.project_link} href={project.gitLink}>
        <img className={styles.project_image} src={`img/${project.image}`}></img>
        <div className={styles.project_filter}>
          <div className={styles.project_name}>{project.name}</div>
          <div className={styles.project_langs}>
            {project.skills.map((skill) => {
              return <div className={styles.project_lang}>{skill}</div>
            })}
          </div>
        </div>
      </a>
    </div>
  )
}
