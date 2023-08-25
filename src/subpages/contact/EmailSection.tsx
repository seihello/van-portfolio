import commonStyles from '../../common.module.scss'
import styles from './contact.module.scss'

export default function EmailSection() {
  return (
    <div className={commonStyles.section}>
      <h2>Email</h2>
      <hr />
      <div>
        <i className="fas fa-envelope"></i>
        <span className={styles.email}>seisuke.ym@gmail.com</span>
      </div>
    </div>
  )
}
