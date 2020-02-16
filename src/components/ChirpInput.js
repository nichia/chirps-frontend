import React, { Component } from 'react'
import { Button, Container, Form } from 'react-bootstrap';

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
          <Form.Group>
            <Form.Label>Input chirp text:</Form.Label>
            <Form.Control as="textarea" rows="2" maxLength="140" value={this.state.text} name="text" onChange={this.handleChange} required/>
            <Form.Text className="text-muted">
              Enter text post of 140 characters or less.
            </Form.Text>
          </Form.Group>
          <Button variant="outline-primary" type="submit">Submit</Button>
        </form>
      </Container>
    )
  }
}

export default ChirpInput;