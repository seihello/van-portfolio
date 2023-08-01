import styles from './resume.module.scss'
import commonStyles from '../../common.module.scss'

export default function ResumeSection() {
  return (
    <div className={commonStyles.section}>
      <h2>Résumé</h2>
      <hr />
      <div className={commonStyles.line}>
        <img className={styles.pdf_icon} src="/img/pdf.png" />
        <a className="resume" href="/doc/Seisuke_Yamada_Resume.pdf"><h3>Résumé (English)</h3></a>
      </div>
    </div>
  )
}
