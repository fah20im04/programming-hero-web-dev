import React, { use } from 'react';

const Users2 = ({users2Promise}) => {
    const users = use(users2Promise)
    console.log("users2 data load",users)
    return (
        <div>
            <h3>This is user 2</h3>
        </div>
    );
};

export default Users2;