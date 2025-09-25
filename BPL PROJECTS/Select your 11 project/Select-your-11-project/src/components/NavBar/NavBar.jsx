import React from 'react';
import navImg from "../../assets/logo.png"
import Currency from "../../assets/Currency.png"
import bgShadow from '../../assets/bg-shadow.png'
import banner from '../../assets/banner-main.png'


const NavBar = ({ availableBalance }) => {
    return (
        <div>
            <div className="navbar max-w-[1200px] mx-auto">
                <div className="flex-1">
                    <a className="text-xl">
                        <img className='w-[60px] h-[60px]' src={navImg} alt="logo" />
                    </a>
                </div>
                <div className="flex items-center gap-3 border-2 border-green-400 rounded-xl p-2">
                    <span></span>
                    <span>coin</span>
                    <img src={Currency} alt="dollar" />
                </div>
            </div>


            <div
                style={{
                    backgroundImage: `url(${bgShadow})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className='p-6 max-w-[1200px] mx-auto  rounded-2xl'>
                <div

                    className=" mb-8 flex flex-col items-center justify-center gap-6"
                >
                    <img className='' src={banner} alt="" />
                    <h1 className='font-bold text-2xl '>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p>Beyond Boundaries Beyond Limits</p>

                    <div className='border-2 border-gray-300 p-1 rounded-2xl hover:scale-105'>
                        <button className="bg-gradient-to-r from-pink-500 to-yellow-300 border-2 border-black rounded-xl text-black font-bold px-6 py-3  transition-transform">
                            Claim Free Credit
                        </button>
                    </div>

                </div>
            </div>

        </div>


    );
};

export default NavBar;