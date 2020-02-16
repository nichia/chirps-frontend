import React from 'react';
import ListChirps from '../components/ListChirps';
import { Alert, Container } from 'react-bootstrap';

const ChirpList = (props) => {
  return (
    props.errorFetch ? (
        <Container style={{ paddingTop: '30px'}}>
          <Alert color="danger">
            Error fetching data from server. Please try again later.
          </Alert>
        </Container>
      ) : (
        <Container style={{ paddingTop: '30px'}}>
          <ListChirps chirpList={props.chirpList} />
        </Container>
      )
  )
}

export default ChirpList;
