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
const Parallax = {
    backgroundImage: 'url(https://t4.ftcdn.net/jpg/00/97/15/75/500_F_97157530_KV1ZLLeNp1wok83XG3EvPfmWZCl5Qv9a.jpg)',
    minHeight: '80vh',

    /* Create the parallax scrolling effect */
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position:'absolute',
    zIndex: '-50',
    
}


const ContactContainer = {
	minWidth: "200px",
	maxWidth: "50%",
	marginTop: "3em",
	minHeight: "80vh",
	paddingTop: '24vh',
	paddingBottom: "10vh",
	background: 'transparent',
	
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
      	<Grid column='centered' style={{marginTop: '2em'}}>
	    	<Grid.Row>
	    		<Grid.Column width='centered'>
				  <Header id="contact-maintenance">COMING SOON!</Header>
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