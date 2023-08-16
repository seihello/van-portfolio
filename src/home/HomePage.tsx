import styles from './home.module.scss'
import commonStyles from '../common.module.scss'

export default function HomePage() {
  return (
    <>
      <div className={commonStyles.section}>
        <div className={styles.profile}>
          <img className={styles.profile_image} src="/img/profile.jpg" />
          <div className={styles.profile_text}>
            Hello, I'm Seisuke. I have over 5 years of experience in the software development area, and contributed to enhancement of the productivity in the semiconductor industry. I’ve had the opportunity to add a range of capabilities to my repertoire, including coding in C++, system-designing, and testing. Those are just a few to name.<br />
            Along the way, I realized that I have a passion for creating efficient, maintainable, and user-friendly systems. My strengths are this passion and being hard-working. I aim to carry my past experiences forward, while continuing to grow.
          </div>
        </div>
      </div>
    </>
  )
}
