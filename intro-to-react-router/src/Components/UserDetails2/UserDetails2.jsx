import React, { use } from 'react';



  const userStyle = {
    border: '2px solid red',
    borderRadius: '20px',
    padding: '10px',
    margin: '10px'
  };

const UserDetails2 = ({ userPromise }) => {
    const { name, username, email } = use(userPromise);
    // console.log(email)
    return (
        <div style={userStyle}>
            <p>User name : {username}</p>
            <h3>Name : {name}</h3>
            <p><small>Email : {email}</small></p>
        </div>
    );
};

export default UserDetails2;