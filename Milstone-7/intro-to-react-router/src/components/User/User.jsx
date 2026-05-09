import React from 'react';

const User = ({ user }) => {

  const { name, email, phone } = user;

  const userStyle = {
    border: '2px solid yellow',
    borderRadius: '20px',
    padding: '10px',
    margin: '10px'
  }

  return (
    <div style={userStyle}>
      <h2>Name:{name}</h2>
      <p>Email:{email} </p>
      <p><small>Phone Number: {phone}</small></p>
    </div>
  );
};

export default User;