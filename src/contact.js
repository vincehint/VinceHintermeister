import React from 'react'

function Contact(props) {
  return (
    <div className="contactStuff">
      <h1 className="contactHeader">So, you want to get ahold of Vince?</h1>
      <p className="greatPara">Great! He'd love to hear from you on any web design, photography, or art requests. Here's his info!</p>
      <p className="info">Vince Hintermeister</p>
      <p className="info">Phone: 641-854-1212</p>
      <div className="contactLinks">
        <a className="info" target="_blank" href = "https://www.linkedin.com/in/vincent-hintermeister/">LinkedIn</a>
      </div>
      <div className="contactLinks">
        <a className="info" target="_blank" href = "https://github.com/vincehint">GitHub</a>
      </div>
      <div className="contactLinks">
        <a className="info" href = "mailto: vv.hintermeister@gmail.com">Send Vince An Email</a>
      </div>
    </div>
  )
}

export default Contact