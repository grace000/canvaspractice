import {Route, BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import './App.css';
import AboutMe from './views/MainLayout/AboutMe'
import Projects from './views/MainLayout/Projects'
import HomePage from './views/MainLayout/HomePage'
import Resume from './views/MainLayout/Resume'


// const renderProjects      = () => <Projects/>
// const renderAboutMe       = () => <AboutMe />
// const renderHomePage      = () => <HomePage />


const App = () => (
  <Router>

      <div>
       <HomePage/>      
            <Route exact path="/" component={Projects}/>
            <Route path="/aboutme" component={AboutMe}/>
            <Route path="/resume" component={Resume}/>
      </div>

  </Router>
)

export default App;