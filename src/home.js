import React from 'react'
import vince from './assets/vincepic.jpg'



function Home(props) {
  return (
    <div>
      <div className="bio">
        <h1>Software Engineer</h1>
        <div>
            <img className="vincePic" src={vince} width="30%" alt="Vinces Picture"/>
            <p class='bio'>Vince Hintermeister is a web developer hailing from a small town in Iowa. He learned his craft through General Assembly's Software Engineering Immersive, and true grit. His hobbies include woodburning, acrylic painting, jewelry making and design, and all things game related. Vince is a transman which gives him a unique perspective of the world, and as an artist, a creative one. Vince aims to bring beauty and functionality as well as accessibility to his projects. Vince is a lifelong learner. </p>
            
        </div>
      </div>
      <div className="skills">
        <div>
          <h1 className="mySkills">Skills</h1>
        </div>
        <div className="skillsList">
          <div className="top">
            <h3 className="skill" id="html">Html</h3>
            <h3 className="skill" id="css">CSS</h3>
            <h3 className="skill" id="js">JavaScript</h3>
          </div>
          <div className="topmiddle">
            <h3 className="skill" id="python">Python</h3>
            <h3 className="skill" id="react">React</h3>
            <h3 className="skill" id="express">Express</h3>
            <h3 className="skill" id="sql">SQL</h3>
          </div>  
          <div className="topbottom"> 
            <h3 className="skill" id="postgres">Postgres</h3>
            <h3 className="skill" id="mongo">Mongo</h3>
            <h3 className="skill" id="mongoose">Mongoose</h3>
            <h3 className="skill" id="node">Node.js</h3>
          </div>   
          <div className="bottom">
            <h3 className="skill" id="gatsby">Gatsby.js</h3>
            <h3 className="skill" id="flask">Flask.js</h3>
            <h3 className="skill" id="blender">Blender</h3>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Home