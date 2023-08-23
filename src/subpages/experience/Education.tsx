import styles from './experience.module.scss'

type Props = {
  orgName: string;
  orgLink: string;
  duration: string;
  level: string;
}

export default function Education(props: Props) {
  return (
    <div className={styles.work_wrapper}>
      <div className={styles.experience_first}>
        <div className={styles.org_name}>
          <a className={styles.link} href={props.orgLink} target="_blank"><h3>{props.orgName}</h3></a>
        </div>
        <h3>{props.duration}</h3>
      </div>
      <p className={styles.role}>{props.level}</p>
    </div>
  )
}