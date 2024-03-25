import styles from './home.module.scss'
import commonStyles from '../common.module.scss'

export default function HomePage() {
  return (
    <>
      <div className={commonStyles.section}>
        <div className={styles.profile}>
          <img className={styles.profile_image} src="/img/profile.jpg" />
          <div className={styles.profile_text}>
            Hi, I'm Seisuke, a software engineer/full-stack web developer with a Bachelor's degree in Computer Science and 5+ years of experience in software development. I have been dedicated to team goals with a passion for building efficient, maintainable, and user-friendly systems. This experience has provided me with the opportunity to acquire a wide range of skills and experience, spanning from large-scale embedded applications to web development.

            Throughout my ten-year journey in the field of software engineering, I have overcome numerous challenges in both technical and managerial capacities, enhancing my problem-solving skills along the way. With the experience I bring, coupled with my refined problem-solving abilities and steadfast perseverance when encountering difficulties, I'm eager to contribute significantly to your team!
          </div>
        </div>
      </div>
    </>
  )
}
