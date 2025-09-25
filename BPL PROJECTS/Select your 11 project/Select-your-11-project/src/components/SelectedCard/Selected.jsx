import React from 'react';

const Selected = ({player,removePlayer}) => {
    console.log(player)
    const handleRemove =()=>{
        removePlayer(player)
    }
    return (
        <div>
            <div className='rounded-2xl mt-7 shadow-2xl border-2 border-gray-900 flex justify-between items-center p-4'>
                <div className='flex gap-4'>
                    <img src={player.playerImage}
                    
                    className='h-[50px] w-[50px] rounded-xl'  alt="" />
                    <div>
                        <h1 className='font-bold text-gray-500'>{player.playerName}</h1>
                        <h3 className='font-bold text-gray-600'>{player.battingStyle}</h3>
                    </div>
                </div>
                <div onClick={handleRemove}>
                    <img src="https://i.ibb.co.com/VWHvb9cL/Frame.png" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Selected;