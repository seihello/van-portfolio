import React from 'react'
import styles from './experience.module.scss'

type Props = {
  companyName: string;
  companyLink: string;
  duration: string;
  position: string;
  description: string[];
  image?: string;
}

export default function WorkExperience(props: Props) {
  return (
    <div className={styles.work_wrapper}>
      <div className={styles.experience_first}>
        <div className={styles.org_name}>
          <a className={styles.link} href={props.companyLink} target="_blank">
            <h3>{props.companyName}</h3>
          </a>
        </div>
        <h3>{props.duration}</h3>
      </div>
      <div className={styles.work_item}>
        <div className={styles.work_description}>
          <p className={styles.role}>{props.position}</p>
          <ul>
            {props.description.map((description) => {
              return <li>{description}</li>
            })}
          </ul>
        </div>
        <div className={styles.work_image}>
          <img src={props.image} />
        </div>
      </div>
    </div>
  )
}
