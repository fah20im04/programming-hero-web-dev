import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    // console.log(user)\
    // const params = useParams();
    // console.log(params)
    const { website } = user
    return (
        <div>
            <h1>User Details Here</h1>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;