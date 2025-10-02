import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    // console.log(post)

    const navigate = useNavigate();
    return (
        <div>
            <h3>this is post details</h3>
            <h2>{post.title}</h2>
            <p>Post Body:{post.body}</p>
            <button onClick={() => navigate(-1)}>Go back</button>
        </div>
    );
};

export default PostDetails;