import React from 'react'
import welcomehl from './assets/welcomehorror.png'
import errorpage from './assets/404.png'
import horrorList from './assets/horrorList.png'


function HorrorList(props) {
  return (
    <div className="horrorBody">
      <div className="horrorTitle">
        <h1 className="horrorWelome">Horror List</h1>
      </div>
      <div className="horrorDesc">
        <p>Horror List is a crud application that used the TMDB database as an api, restful routing,  HTML, CSS, Javascript, Node, Express, and PostgreSQL. It was built in four days.</p>
      </div>
      <div className="horrorPicList">
        <div className="horrorwelcome">
          <img className="horrorpics" src={welcomehl} width="30%" alt="Horror List Welcome Page"/>
        </div>  
        <div className='horrorgameplay'>
          <img className="horrorpics" src={horrorList} width="30%" alt="Users Horror List Page"/>
        </div>  
        <div className='horrorinstructions'> 
          <img className="horrorpics" src={errorpage} width="30%" alt="Horror List 404 Page"/>
        </div> 
      </div>
      
      <div className="horrorLinks">
        <a href="https://github.com/vincehint/horror-list" target="_blank">Check Out The Repo</a>
      </div>
      <div className="horrorLinks">
        <a href="https://horror-list.herokuapp.com/" target="_blank">Check Out The App</a>
      </div>
    </div>

  )
}

export default HorrorList