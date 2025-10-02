import React, { use } from 'react';
import { MoneyContext } from './Familytree';

const Friend = () => {

    const [money,setMoney] = use(MoneyContext)

    return (
        <div>
            <h4>Husain</h4>
            <p>Family got : {money}</p>
        </div>
    );
};

export default Friend;