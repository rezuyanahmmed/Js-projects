import React from 'react';
import { Link } from 'react-router';

const User = ({ user }) => {

  const { id, name, email, phone } = user;

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
      <Link to={`/users/${id}`}>Show details</Link>
    </div>
  );
};

export default User;