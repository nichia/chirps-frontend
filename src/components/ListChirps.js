import React from 'react';

const ListChirps = (props) => {

  return (
    <div>
      <h1>Chirps</h1>
      <ul class="list-unstyled">
        {props.chirpList.map(chirp =>
          <li key={chirp.id}>
            {chirp.id} -- {chirp.text}
          </li>)}
      </ul>
    </div>
  );

}

export default ListChirps;