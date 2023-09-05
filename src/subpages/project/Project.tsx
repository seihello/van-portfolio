import styles from './project.module.scss'

type Project = {
  name: string;
  description: string;
  demoLink: string;
  gitLink: string;
  image: string;
  skills: string[];
}
type Props = {
  project: Project;
};

export default function Project({ project }: Props) {
  return (
    <div className={styles.project}>
      <img src={`img/${project.image}`} />
      <div className={styles.info}>
        <div className={styles.title}>
          <h3 className={styles.name}>{project.name}</h3>
          {project.gitLink && (
            <a href={project.gitLink} target="_blank"><i className={`${styles.git_link} fa-brands fa-github`}></i></a>
          )}
          {project.demoLink && (
            <a href={project.demoLink} target="_blank"><i className={`${styles.demo_link} fa-solid fa-globe`}></i></a>
          )}
        </div>
        <div className={styles.description}>
          {project.description}
        </div>
        <div className={styles.skills}>
          {project.skills.map((skill) => {
            return <div className={styles.skill}>{skill}</div>
          })}
        </div>
      </div>
    </div>
  )
}
