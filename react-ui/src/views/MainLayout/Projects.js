import React, { Component } from 'react'
import '../../index.css'
import 'semantic-ui-css/semantic.min.css'
import { Grid,
         Header,
         Image } from 'semantic-ui-react'
import NYT from '../../assets/images/nytreact.png'
import Eatdaburger from '../../assets/images/eatdaburger.png'
import Fivetonine from '../../assets/images/fivetonine.png'
import Gifs from '../../assets/images/gifs.png'
import Flashcards from '../../assets/images/flashcards.png'
import Quotes from '../../assets/images/quotes.png'
import Footer from './Footer'

const ProjectContainer = {
  margin:'1rem',
  height:'70vh',
  overflowY: 'scroll',
  // position:'absolute'
}

const ProjectContent = {
  backgroundColor:'#e3e6f7',
  margin: '2rem 0',
  boxShadow: '10px 13px 25px 0px rgba(0,0,0,0.41)',
  fontSize: '1 rem',
  fontFamily: 'Montserrat',
  lineHeight:0
}

const ProjectHeader = {
  fontSize: '1.7rem',
  fontFamily: 'Montserrat',
  paddingTop:'1rem'
}

const ProjectDescription = {
  fontSize: '1.2rem',
  fontFamily: 'Montserrat',
  lineHeight:0
}

export default class Projects extends Component {

  constructor(props) {
  super(props);
    this.state = {
      projects: [
        {Header: "New York Times", Description:"Users search and save articles", Tech:"Node, Express, MongoDB, React, Axios, API", Href:"https://nyt-react-tiffani.herokuapp.com/", Image:NYT},
        {Header: "Eat Da Burger", Description:"Users order and eat burgers", Tech:"Node, Express, Handlebars, MySQL", Href:"https://tiffsburgers.herokuapp.com/", Image:Eatdaburger},
        {Header: "Five to Nine", Description:"Social networking event platform", Tech:"Node, React, MailChimp, AWS", Href:"https://fivetoninewebapp.herokuapp.com/", Image:Fivetonine},
        {Header: "Gif Finder", Description:"Giftastic Gif Generator", Tech:"JavaScript, CSS, HTML, API", Href:"https://gifs-on-gifs.herokuapp.com/", Image:Gifs},
        {Header: "Flashcards with Auth0", Description:"Create and study flashcards", Tech:"Flask, Python, Angular, PostgreSQL", Image:Flashcards},
        {Header: "Random Quote Generator", Description:"Read and tweet favorite quotes", Tech:"React, AJAX, HTML, CSS, API", Href:"https://codepen.io/grace000/pen/rKWXmJ", Image:Quotes}
      ]
    }
  }

  	render(){

      const items = this.state.projects.map((project, k) => 
        <Grid.Row key={k} style={ProjectContent}>
          <div>
            <Header style={ProjectHeader}>{project.Header}</Header>
            <h4 style={ProjectDescription}>{project.Description}</h4>
            <div>
              <p>{project.Tech}</p>
              <Image src={project.Image} href={project.Href} target='_blank' rel="noopener noreferrer"/>
            </div>
          </div>
        </Grid.Row>
      )


  		
        return (
          <div>
            <Grid centered style={ProjectContainer}>
              <Grid.Row>
                <Grid.Column mobile={14} computer={12} tablet={14}>
                  {items}
               </Grid.Column>
             </Grid.Row>
             <Grid.Row>
               <Grid.Column>
                <Footer/>
               </Grid.Column>
             </Grid.Row>
            </Grid>
          </div>
        )
    } 
  	
    
}

