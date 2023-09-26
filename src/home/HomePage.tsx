import styles from './home.module.scss'
import commonStyles from '../common.module.scss'

export default function HomePage() {
  return (
    <>
      <div className={commonStyles.section}>
        <div className={styles.profile}>
          <img className={styles.profile_image} src="/img/profile.jpg" />
          <div className={styles.profile_text}>
            Hi, I'm Seisuke, a full stack developer with a Bachelor's degree in Computer Science and 5+ years of experience in software development. My expertise widely ranges from large-scale embedded applications to web development. I consistently engage in coding activities and learning new technology on a daily basis while working on a group project. Considered responsible and detail-oriented, I contribute to team goals with a passion for building efficient, maintainable, and user-friendly systems. I will continue my life journey while learning and growing.
          </div>
        </div>
      </div>
    </>
  )
}
