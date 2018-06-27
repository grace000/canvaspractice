import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const MenuItem = {
	color:'#555A7A',
	borderColor:'transparent',
	fontSize:'1.5rem',
	fontFamily: 'Roboto, sans-serif'
}

export default class SearchHeader extends Component{
	
	state = {}

  	handleItemClick = (e, { name }) => this.setState({ activeItem: name})

  	render() {
    	const { activeItem } = this.state
    	
    	return (
    	
    		<div>
	    		<div style={{textAlign:'center'}}>
			      	<Menu compact pointing secondary style={{borderColor:'transparent'}}>
				        <Menu.Item name='projects' 
				        		   active={activeItem === 'projects'}
				        		   onClick={this.handleItemClick}
				        		   as={ Link } 
				        		   to='/'
				        		   style={MenuItem}/>
				        <Menu.Item name='about me' 
				        		   active={activeItem === 'about me'}
				        		   onClick={this.handleItemClick}
				        		   as={ Link } 
				        		   to='/aboutme'
				        		   style={MenuItem}/>
				        <Menu.Item name='resume'
				        		   active={activeItem === 'resume'}
				        		   onClick={this.handleItemClick}
				        		   as={ Link } 
				        		   to='/resume'
				        		   style={MenuItem}/>
				        <Menu.Item name='shop'
				        		   as = 'a' 
				        		   href="https://amarasisters.com"
				        		   target='_blank'
				        		   rel="noopener noreferrer"
				        		   style={MenuItem}/>
			      	</Menu>
	      		</div>
		    </div>
		)
	}
}

