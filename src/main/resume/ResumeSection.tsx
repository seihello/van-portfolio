import React from 'react'

export default function ResumeSection() {
  return (
    <div className="section">
      <h2>Résumé</h2>
      <hr />
      <div className="line">
        <img id="pdf-icon" src="./pdf.png" />
        <a className="resume" href="./resume/Seisuke_Yamada_Resume.pdf"><h3>Résumé (English)</h3></a>
      </div>
    </div>
  )
}
