import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Components/Post/Post';

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
           <h3>This is posts:{posts.length}</h3> 

           <div>
             {
                posts.map(post => <Post key={post.id} post={post}></Post>)
             }
           </div>
        </div>
    );
};

export default Posts;<h3>This is posts</h3>