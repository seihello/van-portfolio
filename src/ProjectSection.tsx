import React from 'react'

export default function ProjectSection() {
  return (
    <div className="section">
      <h2>Project</h2>
      <hr />
      <div className="projects">
        <div className="project">
          <a className="project-link" href="https://github.com/momoiropuchoman/Reversi">
            <img className="project-image" src="./reversi.png"></img>
            <div className="project-filter">
              <div className="project-name">Reversi</div>
              <div className="project-langs">
                <div className="project-lang">Python</div>
                <div className="project-lang">TKinter</div>
              </div>
            </div>
          </a>
        </div>
        <div className="project">
          <a href="https://github.com/momoiropuchoman/BeeTrade">
            <img className="project-image" src="./rpg.png"></img>
            <div className="project-filter">
              <div className="project-name">RPG</div>
              <div className="project-langs">
                <div className="project-lang">Java</div>
                <div className="project-lang">Swing</div>
              </div>
            </div>
          </a>
        </div>
        <div className="project">
          <a href="https://github.com/seihello/EverydayEnglish-on-Browser">
            <img className="project-image" src="./everydayenglish-browser.png"></img>
            <div className="project-filter">
              <div className="project-name">English Learning</div>
              <div className="project-langs">
                <div className="project-lang">HTML/CSS</div>
                <div className="project-lang">JavaScript</div>
              </div>
            </div>
          </a>
        </div>
        <div className="project">
          <a href="https://github.com/seihello/EverydayEnglish">
            <img className="project-image" src="./everydayenglish.png"></img>
            <div className="project-filter">
              <div className="project-name">English Learning(iOS)</div>
              <div className="project-langs">
                <div className="project-lang">Python</div>
                <div className="project-lang">Kivy</div>
              </div>
            </div>
          </a>
        </div>
        <div className="project">
          <a href="https://github.com/seihello/ScrollGame">
            <img className="project-image" src="./scrollgame.png"></img>
            <div className="project-filter">
              <div className="project-name">Super Mario Style Game</div>
              <div className="project-langs">
                <div className="project-lang">Java</div>
                <div className="project-lang">Swing</div>
              </div>
            </div>
          </a>
        </div>
        <div className="project">
          <a href="https://github.com/seihello/AnimalMaster">
            <img className="project-image" src="./animalmaster.png"></img>
            <div className="project-filter">
              <div className="project-name">Strategy Game</div>
              <div className="project-langs">
                <div className="project-lang">Python</div>
                <div className="project-lang">TKinter</div>
              </div>
            </div>
          </a>
        </div>
        <div className="project">
          <a href="https://github.com/seihello/LIVIT-Bot">
            <img className="project-image" src="./chatbot.png"></img>
            <div className="project-filter">
              <div className="project-name">Comment Bot</div>
              <div className="project-langs">
                <div className="project-lang">Python</div>
                <div className="project-lang">Selenium</div>
              </div>
            </div>
          </a>
        </div>
        <div className="project">
          <a href="https://github.com/seihello/WeatherApp">
            <img className="project-image" src="./weatherapp.png"></img>
            <div className="project-filter">
              <div className="project-name">Weather App</div>
              <div className="project-langs">
                <div className="project-lang">HTML/CSS</div>
                <div className="project-lang">JavaScript</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
