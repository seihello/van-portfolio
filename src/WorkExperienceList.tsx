import React from 'react'

export default function WorkExperienceList() {
  return (
    <div className="section">
      <h2>Work Experience</h2>
      <hr />
      <div className="experience-first">
        <div className="org-name">
          <a className="link" href="https://www.muratec.jp/" target="_blank"><h3>Muratec Machinery</h3></a>
        </div>
        <h3>Apr. 2017 - Aug. 2022</h3>
      </div>
      <div className="work-item">
        <div className="work-description">
          <p className="role">Software Engineer</p>
          <ul>
            <li>Developed a large-scale software for controlling machines which work in semiconductor factories</li>
            <li>Designed the architecture, created C++ codes, conducted testing</li>
            <li>Managed external development teams and reviewed their deliverables</li>
            <li>Communicated with our clients and local workers to arrange schedules and report problems</li>
          </ul>
        </div>
        <img className="work-image" src="./semicon.jpg" />
      </div>
    </div>
  )
}
