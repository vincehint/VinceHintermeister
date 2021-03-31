import React from 'react'
import resume from './assets/resume.png'

function Resume(props) {
  return (
    <div className="resBody">
      <h1 className="resHeader">Resume</h1>
      <img className="resume" src={resume} width="70%" alt="Vince Resume"/>
      <div className="download">
        <a href="./assets/HintermeisterResume.pdf" download>Download A Copy of Vince's Resume</a>
      </div>
    </div>
  )
}

export default Resume