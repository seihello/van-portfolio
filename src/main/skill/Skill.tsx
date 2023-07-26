import React from 'react'
import styles from './skill.module.scss'

export type SkillProps = {
  skillName: string;
  proficiency: number;
};

export default function Skill(props: SkillProps) {
  return (
    <div className={styles.skill}>
      <p className={styles.skill_name}>{props.skillName}</p>
      <div className={styles.skill_rate_box}>
        <div className={`${styles.skill_rate} ${styles[`rate${props.proficiency}`]}`}>
        </div>
      </div>
    </div>
  )
}
