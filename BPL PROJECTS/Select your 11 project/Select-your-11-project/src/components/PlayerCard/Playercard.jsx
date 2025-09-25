import React, { useState } from 'react';
import userImg from "../../assets/user-1.png"
import flagImg from "../../assets/Vector.png"
import { toast } from 'react-toastify';

const Playercard = ({ player, setAvailableBalance, availableBalance, selectedPlayers, setSelectedPlayers }) => {
    const [isSelected, setISelected] = useState(false)

    return (
        <div key={player.playerCountry} className="p-4 card bg-base-100 shadow-sm">
            <figure>
                <img className='w-full h-[300px] object-cover'
                    src={player["playerImage"]}
                    alt="Shoes" />
            </figure>
            <div className=" mt-4">
                <div className='flex'>
                    <img src={userImg} alt="" />
                    <h2 className="card-title ml-2">{player.playerName}</h2>
                </div>
                <div className='flex justify-between mt-4 border-b-1 pb-2 border-gray-300'>
                    <div className='flex gap-2 items-center'>
                        <img className='w-[20px] h-[20px]' src={flagImg} alt="" />
                        <span>{player.playerCountry}</span>
                    </div>
                    <button className='btn'>{player.playingRole}</button>
                </div>
                <div className='flex justify-between font-bold '>
                    <span>Rating</span>
                    <span>
                        {player.rating}
                    </span>
                </div>
                <div className='flex justify-between  mt-4'>
                    <span className='font-bold'>{player.battingStyle}</span>
                    <span>
                        {player.bowlingStyle}
                    </span>
                </div>
                <div className="card-actions mt-4 justify-between items-center">
                    <p className='font-bold'>Price :${player.price}</p>
                    <button disabled={isSelected} onClick={() => {
                        setISelected(true)
                        if(availableBalance<player.price){
                            alert('You Dont have sufficient balance')
                            return;
                        }
                        // availableBalance < player.price
                        //     ? alert('You Dont have sufficient balance')
                        //     : setAvailableBalance(availableBalance - player.price)

                        setSelectedPlayers([...selectedPlayers, player])
                        if(selectedPlayers.length===6){
                            alert('you have akready selected six players')
                            return;
                        }
                        // if there was unneccessary string and commas than we can use this method
                        // player.price.split("USD").join("").spkit(",").join("") we can make a common function up than we can use this as well
                    }} className="btn ">{isSelected == true ? 'Selected' : 'Choose Player'}</button>
                </div>
            </div>
        </div>
    );
};

export default Playercard;