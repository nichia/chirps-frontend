import React from 'react';
import ListChirps from '../components/ListChirps';
import { Alert, Container } from 'react-bootstrap';

const ChirpList = (props) => {
  const { chirpList, errorFetch, currentUser, onToggleUpvotes } = props;

  return (
    errorFetch ? (
        <Container style={{ paddingTop: '30px'}}>
          <Alert color="danger">
            Error fetching data from server. Please try again later.
          </Alert>
        </Container>
      ) : (
        <Container style={{ paddingTop: '30px'}}>
          <ListChirps chirpList={chirpList} currentUser={currentUser} onToggleUpvotes={onToggleUpvotes}/>
        </Container>
      )
  )
}

export default ChirpList;
