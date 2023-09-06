import styles from './skill.module.scss'
import Skill from './Skill'

type Props = {
  categoryTitle: string;
  skillList: string[];
}

export default function SkillCategory({ categoryTitle, skillList }: Props) {
  return (
    <div className={styles.category}>
      <h3>{categoryTitle}</h3>
      <div className={styles.skills}>
        {skillList.map((skill) => {
          return <Skill name={skill} />
        })}
      </div>
    </div>
  )
}
