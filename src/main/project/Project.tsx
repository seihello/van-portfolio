import styles from './project.module.scss'

type Props = {
  projectName: string;
  projectLink: string;
  projectImage: string;
  projectLangs: string[];
};

export default function Project(props: Props) {
  return (
    <div className={styles.project}>
      <a className={styles.project_link} href={props.projectLink}>
        <img className={styles.project_image} src={props.projectImage}></img>
        <div className={styles.project_filter}>
          <div className={styles.project_name}>{props.projectName}</div>
          <div className={styles.project_langs}>
            {props.projectLangs.map((projectLang) => {
              return <div className={styles.project_lang}>{projectLang}</div>
            })}
          </div>
        </div>
      </a>
    </div>
  )
}
