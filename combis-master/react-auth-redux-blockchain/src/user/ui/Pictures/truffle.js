import React, { Component } from 'react'
import picture from './truffle.png'

class truffle extends Component{
	render(){
		return(
			<div>
				<h3>Truffles</h3>
				<img src={picture} role="presentation"/>
			</div>
		)
	}
}

export default truffle