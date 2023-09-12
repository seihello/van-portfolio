import styles from './home.module.scss'
import commonStyles from '../common.module.scss'

export default function HomePage() {
  return (
    <>
      <div className={commonStyles.section}>
        <div className={styles.profile}>
          <img className={styles.profile_image} src="/img/profile.jpg" />
          <div className={styles.profile_text}>
            Hi, I'm Seisuke, a full stack developer. I have dedicated over 5 years to software development after graduating with a degree in Computer Science and Engineering. My expertise widely ranges from large-scale embedded applications to web development. Along the way, I started to realize that I have a passion for creating efficient, maintainable, and user-friendly systems. I'm confident that this passion and sense of responsibility will make me the person you are looking for. I will continue my life journey while learning and growing.
          </div>
        </div>
      </div>
    </>
  )
}
