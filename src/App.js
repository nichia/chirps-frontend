import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import NoMatch from './components/NoMatch';
import Home from './containers/Home';
import ChirpListContainer from './containers/ChirpListContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {}
    };
  }

  onSetCurrentUser = (userId) => {

    fetch(`http://localhost:3000/api/v1/users/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.json()
    })
    .then (user => {
      this.setState({
        currentUser: user
      }, () => {
        //store current user in local storage
        localStorage.setItem('user',
        JSON.stringify(this.state.currentUser));
      })
    })
  }

  onToggleUpvotes = (user) => {
    let newUser = {...this.state.currentUser}
    newUser.voted_for = user.voted_for
    this.setState({
      currentUser: user
    })
  }

  render() {

    return (
      <div className="App">
        <NavBar/>
          <Switch>
            <Route exact path="/" 
              render={(routerProps) => <Home {...routerProps} onSetCurrentUser={this.onSetCurrentUser} currentUser={this.state.currentUser}/>} >
            </Route>
            <Route exact path="/index" 
              render={(routerProps) => <ChirpListContainer {...routerProps} onSetCurrentUser={this.onSetCurrentUser} currentUser={this.state.currentUser} onToggleUpvotes={this.onToggleUpvotes}/>} >
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
      </div>
    );
  }
}

export default App;
