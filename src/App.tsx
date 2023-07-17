import { useState } from 'react'
import classes from './App.module.scss'
import AboutMe from './AboutMe'
import ProjectList from './ProjectList'
import SkillList from './SkillList'
import WorkExperienceList from './WorkExperienceList'
import EducationList from './EducationList'
import Resume from './Resume'

function App() {

  return (    
    <body>
      <AboutMe />
      <ProjectList />
      <SkillList />
      <WorkExperienceList />
      <EducationList />
      <Resume />
        

        

        

        <div className="section">
            <h2>Contact</h2>
            <hr/>
            <div className="contact">
                <a className="contact-link" href="mailto:seisuke.ym@gmail.com">
                    <button className="contact-item">
                        <img className="contact-image" src="./mail.svg"></img>
                        <p>Mail</p>
                    </button>
                </a>
                <a className="contact-link" href="https://github.com/seihello">
                    <button className="contact-item">
                        <img className="contact-image" src="./github.svg"></img>
                        <p>GitHub</p>
                    </button>
                </a>
                <a className="contact-link" href="https://www.linkedin.com/in/seisuke-yamada-a02140257/">
                    <button className="contact-item">
                        <img className="contact-image" src="./linkedin.svg"></img>
                        <p>LinkedIn</p>
                    </button>
                </a>
                <a className="contact-link" href="https://leetcode.com/momoiropuchoman/">
                    <button className="contact-item">
                        <img className="contact-image" src="./leetcode.svg"></img>
                        <p>LeetCode</p>
                    </button>
                </a>
                <a className="contact-link" href="https://www.instagram.com/y_seisuke/">
                    <button className="contact-item">
                        <img className="contact-image" src="./instagram.svg"></img>
                        <p>Instagram</p>
                    </button>
                </a>
            </div>
        </div>
        
    </body>
  )
}

export default App
