import React, { use } from 'react';
import Counsin from './Counsin';
import { MoneyContext } from './Familytree';

const Aunt = ({asset}) => {

    const [money,setMoney] = use(MoneyContext)

    const handleAddMoney = () => {
        setMoney(money + 5000);
    }

    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Counsin asset={asset} name='Tom Tom'></Counsin>
                <Counsin name='monjur'></Counsin>
                
            </section>
            <button onClick={handleAddMoney}>Add 5k</button>
        </div>
    );
};

export default Aunt;