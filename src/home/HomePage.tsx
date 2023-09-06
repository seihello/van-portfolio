import styles from './home.module.scss'
import commonStyles from '../common.module.scss'

export default function HomePage() {
  return (
    <>
      <div className={commonStyles.section}>
        <div className={styles.profile}>
          <img className={styles.profile_image} src="/img/profile.jpg" />
          <div className={styles.profile_text}>
            After graduating with a degree in Computer Science, I have dedicated over 5 years to software development. My expertise spans a wide range, from working on large-scale embedded applications to web development. Along the way, I realized that I have a passion for creating efficient, maintainable, and user-friendly systems. My strengths are this passion and strong responsibility. I aim to carry my past experiences forward, while continuing to grow.
          </div>
        </div>
      </div>
    </>
  )
}
