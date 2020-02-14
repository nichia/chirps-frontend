import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import NoMatch from './components/NoMatch';
import ChirpListContainer from './containers/ChirpListContainer';

const App = () => {
  return (
    <div className="App">
      <NavBar/>
        <Switch>
          <Route exact path="/" component={ChirpListContainer} />
          <Route exact path="/index" component={ChirpListContainer} />
          <Route>
            <NoMatch />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
