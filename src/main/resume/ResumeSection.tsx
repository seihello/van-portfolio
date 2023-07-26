import React from 'react'
import styles from './resume.module.scss'

export default function ResumeSection() {
  return (
    <div className="section">
      <h2>Résumé</h2>
      <hr />
      <div className="line">
        <img className={styles.pdf_icon} src="./pdf.png" />
        <a className="resume" href="./resume/Seisuke_Yamada_Resume.pdf"><h3>Résumé (English)</h3></a>
      </div>
    </div>
  )
}
