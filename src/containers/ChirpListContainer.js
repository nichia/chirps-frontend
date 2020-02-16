import React, { Component } from 'react';
import ChirpList from '../components/ChirpList';
import ChirpInput from '../components/ChirpInput';

class ChirpListContainer extends Component {

  constructor() {
    super();

    this.state = {
      chirpList: [],
      errorFetch: false
    }
  }

  componentDidMount() {
    
    fetch('http://localhost:3000/api/v1/chirps', {
      method: 'GET'
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
        console.log(chirp)
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

  render() {

    return (
      <>
          <ChirpInput onAddChirp={this.onAddChirp}/>
          <ChirpList chirpList={this.state.chirpList} errorFetch={this.state.errorFetch}/>
      </>
    );
  }
}

export default ChirpListContainer;
