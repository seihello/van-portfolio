import Contact from './Contact'
import styles from './contact.module.scss'
import commonStyles from '../../common.module.scss'

export default function ContactSection() {
  return (
    <div className={commonStyles.section}>
      <h2>Contact</h2>
      <hr />
      <div className={styles.contact}>
        <Contact name="Mail" link="mailto:seisuke.ym@gmail.com" iconClassName='fas fa-envelope' />
        <Contact name="GitHub" link="https://github.com/seihello" iconClassName='fab fa-github' />
        <Contact name="LinkedIn" link="https://www.linkedin.com/in/seisuke-yamada-a02140257/" iconClassName='fab fa-linkedin' />
        <Contact name="Instagram" link="https://www.instagram.com/y_seisuke/" iconClassName='fab fa-instagram-square' />
      </div>
    </div>
  )
}
