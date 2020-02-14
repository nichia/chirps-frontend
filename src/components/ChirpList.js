import React from 'react';
import ListChirps from '../components/ListChirps';
import { Alert, Container } from 'reactstrap';

const ChirpList = (props) => {
  console.log(props)
  return (
    props.errorFetch ? (
        <Container>
          <Alert color="danger">
            Error fetching data from server. Please try again later.
          </Alert>
        </Container>
      ) : (
        <Container>
          <ListChirps chirpList={props.chirpList} />
        </Container>
      )
  )
}

export default ChirpList;
