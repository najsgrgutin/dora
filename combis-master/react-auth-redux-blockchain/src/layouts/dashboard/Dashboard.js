import React, { Component } from 'react'
import { Link } from 'react-router'
import Trip from '../../user/ui/Pictures/Trip.js'
import dora from '../../user/ui/Pictures/trip.jpg'

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }
  componentWillMount() {
    console.log("ispisuje props ovog")
    console.log(this.props)
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Dashboard</h1>
            <p><strong>Congratulations {this.props.authData.name}</strong> If you're seeing this page, you've logged in with your own smart contract successfully.</p>
            <p>If you want to buy our product, visit <Link to="/product"> Products</Link></p>
            <Trip/>
            <img src={dora} role="presentation" height="500" width="500"/>
          </div>
        </div>
      </main>
    )
  }
}

export default Dashboard
