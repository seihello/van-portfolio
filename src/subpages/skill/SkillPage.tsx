import commonStyles from '../../common.module.scss'
import styles from './skill.module.scss'
import SkillCategory from './SkillCategory'
import skills from '../../data/skills'

export default function SkillPage() {
  console.log(skills);
  return (
    <div className={commonStyles.section}>
      <h2>Skill</h2>
      <hr />
      <div className={styles.categories}>
        {skills.map((skillSet, index) =>
          <SkillCategory key={index} categoryTitle={skillSet.category} skillList={skillSet.values} />
        )}
      </div>
    </div>
  )
}
