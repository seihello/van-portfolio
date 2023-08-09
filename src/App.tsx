import Header from './header/Header'
import Footer from './footer/Footer'
import AboutMeSection from './main/about-me/AboutMeSection'
import ProjectSection from './main/project/ProjectSection'
import SkillSection from './main/skill/SkillSection'
import ExperienceSection from './main/experience/ExperienceSection'
import ContactSection from './main/contact/ContactSection'
import Menu from './menu/Menu'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <body>
        <Menu />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AboutMeSection />} />
            <Route path="/projects" element={<ProjectSection />} />
            <Route path="/skill" element={<SkillSection />} />
            <Route path="/experience" element={<ExperienceSection />} />
            <Route path="/contact" element={<ContactSection />} />
          </Routes>
        </BrowserRouter>
      </body>
      <Footer />
    </>
  )
}

export default App
