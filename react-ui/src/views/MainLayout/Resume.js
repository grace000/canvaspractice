import React, { Component } from 'react'
import '../../index.css'
import 'semantic-ui-css/semantic.min.css'
import { Grid, List, Button } from 'semantic-ui-react'
import Footer from './Footer'

const ResumeContainer = {
  margin:'1rem',
  height:'70vh',
  overflowY: 'scroll'
}

const ResumeContent = {
	display: 'block',
    position: 'relative',
    fontSize: '1.5rem',
    lineHeight: '1.5',
    fontFamily: 'Montserrat',
    color:'#885053',
}

const ResumeItem = {
	fontSize: '1.1rem',
	padding:'1rem'
}


export default class Resume extends Component {

  	render(){
  		return (
  			<div>			
  				<Grid style={ResumeContainer} stackable columns={2}>
	    			{/*<Grid.Column computer={14} tablet={16}>*/}
	    				
	    				<Grid.Row>
							<Grid.Column width={4} floated='right'>
								<Button basic color="grey" 
										href='https://drive.google.com/file/d/1wkRxKK06xvdsFHxq5usn5Olrg-DrgwF8/view?usp=sharing'>
										Download Resume
								</Button>
							</Grid.Column>
	  					</Grid.Row> 

	    				<Grid.Row centered style={ResumeContent}>

    						
	  						
	    					<Grid.Column width={4}>	    						
	    							<p>Skills</p>
	    					</Grid.Column>
	    					<Grid.Column width={12}>
	    						<Grid.Row>
		    						<List bulleted horizontal link>
									    <List.Item>JavaScript</List.Item>
									    <List.Item>CSS</List.Item>
									    <List.Item>HTML</List.Item>
									    <List.Item>Node</List.Item>
									    <List.Item>Express</List.Item>
									    <List.Item>API</List.Item>
									    <List.Item>REST</List.Item>
									    <List.Item>Git</List.Item>
									    <List.Item>React</List.Item>
									    <List.Item>Handlebars</List.Item>
									    <List.Item>Photoshop</List.Item>
									    <List.Item>jQuery</List.Item>
									    <List.Item>Python</List.Item>
									    <List.Item>MongoDB</List.Item>
									    <List.Item>noSQL</List.Item>
									    <List.Item>SQL</List.Item>
	  								</List>
  								</Grid.Row>
	    					</Grid.Column>
	    				</Grid.Row>
	    				
	    				<Grid.Row centered style={ResumeContent}>
	    					<Grid.Column width={4}>
	    						<p>Developed Applications</p>
	    					</Grid.Column>
	    					<Grid.Column width={12}>
	    						<Grid.Row style={ResumeItem}>
	    							<h4>EAT DA BURGER</h4>
	    							<List bulleted>
									    <List.Item>Interactive application that allows users to generate burgers</List.Item>
									    <List.Item>Uses the MVC pattern to store, manipulate, and present burger data</List.Item>
									    <List.Item>Handlebars, Node, Express, MySQL, Sequelize ORM</List.Item>
									</List>
	    						</Grid.Row>
	    						<Grid.Row style={ResumeItem}>
	    							<h4>NEW YORK TIMES</h4>
	    							<List bulleted>
									    <List.Item>Users can search for New York Times articles with keywords and dates</List.Item>
									    <List.Item>Allows users to view and save articles</List.Item>
									    <List.Item>New York Times API, React, Node, Express, MongoDB, Axios</List.Item>
									</List>
	    						</Grid.Row>
	    					</Grid.Column>
	    				</Grid.Row>
	    				
	    				<Grid.Row centered style={ResumeContent}>
	    					<Grid.Column width={4}>
	    						<p>Side Projects</p>
	    					</Grid.Column>
	    					<Grid.Column width={12}>
	    						<Grid.Row style={ResumeItem}>
	    							<h4>Volunteer Web Developer June 2018 – Present</h4>
	    							<p>State Matters</p>
	    							<List bulleted>
	    								<List.Item>Civic platform raising awareness of how local issues are represented on ballots</List.Item>
	    								<List.Item>Building site with React and Node</List.Item>			    							
	    							</List>
	    						</Grid.Row>
	    						<Grid.Row style={ResumeItem}>
	    							<h4>Volunteer Web Developer October 2017 – May 2018</h4>
	    							<p>Five to Nine</p>
	    							<List bulleted>
	    								<List.Item>Social event networking platform for emerging business and tech leaders</List.Item>
	    								<List.Item>Built site with React and Node in agile environment</List.Item>  
	    							</List>
	    						</Grid.Row>
	    					</Grid.Column>
	    				</Grid.Row>
	    				
	    				<Grid.Row centered style={ResumeContent}>
	    					<Grid.Column width={4}>
	    						<p>Professional Experience</p>
	    					</Grid.Column>
	    					<Grid.Column width={12}>
	    						<Grid.Row style={ResumeItem}> 
	    							<h4>Division Administrative Coordinator June 2015 - June 2018</h4>
	    							<p>Northwestern Memorial Hospital, Chicago, IL</p>
	    							<List bulleted>
	    								<List.Item>Facilitate physician recruitment, credentialing, and on-boarding</List.Item>
	    								<List.Item>Process invoices, purchase requisitions, and travel expenses with various financial systems</List.Item>
	    								<List.Item>Create and manage physician scheduling with intra-hospital software</List.Item>
	    							</List>
	    						</Grid.Row>
	    						<Grid.Row style={ResumeItem}>
	    							<h4>Community Resource Educator August 2014 – May 2015</h4>
	    							<p>Saint Anthony Hospital, Chicago, IL</p>
	    							<List bulleted>
		    							<List.Item>Assessed basic client needs and expedited applications for health care and social services</List.Item>
		    							<List.Item>Recruited participants and coordinated community-based workshops, classes, and groups</List.Item>
		    							<List.Item>Documented and evaluated program and client data using several reporting systems</List.Item>
	    							</List>
	    						</Grid.Row>
	    					</Grid.Column>
	    				</Grid.Row>
	    				
	    				<Grid.Row centered style={ResumeContent}>
	    					<Grid.Column width={4}>
	    						<p>Education</p>
	    					</Grid.Column>
	    					<Grid.Column width={12} style={ResumeItem}>
	    						<p><strong>Northwestern University </strong>Full Stack Web Development, August 2017</p>
	    						<p><strong>DePaul University </strong>Master of Science in International Public Service, In Progress</p>
	    						<p><strong>University of Illinois at Chicago </strong>Bachelor of Arts in Spanish, May 2014</p>
	    					</Grid.Column>
	    				</Grid.Row>
	    				
	    				

	    				
	    				<Grid.Row centered>
			            	<Footer/>
			            </Grid.Row>

			            
	    			{/*</Grid.Column>*/}
				</Grid>
  			</div>
  		)
  	}
}