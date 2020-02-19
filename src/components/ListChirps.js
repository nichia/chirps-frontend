import React from 'react';

const ListChirps = (props) => {
  const { chirpList, currentUser, onToggleUpvotes } = props;

  const upVoteIcon = (chirp) => {
    if (currentUser.id) {
      let voteIcon = <i className="far fa-thumbs-up" onClick={() => addToUpvotes(chirp)}></i>;
  
      const hasUpvoted = currentUser.upvoted_for.some(
        user => user.id === chirp.id
      )

      if (hasUpvoted) {
        voteIcon = <i className="fas fa-thumbs-up" onClick={() => removeFromUpvotes(chirp)}></i>;
      }
  
      return voteIcon;
  
    } else {
      return null;
    }
  }

  const addToUpvotes = (chirp) => {
    fetch(`http://localhost:3000/api/v1/users/${currentUser.id}/add_to_upvotes`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        chirp: {
          id: chirp.id,
        }
      })
    })
    .then(response => {
      if (response.ok) { 
        return response.json()  
      }
      throw response
    })
    .then(user => {
      onToggleUpvotes(user)
    })
    .catch(error => {
      console.log(error);
    });
  }
  
  const removeFromUpvotes =  (chirp) => {
    fetch(`http://localhost:3000/api/v1/users/${currentUser.id}/remove_from_upvotes`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        chirp: {
          id: chirp.id,
        }
      })
    })
    .then(response => {
      if (response.ok) { 
        return response.json()  
      }
      throw response
    })
    .then(user => {
      onToggleUpvotes(user)
    })
    .catch(error => {
      console.log(error);
    });
  }
  
  return (
    <div>
      <ul className="list-unstyled">
        {chirpList.map(chirp =>
          <li key={chirp.id}>
            {chirp.id} -- {chirp.text.toUpperCase()} -- {upVoteIcon(chirp)} 
          </li>)}
      </ul>
    </div>
  );

}

export default ListChirps;