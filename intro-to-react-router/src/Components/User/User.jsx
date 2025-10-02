import React, { Suspense, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({ user }) => {

  const [showInfo, setShowInfo] = useState(false);
  const [visitHome,setVisitHome]= useState(false);
  const location = useLocation();
  console.log(location)

  const { id, name, email, phone } = user;

  const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());


  const userStyle = {
    border: '2px solid yellow',
    borderRadius: '20px',
    padding: '10px',
    margin: '10px'
  };

  if(visitHome){
    return <Navigate to="/"></Navigate>
  }
  return (
    <div style={userStyle}>
      <h3>{name}</h3>
      <p>Email = {email}</p>
      <p><small>Phone : {phone}</small></p>
      <Link to={`/users/${id}`}>Show Details</Link>
      <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'HIde' : 'Show'} info</button>
      {
        showInfo && <Suspense fallback={<span>LOading....</span>}>
          <UserDetails2 userPromise={userPromise}></UserDetails2>
        </Suspense>
      }
      <button onClick={()=>setVisitHome(true)}>Visti home</button>
    </div>
  );
};

export default User;
