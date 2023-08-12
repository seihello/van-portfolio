import Header from './header/Header'
import Footer from './footer/Footer'
import HomePage from './home/HomePage'
import ProjectPage from './subpages/project/ProjectPage'
import SkillPage from './subpages/skill/SkillPage'
import ExperiencePage from './subpages/experience/ExperiencePage'
import ContactPage from './subpages/contact/ContactPage'
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
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/skill" element={<SkillPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
      </body>
      <Footer />
    </>
  )
}

export default App
