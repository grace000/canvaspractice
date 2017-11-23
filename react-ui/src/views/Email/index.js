import React, { Component } from 'react'
import '../../index.css'
import 'semantic-ui-css/semantic.min.css'
import { Icon, 
		Header, 
		Button, 
	 	Divider,
	 	Container,
	 	Grid } from 'semantic-ui-react'
import Footer from '../MainLayout/Footer'

const ContactSection = {
	minHeight: "80vh",
	paddingBottom: "10vh",
	
}

const ContactContainer = {
	minWidth: "200px",
	maxWidth: "50%",
	marginTop: "12em",
	minHeight: "80vh",
	paddingBottom: "10vh",
}

const FormStyle = {
	fontColor: "blue",
	border: '5px solid pink'
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

class Email extends Component {

  render() {

    return (
      <div className="Email" style={ContactSection}>
      	<Container style={ContactContainer}>
      		<Header id="contact-maintenance" as="h1">Site coming soon...</Header>
      	<Grid column='centered' style={{marginTop: '2em'}}>
	    	<Grid.Row>
	    		<Grid.Column width='centered six'>
				    <Icon.Group size='massive' style={{color:'#61988E'}}>
				    	<Icon loading size='large' name='setting' />
				    	<Icon loading size='large' name='setting' />
				    </Icon.Group>
				    <Icon loading size='massive' name='setting' style={{color:'#61988E'}}/>
	    		</Grid.Column>
	    	</Grid.Row>
	    </Grid>
  		</Container>
  		
  		<Footer />
      </div>
    )
  }
}

export default Email;