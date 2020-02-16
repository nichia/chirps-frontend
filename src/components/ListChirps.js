import React from 'react';

const ListChirps = (props) => {

  return (
    <div>
      <h4>Chirps</h4>
      <ul className="list-unstyled">
        {props.chirpList.map(chirp =>
          <li key={chirp.id}>
            {chirp.id} -- {chirp.text}
          </li>)}
      </ul>
    </div>
  );

}

export default ListChirps;