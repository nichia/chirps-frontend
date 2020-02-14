import React, { Component } from 'react'
import { Container } from 'reactstrap';

class ChirpInput extends Component {
 
  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onAddChirp(this.state)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <label>Input Chirp Text: </label>
          <input type='text' placeholder='Name' value={this.state.text} name="text" onChange={this.handleChange}/><br/>
          <input type="submit"/>
        </form>
      </Container>
    )
  }
}

export default ChirpInput;