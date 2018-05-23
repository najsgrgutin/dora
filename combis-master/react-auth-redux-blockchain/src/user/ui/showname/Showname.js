import React, { Component } from 'react'

class Showname extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.name
    }
  }

  onInputChange(event) {
    this.setState({ name: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.name.length < 2)
    {
      return alert('Please fill in your name.')
    }
    console.log(this.state.name +" name")
    this.props.onProfileFormSubmit(this.state.name)
  }

  render() {
    return(
      <div>
        <h3>Hi, {this.state.name} </h3>
      </div>
    )
  }
}

export default Showname
