import React from 'react';
import noImage from '../assets/no-image.png';

const NoMatch = ({ history }) => {
  return (
    <div>
      <style>
        {`
          html, body{
            background-image: url(${noImage});
              background-repeat: no-repeat;
              background-size: cover;
              position: relative;
          }
        `}
      </style>
    </div>
  );
};

export default NoMatch;