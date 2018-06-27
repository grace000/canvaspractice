import React from 'react'
import '../../index.css'
import 'semantic-ui-css/semantic.min.css'
import { Grid,
	 	 Header } from 'semantic-ui-react'
import SearchHeader from './SearchHeader'


const IntroHeader = {
	margin:'2rem',
	textAlign: 'center',
    width: '100%',
}

const AboutHeading = {
	color: '#61988E',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '2.6rem'
}

const AboutSubHeading = {
	color: '#885053',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '1.5rem'
}




const HomePage =() => (
	<div>
  		<Grid>
			<Grid.Row>
    			<Grid.Column style={IntroHeader}>
    				<Grid.Row>
    					 <Header style={AboutHeading} className="about__Heading">Hi, I'm Tiffani Elmore,</Header>
    				</Grid.Row>
    				<Grid.Row>
    					 <p style={AboutSubHeading} className="about__Subheading">
    					 	a Full Stack Web Developer
    					 </p>
    				</Grid.Row>
    			</Grid.Column>
    		</Grid.Row>
    	</Grid>
  		<SearchHeader/>
  	</div>

)

export default HomePage;