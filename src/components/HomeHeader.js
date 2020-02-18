import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const HomeHeader = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Welcome to Bellbird!</h1>
        <p>
          A space to create chirps and share with others.
        </p>
      </Jumbotron>
    </div>
  )
}

export default HomeHeader;
