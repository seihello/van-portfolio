import Project from './Project'
import styles from './project.module.scss'
import commonStyles from '../../common.module.scss'
import usePageTransition from '../../hooks/usePageTransition'

export default function ProjectPage() {

  usePageTransition()

  return (
    <>
      <div className={commonStyles.section}>
        <h2>Project</h2>
        <hr />
        <div className={styles.projects}>
          {createProjectComponent("Reversi", "https://github.com/momoiropuchoman/Reversi", "reversi.png", ["Python", "TKinter"])}
          {createProjectComponent("RPG", "https://github.com/momoiropuchoman/BeeTrade", "rpg.png", ["Java", "Swing"])}
          {createProjectComponent("English Learning", "https://github.com/seihello/EverydayEnglish-on-Browser", "everydayenglish-browser.png", ["HTML/CSS", "JavaScript"])}
          {createProjectComponent("English Learning(iOS)", "https://github.com/seihello/EverydayEnglish", "everydayenglish.png", ["Python", "Kivy"])}
          {createProjectComponent("Strategy Game", "https://github.com/seihello/AnimalMaster", "animalmaster.png", ["Python", "TKinter"])}
          {createProjectComponent("Comment Bot", "https://github.com/momoiropuchoman/LIVIT-Bot", "chatbot.png", ["Python", "Selenium"])}
          {createProjectComponent("Weather App", "https://github.com/momoiropuchoman/WeatherApp", "weatherapp.png", ["HTML/CSS", "JavaScript"])}
          {createProjectComponent("CSS Gallery", "https://github.com/seihello/css-gallery", "cssgallery.png", ["HTML/CSS", "JavaScript"])}
        </div>
      </div>
    </>
  )
}

function createProjectComponent(name: string, link: string, image: string, langs: string[]) {
  return <Project projectName={`${name}`} projectLink={`${link}`} projectImage={`/img/${image}`} projectLangs={langs} />
}
