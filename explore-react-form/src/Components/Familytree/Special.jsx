import React, { useContext } from 'react';
import { AssetContext } from './Familytree';

const Special = ({ name, asset }) => {

    const newAsset = useContext(AssetContext)

    console.log(newAsset,"newAsset")
    return (
        <div>
            <h3>Special:{name}</h3>
            <h4>asset:{asset}</h4>
            <h4>new asset:{newAsset}</h4>
        </div>
    );
};

export default Special; <h3>Special</h3>