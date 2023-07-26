import React from 'react'
import Project from './Project'
import styles from './project.module.scss'

export default function ProjectSection() {
  return (
    <div className="section">
      <h2>Project</h2>
      <hr />
      <div className={styles.projects}>
        <Project projectName="Reversi" projectLink="https://github.com/momoiropuchoman/Reversi" projectImage="./reversi.png" projectLangs={["Python", "TKinter"]}/>
        <Project projectName="RPG" projectLink="hhttps://github.com/momoiropuchoman/BeeTrade" projectImage="./rpg.png" projectLangs={["Java", "Swing"]}/>
        <Project projectName="English Learning" projectLink="https://github.com/momoiropuchoman/https://github.com/seihello/EverydayEnglish-on-Browser" projectImage="././everydayenglish-browser.png" projectLangs={["HTML/CSS", "JavaScript"]}/>
        <Project projectName="English Learning(iOS)" projectLink="https://github.com/seihello/EverydayEnglish" projectImage="./everydayenglish.png" projectLangs={["Python", "Kivy"]}/>
        <Project projectName="Super Mario Style Game" projectLink="https://github.com/seihello/ScrollGame" projectImage="./scrollgame.png" projectLangs={["Java", "Swing"]}/>
        <Project projectName="Strategy Game" projectLink="https://github.com/seihello/AnimalMaster" projectImage="./animalmaster.png" projectLangs={["Python", "TKinter"]}/>
        <Project projectName="Comment Bot" projectLink="https://github.com/seihello/LIVIT-Bot" projectImage="./chatbot.png" projectLangs={["Python", "Selenium"]}/>
        <Project projectName="Weather App" projectLink="https://github.com/seihello/WeatherApp" projectImage="./weatherapp.png" projectLangs={["HTML/CSS", "JavaScript"]}/>
      </div>
    </div>
  )
}
