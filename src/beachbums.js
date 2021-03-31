import React from 'react'
import beachwelcome from './assets/beachwelcome.png'
import newsfeed from './assets/newsfeed.png'
import homepage from './assets/homepage.png'


function BeachBums(props) {
  return (
    <div className="beachBumsBody">
      <div className="beachBumsTitle">
        <h1 className="beachBumsWelome">Beach Bums Social Media App</h1>
      </div>
      <div className="bbDesc">
        <p>Beach Bums was a group project done over one week with four people. My role in the project was both project manager and ux/ui design and styling. Beach Bums utilizes HTML, CSS, Bootstrap, Javascript, React, and Mongoose.</p>
      </div>
      <div className="bbPicList">
        <div className="bbwelcome">
          <img className="bbpics" src={beachwelcome} width="30%" alt="Beach Bums Welcome Page"/>
        </div>  
        <div className='bbnewsfeed'>
          <img className="bbpics" src={newsfeed} width="30%" alt="Beach Bums News Feed"/>
        </div>  
        <div className='bbhomepage'> 
          <img className="bbpics" src={homepage} width="30%" alt="Beach Bums Home Page"/>
        </div> 
      </div>
      
      <div className="bbLinks">
        <a href="https://github.com/vincehint/BeachBums" target="_blank">Check Out The Repo</a>
      </div>
      <div className="bbLinks">
        <a href="https://beach-bums.herokuapp.com/" target="_blank">Check Out The App</a>
      </div>
    </div>

  )
}

export default BeachBums