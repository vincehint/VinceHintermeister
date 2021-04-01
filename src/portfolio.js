import React from 'react'
import OpenThumbnail from './assets/Open.png'
import WelcomeThumbnail from './assets/welcomehorror.png'
import beachwelcome from './assets/beachwelcome.png'
import Thumbnail from './thumbnail'


function Portfolio(props) {
  let hlrepo="https://github.com/vincehint/horror-list"
  let gkrepo="https://github.com/vincehint/GoblinKiller"
  let bbrepo="https://github.com/vincehint/BeachBums"
  return (
    <div className="apps">
      <h1 className="appsMade">Apps I've Made</h1>
        <div className="eachApp" id="gk">
          <Thumbnail
            link="/goblinkiller"
            title="Goblin Killer"
            image={OpenThumbnail}
            category="Game in Canvas"
          />
        <a className="portfolioLinks" href={gkrepo} target="_blank">See The Repo</a>
        </div>
      <div className="eachApp" id="hl">
        <Thumbnail
          link="/horrorlist"
          image={WelcomeThumbnail}
          title="Horror List"
          category="Horror Themed Movie Website"
        />
        <a className="portfolioLinks" href={hlrepo}>See The Repo</a>
      </div>
      <div className="eachApp" id="bb">
        <Thumbnail
          link="/beachbums"
          image={beachwelcome}
          title="Beach Bums"
          category="Social Media App"
        />
        <a className="portfolioLinks" href={bbrepo} target="_blank">See The Repo</a>
      </div>
    </div>
  )
}

export default Portfolio