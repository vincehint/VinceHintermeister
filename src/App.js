import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './home.js'
import Portfolio from './portfolio.js'
import Resume from './resume.js'
import Contact from './contact.js'
import Header from './header.js'
import Footer from './footer.js'
import BeachBums from './beachbums.js'
import HorrorList from './horrorlist.js'
import GoblinKiller from './goblinkiller.js'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <Route exact path='/' component={Home}/>
        <Route path='/portfolio' component={Portfolio}/>
        <Route path='/resume' component={Resume}/>
        <Route path='/contact' component={Contact}/>
        <Route path="/beachbums" component={BeachBums}/>
        <Route path="/goblinkiller" component={GoblinKiller}/>
        <Route path="/horrorlist" component={HorrorList}/>
        <div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App