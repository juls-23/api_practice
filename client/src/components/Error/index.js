import React from 'react';

const Error = (props) => {
  const {clearError} = props;
  return (
    <div>
    <span style={{color:'red'}}>we have problems with the server, try later</span>
    <button onClick={clearError}>X</button>
    </div>
  );
}

export default Error;
