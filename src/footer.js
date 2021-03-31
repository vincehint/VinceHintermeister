import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

function Footer(props) {
  return (
    <div>
      <footer>
      <div className="footerLinks">
            <Link class="active" to="/" className="link">Home</Link>
            <Link to="/portfolio" className="link">Stuff I've Made</Link>
            <Link to="/resume" className="link">Resume</Link>
            <Link to="/contact" className="link">Contact</Link>
          </div>
      </footer>
    </div>
  )
}

export default Footer