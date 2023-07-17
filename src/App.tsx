import { useState } from 'react'
import classes from './App.module.scss'
import AboutMe from './AboutMe'
import ProjectList from './ProjectList'
import SkillList from './SkillList'

function App() {

  return (    
    <body>
      <AboutMe />
      <ProjectList />
      <SkillList />

        

        <div className="section">
            <h2>Work Experience</h2>
            <hr/>
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

        <div className="section">
            <h2>Education</h2>
            <hr/>
            <div className="experience-first">
                <div className="org-name">
                    <a className="link" href="https://ciccc.ca/" target="_blank"><h3>Cornerstone Collage</h3></a>
                </div>
                <h3>Oct. 2022 - Present</h3>
            </div>
            <p className="role">Diploma of Web Development</p>
            <br/>
            <div className="experience-first">
                <div className="org-name">
                    <a className="link" href="https://www.kyoto-su.ac.jp/" target="_blank"><h3>Kyoto Sangyo University</h3></a>
                </div>
                <h3>Apr. 2013 - Mar. 2017</h3>
            </div>
            <p className="role">Bachelor of Computer Science and Engineering</p>
        </div>

        <div className="section">
            <h2>Résumé</h2>
            <hr/>
            <div className="line">
                <img id="pdf-icon" src="./pdf.png" />
                <a className="resume" href="./resume/Seisuke_Yamada_Resume.pdf"><h3>Résumé (English)</h3></a>
            </div>
        </div>

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
