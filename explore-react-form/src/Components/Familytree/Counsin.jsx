import React from 'react';
import Special from './Special';
import Friend from './Friend';

const Counsin = ({name,asset}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === 'Tom Tom' && <Special asset={asset}></Special>            
            }
            {
                name === 'monjur' && <Friend></Friend>
            }
        </div>
    );
};
{name}
export default Counsin;