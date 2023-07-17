import { useState } from 'react'
import classes from './App.module.scss'
import AboutMe from './AboutMe'
import ProjectList from './ProjectList'
import SkillList from './SkillList'
import WorkExperienceList from './WorkExperienceList'
import EducationList from './EducationList'
import Resume from './Resume'
import ContactList from './ContactList'

function App() {

  return (    
    <body>
      <AboutMe />
      <ProjectList />
      <SkillList />
      <WorkExperienceList />
      <EducationList />
      <Resume />
      <ContactList />
    </body>
  )
}

export default App
