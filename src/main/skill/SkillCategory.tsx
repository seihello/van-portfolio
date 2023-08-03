import styles from './skill.module.scss'
import Skill, { SkillProps } from './Skill'

type Props = {
  categoryTitle: string;
  skillList: SkillProps[];
}

export default function SkillCategory(props: Props) {
  return (
    <>
      <h3 className={styles.skill_category}>{props.categoryTitle}</h3>
      <div className={styles.skills}>
        {props.skillList.map((skill) => {
          return <Skill skillName={skill.skillName} proficiency={skill.proficiency}/>
        })}
      </div>
    </>
  )
}
