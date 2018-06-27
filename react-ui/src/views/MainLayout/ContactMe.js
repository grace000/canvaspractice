import React, { Component } from 'react'
import '../../index.css'
import 'semantic-ui-css/semantic.min.css'
import { Icon, 
		Container,
		Header, 
	 	Grid } from 'semantic-ui-react'
import Footer from '../MainLayout/Footer'

const ContactSection = {
	minHeight: "80vh",
	paddingBottom: "5vh"
	
}

const ChatBox = {
	lineHeight: "1.42857143",
    color: "#885053",
    backgroundColor: "#fff",
    border: "2px solid #61988E",
    borderRadius: "5px",
    boxShadow: "none",
    fontSize: "16px",
    height: "auto",
    fontFamily: 'Montserrat'
}

const ContactButton = {
	backgroundColor: "#61988E",
	width: "100%",
	color: '#fff',
	fontSize: "16px",
	fontFamily: 'Montserrat'
}

export default class ContactMe extends Component {

  render() {

    return (
      <div>
        	<Grid>
            <Grid.Column>
    	    	  <Grid.Row>
    				    <Header>Contact Me</Header>
    	    		</Grid.Row>
              <Grid.Row>
                <p></p>
              </Grid.Row>
              <Grid.Row>
                <Header>Contact Me</Header>
              </Grid.Row>
            </Grid.Column>
  	      </Grid>
  		<Footer />
      </div>
    )
  }
}
