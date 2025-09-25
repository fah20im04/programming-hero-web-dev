import React from 'react';
import Selected from '../SelectedCard/Selected';

const SelectedPlayers = ({ selectedPlayers,removePlayer }) => {
    console.log(selectedPlayers)
    return (
        <div className='max-w-[1200px] mx-auto'>
            {
                selectedPlayers.map(player=><Selected player={player} selectedPlayers={selectedPlayers} removePlayer={removePlayer}></  Selected>)
            }

        </div>
    );
};

export default SelectedPlayers;



