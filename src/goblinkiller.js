import React from 'react'
import gameplay from './assets/gameplay.png'
import instructions from './assets/instructions.png'
import gkopen from './assets/openinggk.png'


function GoblinKiller(props) {
  return (
    <div className="goblinBody">
      <div className="goblinTitle">
        <h1 className="goblinWelome">Goblin Killer</h1>
      </div>
      <div className="gkDesc">
        <p>Goblin Killer is a rounds based game made using html, css, css canvas, and javascript built over one week.</p>
      </div>
      <div className="gkPicList">
        <div className="gkwelcome">
          <img className="gkpics" src={gkopen} width="30%" alt="Goblin Killer Welcome Page"/>
        </div>  
        <div className='gkgameplay'>
          <img className="gkpics" src={gameplay} width="30%" alt="Goblin Killer Gameplay"/>
        </div>  
        <div className='gkinstructions'> 
          <img className="gkpics" src={instructions} width="30%" alt="Goblin Killer Instructions"/>
        </div> 
      </div>
      
      <div className="gkLinks">
        <a href="https://github.com/vincehint/GoblinKiller">Check Out The Repo</a>
      </div>
      <div className="gkLinks">
        <a href="https://vincehint.github.io/GoblinKiller/">Check Out The App</a>
      </div>
    </div>

  )
}

export default GoblinKiller