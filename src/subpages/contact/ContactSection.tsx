import Contact from './Contact'
import styles from './contact.module.scss'
import commonStyles from '../../common.module.scss'

export default function ContactSection() {
  return (
    <>
      <div className={commonStyles.section}>
        <h2>Social</h2>
        <hr />
        <div className={styles.contact}>
          <Contact name="GitHub" link="https://github.com/seihello" imageName="/img/github.png" />
          <Contact name="LinkedIn" link="https://www.linkedin.com/in/seisuke-yamada-a02140257/" imageName="/img/linkedin.png" />
          <Contact name="Instagram" link="https://www.instagram.com/y_seisuke/" imageName="/img/instagram.png" />
        </div>
      </div>
    </>
  )
}
