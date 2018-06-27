import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Icon, 
		Grid,
	 	Container } from 'semantic-ui-react'


const FooterContainer = {
    marginTop:'2rem'
}


export default class Footer extends Component {



  render() {

    return (
      <div>
      	<Container style={FooterContainer}>
      		<Grid>
      			<Grid.Row>
      				<Grid.Column centered>
      					<Container textAlign='center' style={{minWidth:'300px'}}>
  							<a href="https://instagram.com/iberis.grace" target='_blank'>
      							<Icon className='example-appear' 
	      						  	  name='instagram' 
		      						  size='big'
		      						  style={{color: '#777DA7'}}/></a>
		      				<a href="mailto:tiffani.grace.elmore@gmail.com">
		      					<Icon className='example-appear' 
		      				     	  name='mail square' 
		      				      	  size='big' 
		      				          style={{color: '#777DA7'}}/></a>
			      			<a href="https://twitter.com/tiffani_elmore" target='_blank'>
			      				<Icon className='example-appear' 
			      					  name='twitter square' 
			      					  size='big' 
			      					  style={{color: '#777DA7'}}/></a>
		      				<a href="https://github.com/grace000" target='_blank'>
		      					<Icon className='example-appear' 
		      						  name='github square' 
		      						  size='big' 
		      						  style={{color: '#777DA7'}}/></a>
		      				<a href="https://www.linkedin.com/in/tiffani-elmore" target='_blank'>
		      					<Icon className='example-appear' 
		      					      name='linkedin square' 
		      					      size='big' 
		      					      style={{color: '#777DA7'}}/></a>
		      				<a href="https://amarasisters.com/" target='_blank'>
		      					<Icon.Group size='large' className='example-appear' style={{paddingLeft: '2px'}}>
				      				<Icon name='square outline' size='large' style={{color: '#777DA7'}}/>
				      				<Icon name='shopping bag' size='small' style={{color: '#777DA7'}}/>
		      					</Icon.Group></a>
	      				</Container>
      				</Grid.Column>
      			</Grid.Row>
      		</Grid>
      	</Container>
      </div>
    )
  }
}
