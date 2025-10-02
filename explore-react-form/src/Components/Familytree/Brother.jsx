import React, { use } from 'react';
import { MoneyContext } from './Familytree';

const Brother = () => {

    const [money, setMoney] = use(MoneyContext)
    return (
        <div>
            <h3>My Brother</h3>
            <button onClick={() => setMoney(money + 1000)}>Add 1000 tk</button>
        </div>
    );
};

export default Brother; <h3>My Brother</h3>