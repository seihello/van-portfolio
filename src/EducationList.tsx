import React from 'react'

export default function EducationList() {
  return (
    <div className="section">
      <h2>Education</h2>
      <hr />
      <div className="experience-first">
        <div className="org-name">
          <a className="link" href="https://ciccc.ca/" target="_blank"><h3>Cornerstone Collage</h3></a>
        </div>
        <h3>Oct. 2022 - Present</h3>
      </div>
      <p className="role">Diploma of Web Development</p>
      <br />
      <div className="experience-first">
        <div className="org-name">
          <a className="link" href="https://www.kyoto-su.ac.jp/" target="_blank"><h3>Kyoto Sangyo University</h3></a>
        </div>
        <h3>Apr. 2013 - Mar. 2017</h3>
      </div>
      <p className="role">Bachelor of Computer Science and Engineering</p>
    </div>
  )
}
