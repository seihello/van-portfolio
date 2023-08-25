import commonStyles from '../../common.module.scss'
import styles from './skill.module.scss'
import Skill, { SkillProps } from './Skill'

type Props = {
  categoryTitle: string;
  skillList: SkillProps[];
}

export default function SkillCategory(props: Props) {
  return (
    <div className={commonStyles.section}>
      <h2>{props.categoryTitle}</h2>
      <hr />
      <div className={styles.skills}>
        {props.skillList.map((skill) => {
          return <Skill skillName={skill.skillName} proficiency={skill.proficiency} />
        })}
      </div>
    </div>
  )
}
