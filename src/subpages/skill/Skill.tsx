import styles from './skill.module.scss'
import skills from '../../setting/skills'

type SkillProps = {
  name: string;
}

export default function Skill({ name }: SkillProps) {

  const skill = skills.find((skill) => skill.name === name);

  return (
    <div className={styles.skill}>
      <img src={`/img/skill_logo/${skill?.icon}.svg`} />
      <div className={styles.name}>{name}</div>
    </div>
  )
}
