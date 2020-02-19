import React from 'react';
import ListChirps from '../components/ListChirps';
import { Alert } from 'react-bootstrap';

const ChirpList = (props) => {
  const { chirpList, errorFetch, currentUser, onToggleUpvotes } = props;

  return (
    errorFetch ? (
        <div>
          <Alert variant="danger">
            Error fetching data from server. Please try again later.
          </Alert>
        </div>
      ) : (
        <div>
          <ListChirps chirpList={chirpList} currentUser={currentUser} onToggleUpvotes={onToggleUpvotes}/>
        </div>
      )
  )
}

export default ChirpList;
