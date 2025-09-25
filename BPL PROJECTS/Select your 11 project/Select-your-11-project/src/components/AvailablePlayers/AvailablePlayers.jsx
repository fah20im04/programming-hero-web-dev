import React, { use } from 'react';
import Playercard from '../PlayerCard/Playercard';

const AvailablePlayers = ({ playerPromise,setAvailableBalance,availableBalance,selectedPlayers,setSelectedPlayers }) => {

    const playerData = use(playerPromise);
    //console.log(playerData)
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5'>

        {
            playerData.map(player => <Playercard selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player}></Playercard> )
        }

        </div>
    );
};

export default AvailablePlayers;