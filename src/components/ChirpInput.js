import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';

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
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Input chirp text:</Form.Label>
            <Form.Control as="textarea" rows="2" maxLength="140" value={this.state.text} name="text" onChange={this.handleChange} required/>
            <Form.Text className="text-muted">
              Enter text post of 140 characters or less.
            </Form.Text>
          </Form.Group>
          <Button variant="dark" type="submit">Submit</Button>
        </Form>
      </>
    )
  }
}

export default ChirpInput;