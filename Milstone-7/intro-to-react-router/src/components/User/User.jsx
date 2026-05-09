import React from 'react';

const User = ({ user }) => {

  const { name, email, phone } = user;

  return (
    <div>
      <h2>Name:{name}</h2>
      <p>Email:{email} </p>
      <p><small>Phone Number: {phone}</small></p>
    </div>
  );
};

export default User;