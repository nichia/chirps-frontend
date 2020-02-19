import React, { Component } from 'react';
import ChirpList from '../components/ChirpList';
import ChirpInput from '../components/ChirpInput';
import { Container } from 'react-bootstrap';

class ChirpListContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      chirpList: [],
      errorFetch: false,
      sortBy: 'r' // sortBy: 't':top upvotes, 'r':recent
    }
  }

  componentDidMount() {
    // retrieve currentUser from local storage if currentUser not found
    if (!this.props.currentUser.id) {
      let user = ''
      if (localStorage && localStorage.getItem('user')) {
        user = JSON.parse(localStorage.getItem('user'));
      }
      this.props.onSetCurrentUser(user.id);
    }

    this.fetchChirps();
  }

  fetchChirps() {
    fetch(`http://localhost:3000/api/v1/chirps?sort_by=${this.state.sortBy}`, {
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
      console.log("%cChirpList Data:", 'color:blue', data);
  
      this.setState({
        chirpList: data,
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

  onAddChirp = (chirp) => {
    fetch('http://localhost:3000/api/v1/chirps', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(chirp)
    })
    .then(response => {
      if (response.ok) { 
        return response.json()  
      }
      throw response
    })
    .then(chirp => {
      if (chirp.error) {
        alert(chirp.errors)
      } else {
        console.log("Added Chirp: ", chirp)
        let newChirpList = [chirp, ...this.state.chirpList]
        this.setState({
          chirpList: newChirpList
        })
      }
    })
    .catch(err => {
      if (err.json) {
        err.json().then(errMsg => {
          console.log('%cHTTP error:', 'color:red;', errMsg.text);
          alert(errMsg.text)
        })
      } else {
        console.log('%cError:', 'color:red;', err);
        alert(err)
      }
    });
  };
    
  handleChange = (event) => {
    this.setState({
      sortBy: event.target.value
    }, () => this.fetchChirps())
  }

  sortByDropdown() {
    return (
      <div>
        <hr/>
        <label>Chirps sort by:</label>
        <select value={this.state.sortBy} name="sortby" onChange={this.handleChange}>
          <option value="r">Recent</option>
          <option value="t">Top</option>
        </select>
      </div>
    )
  }

  render() {

    return (
      <Container>
        <ChirpInput onAddChirp={this.onAddChirp}/>
        {this.sortByDropdown()}
        <ChirpList chirpList={this.state.chirpList} errorFetch={this.state.errorFetch} currentUser={this.props.currentUser} onToggleUpvotes={this.props.onToggleUpvotes}/>
      </Container>
    );
  }
}

export default ChirpListContainer;
