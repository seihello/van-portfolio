import Project from './Project'
import styles from './project.module.scss'
import commonStyles from '../../common.module.scss'

export default function ProjectSection() {
  return (
    <div className={commonStyles.section}>
      <h2>Project</h2>
      <hr />
      <div className={styles.projects}>
        <Project projectName="Reversi" projectLink="https://github.com/momoiropuchoman/Reversi" projectImage="/img/reversi.png" projectLangs={["Python", "TKinter"]}/>
        <Project projectName="RPG" projectLink="hhttps://github.com/momoiropuchoman/BeeTrade" projectImage="/img/rpg.png" projectLangs={["Java", "Swing"]}/>
        <Project projectName="English Learning" projectLink="https://github.com/momoiropuchoman/https://github.com/seihello/EverydayEnglish-on-Browser" projectImage="/img/everydayenglish-browser.png" projectLangs={["HTML/CSS", "JavaScript"]}/>
        <Project projectName="English Learning(iOS)" projectLink="https://github.com/seihello/EverydayEnglish" projectImage="/img/everydayenglish.png" projectLangs={["Python", "Kivy"]}/>
        <Project projectName="Super Mario Style Game" projectLink="https://github.com/seihello/ScrollGame" projectImage="/img/scrollgame.png" projectLangs={["Java", "Swing"]}/>
        <Project projectName="Strategy Game" projectLink="https://github.com/seihello/AnimalMaster" projectImage="/img/animalmaster.png" projectLangs={["Python", "TKinter"]}/>
        <Project projectName="Comment Bot" projectLink="https://github.com/seihello/LIVIT-Bot" projectImage="/img/chatbot.png" projectLangs={["Python", "Selenium"]}/>
        <Project projectName="Weather App" projectLink="https://github.com/seihello/WeatherApp" projectImage="/img/weatherapp.png" projectLangs={["HTML/CSS", "JavaScript"]}/>
      </div>
    </div>
  )
}
