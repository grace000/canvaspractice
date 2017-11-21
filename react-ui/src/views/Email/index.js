import React, { Component } from 'react'
import '../../index.css'
import 'semantic-ui-css/semantic.min.css'
import { Icon, 
		Header, 
		Button, 
		Form,
	 	Message,
	 	TextArea,
	 	Divider,
	 	Container, 
	 	Grid  } from 'semantic-ui-react'

const ContactSection = {
	minHeight: "80vh",
	paddingBottom: "10vh",
	
}

const ContactContainer = {
	width: "50%",
	marginTop: "8em",
	minHeight: "80vh",
	paddingBottom: "10vh",
}

const FormStyle = {
	fontColor: "blue",
	border: '5px solid pink'
}

const EmailText = {
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
      		<Header id="contact-headertitle" as="h1">Site coming soon...</Header>
	      	<Header id="contact-header" textAlign="center">Interested in collaborating, grabbing coffee, or just saying hello? <Divider hidden/> Feel free to send me a message!</Header>
	      	<Form id="contact-entry" className="form-control">
			    <Form.Field>
			      <input className="form-control" placeholder='Your Name'/>
			    </Form.Field>
			    <Form.Field>
			      <input className="form-control" placeholder='Your Email Address' />
			    </Form.Field>
			    <Form.Field>
			      <Form.TextArea  style={EmailText} placeholder="Hey, let's chat!" />
			    </Form.Field>
			    <Grid column='centered'>
			    	<Grid.Row>
			    		<Grid.Column width='centered six'>
			    			<Button style={ContactButton} type='submit' size='medium' content='SEND'></Button>
			    		</Grid.Column>
			    	</Grid.Row>
			    </Grid>
			    <Message
			      success
			      header='Form Completed'
			      content="Talk to you soon!"
			    />
	  		</Form>
  		</Container>
      </div>
    )
  }
}

export default Email;