import React, { Component } from 'react'
import picture from './trip.jpg'

class Trip extends Component{
	render(){
		return(
			<div>
				<h3>Trip</h3>
				<img src={picture} role="presentation" height="500" width="500"/>
			</div>
		)
	}
}

export default Trip