import React, { Component } from 'react'
import '../../index.css'
import headshot from '../../assets/images/headshot300.png'
import 'semantic-ui-css/semantic.min.css'
import { Grid, Image } from 'semantic-ui-react'
import Footer from './Footer'

const AboutContainer = {
  margin:'1rem'
}

const AboutContent = {
	display: 'block',
    position: 'relative',
    fontSize: '1.5rem',
    lineHeight: '1.5',
    marginTop: '1em',
    fontFamily: 'Montserrat',
    color:'#885053'
}

const ImageContainer = {
	margin:'1.5rem'
}

const HeadshotCirle = {
	borderRadius:'50%'
}

export default class AboutMe extends Component {

  	render(){
  		return (
  			<div>
  				<Grid centered style={AboutContainer} stackable={3}>
	    			<Grid.Column computer={10} tablet={16}>
	    				<Grid.Row className="about__content" style={AboutContent}>
	    					<p>I have a passion for creating quality 
	    					 	user-friendly and civic-minded solutions. I design and develop 
	    					 	applications for all devices.</p>
        					<p>During code breaks, I enjoy creating art, watching my cats chase 
        						red dots, and posting food pics.</p>
	    				</Grid.Row>
	    				<Grid.Row>
	    				<div style={ImageContainer}>
		    				<Image src={headshot}
					 	 		className="headshot"
					 	 		size='small'
					 	 		style={HeadshotCirle}
					 	 		centered/>
				 	 	</div>
	    				</Grid.Row>
	    				<Grid.Row>
			            	<Footer/>
			            </Grid.Row>
	    			</Grid.Column>
				</Grid>
  			</div>
  		)
  	}
}