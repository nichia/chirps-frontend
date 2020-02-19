import React, { Component } from 'react';
import HomeHeader from '../components/HomeHeader';
import { Alert, Container, Form } from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: [],
      errorFetch: false
    }
  }

  componentDidMount() {
    this.fetchUsers();

    // retrieve currentUser from local storage if currentUser not found
    if (!this.props.currentUser.id) {

      let user = ''
      if (localStorage && localStorage.getItem('user')) {
        user = JSON.parse(localStorage.getItem('user'));
      }
      this.props.onSetCurrentUser(user.id);
    }
  }
  
  fetchUsers() {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) { 
        return response.json()  
      }
      throw response
    })
    .then(data => {
      console.log("%cData:", 'color:blue', data);

      this.setState({
        userList: data,
        errorFetch: false
      });
    })
    .catch(err => {
      if (err.json) {
        err.json().then(errMsg => {
          console.log('%cHTTP error:', 'color:red;', errMsg);

          this.setState({
            errorFetch: true
          });
        })
      } else {
        console.log('%cError:', 'color:red;', err);

        this.setState({
          errorFetch: true
        });
      }
    });
  }

  handleChange = (event) => {
    this.props.onSetCurrentUser(event.target.value);
  }

  renderUserList() {
    // Map through user objects
    const userListInfo = this.state.userList.map( user => {
      return (
        <option value={user.id} key={user.id} id={user.id}>
          {user.firstname} {user.lastname}
        </option>
      )
    });
    return userListInfo;
  };

  greetCurrentUser() {
    if (this.props.currentUser.id) {
      const username = this.props.currentUser.firstname
      return (
        <div>
          Welcome back, {username}!
          <p>You can navigate to Chirp Index to view and add new chirps</p>
        </div>
      )
    }
  }
  
  listUsers() {
    if (this.state.errorFetch) {
      return (
        <>
          <Alert color="danger">
            Error fetching data from server. Please try again later.
          </Alert>
        </>
      )
    } else {
      return (
        <>
          <Form.Group>
            <Form.Label>Select your name</Form.Label>
            <Form.Control as="select" multiple value={this.state.userList} name="user" onChange={this.handleChange}>
              {this.renderUserList()}
            </Form.Control>
          </Form.Group>
        </>
      )
    }
  }

  render() {
    
    return (
      <>
        <div>
          <HomeHeader />
        </div>
        <hr />
        <Container>
          {this.listUsers()}
          {this.greetCurrentUser()}
        </Container>
      </>
    );
  }
}

export default Home;